import React from 'react'
import Header from "./Header";
import { shallow, mount } from "enzyme";


describe('Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header />);
	});

	it("should be able to mount", () => {
		mount(<Header />);
	});
    
	it("should have a header element", () => {
		const header = wrapper.find("header");
		expect(header.length).toEqual(1);
		expect(header.props().id).toEqual("header");
	});
    

})
