import React from 'react';
import Menu from "./Menu";
import {
	shallow,
	mount
} from 'enzyme';


describe("Menu", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Menu /> );
	});

	it("should be able to mount", () => {
		mount(<Menu /> );
	});

	it("should have root element as a section tag with id menu", () => {
		const section = wrapper.find("section").first();

		expect(section.props().id).toEqual("menu");
	});


})
