import React from 'react';
import Footer from "./Footer";
import { shallow, mount } from "enzyme";


describe("Footer", () => {
	let wrapper;
	const props = {
		hasCopyright: true,
		socialLinks: [
			{
				name: "social",
				link: "http://www.social.com"
			}
		]
	}

	beforeEach(() => {
		wrapper = shallow(<Footer {...props}/>);
	});

	it("should be able to mount", () => {
		mount(<Footer {...props}/>)
	});

	it("should have a section element", () => {
		let section = wrapper.find("section");

		expect(section.length).toEqual(1);
		expect(section.props().id).toEqual("footer");
	});

	it("should have 1 ul element with classname icons", () => {
		let ul = wrapper.find("ul");

		expect(ul.length).toEqual(1);
		expect(ul.hasClass("icons")).toEqual(true)
	});

	it("should have copyright when hasCopywright has been set to true", () => {
		let p = wrapper.find("p");

		expect(p.length).toEqual(1);
		expect(p.hasClass("copyright")).toEqual(true)
	});

	it("should not have copyright when hasCopywright has been set to false", () => {
		let newProps = {
			...props,
			hasCopyright: false
		}
		wrapper.setProps(newProps);

		let p = wrapper.find("p");

		expect(p.length).toEqual(0);
	});
})