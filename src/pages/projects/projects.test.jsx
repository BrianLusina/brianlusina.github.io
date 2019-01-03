/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from "enzyme";
import { ProjectsPage } from '.';

xdescribe('ProjectsPage', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ProjectsPage />);
	});
    
	it("should be able to mount", () => {
		mount(<ProjectsPage />);
	});
    
	it("should have 1 section element", () => {
		let section = wrapper.find("section");

		expect(section.length).toEqual(1);
	});
})
