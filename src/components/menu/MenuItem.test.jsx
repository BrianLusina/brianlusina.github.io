import React from 'react';
import MenuItem from "./MenuItem";
import { shallow, mount } from "enzyme";
import faker from "faker";


describe('MenuItem', () => {
	let wrapper;
	const props = {
		link: faker.internet.url(),
		title: faker.hacker.noun(),
		desc: faker.lorem.sentence(),
	};

	beforeEach(() => {
		wrapper = shallow(<MenuItem {...props}/>);
	});
    
	it("should be able to mount", () => {
		mount(<MenuItem {...props}/>);
	});
    
	it("should have 1 li tag", () => {
		const li = wrapper.find("li");
		expect(li.length).toEqual(1);
	});
    
	it(`should have h3 element with text ${props.title}`, () => {
		const h3 = wrapper.find("h3");
		expect(h3.text()).toEqual(props.title);
	});
    
	it(`should have p element with text ${props.desc}`, () => {
		const p = wrapper.find("p");
		expect(p.text()).toEqual(props.desc);
	});
    
	it("should have a Link element", () => {
		const Link = wrapper.find("Link");
		expect(Link.length).toEqual(1);
		expect(Link.props().to).toEqual(props.link);
	});

})
