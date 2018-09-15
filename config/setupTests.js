"use-strict"

const {
	JSDOM
} = require("jsdom");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const {
	window
} = jsdom;

function copyProps(src, target) {
	const props = Object.getOwnPropertyNames(src)
		.filter(prop => typeof target[prop] === "undefined")
		.reduce(
			(result, prop) => ({
				...result,
				[prop]: Object.getOwnPropertyDescriptor(src, prop)
			}), {}
		);
	Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
	userAgent: "node.js"
};
global.event = window.event;
global.e = window.event;

global.Range = function Range() {};

const createContextualFragment = html => {
	const div = document.createElement("div");
	div.innerHTML = html;
	return div.children[0]; // so hokey it's not even funny
};

Range.prototype.createContextualFragment = html =>
	createContextualFragment(html);

// HACK: Polyfil that allows codemirror to render in a JSDOM env.
global.window.document.createRange = function createRange() {
	return {
		setEnd: () => {},
		setStart: () => {},
		getBoundingClientRect: () => {
			return {
				right: 0
			};
		},
		getClientRects: () => [],
		createContextualFragment
	};
};

copyProps(window, global);

// configure enzyme
enzyme.configure({
	adapter: new Adapter()
});
