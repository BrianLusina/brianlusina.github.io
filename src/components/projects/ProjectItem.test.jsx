/* eslint-disable no-undef */
import React from 'react';
import ProjectItem from './ProjectItem';
import { shallow, mount } from "enzyme";
import faker from "faker";

describe("ProjectItem", () => {
	let wrapper;
	const props = {
		name: faker.name.findName(),
		owner: {
			ownerName: faker.name.findName(),
			avatarUrl: faker.image.avatar(),
			ownerUrl: faker.image.imageUrl(),
		},
		url: faker.internet.url(),
		description: faker.lorem.sentence(),
		updateDate: faker.date.past(1),
		topics: [
			{
				topic: {
					id: faker.random.uuid(),
					name: faker.hacker.noun(),
				},
				url: faker.internet.url(),
			}
		],
		stargazers: faker.random.number(30),
		forks: faker.random.number(30),
		issues: faker.random.number(30),
		pullRequests: faker.random.number(30),
	};

	beforeEach(() => {
		wrapper = shallow(<ProjectItem {...props}/>);
	});
    
	it("should be able to mount", () => {
		mount(<ProjectItem {...props}/>);
	});
    
	it("should have 1 article element", () => {
		let section = wrapper.find("article");

		expect(section.length).toEqual(1);
	});
})