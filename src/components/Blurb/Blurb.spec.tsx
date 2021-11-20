import React from "react";
import {
	shallow,
	mount
} from "enzyme";
import AboutBlurb from "./AboutBlurb";


describe("AboutBlurb", () => {
	let wrapper;
	const props = {
		about: "About blurb"
	};

	beforeEach(() => {
		wrapper = shallow(<AboutBlurb {...props}/>);
	});

	it("should be able to mount", () => {
		mount(<AboutBlurb {...props}/>);        
	});

	it("should have 1 section element", () => {
		const section = wrapper.find("section");
		expect(section.length).toEqual(1);
	});
})
