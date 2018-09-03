import React from 'react';
import {LifePage} from './life';
import { shallow, mount } from "enzyme";
import faker from "faker";

describe('LifePage', () => {
	let wrapper;
	const props = {
		data: {
			allMarkdownRemark: {
				edges: [
					{
						node: {
							frontmatter: {
								title: faker.lorem.sentence(),
								subtitle: faker.hacker.phrase(),
								excerpt: faker.lorem.paragraphs(),
								date: `${faker.date.past(1)}`,
								path: `/${faker.hacker.noun()}`,
								category: faker.hacker.noun(),
								author: {
									name: faker.name.findName(),
									link: faker.image.imageUrl(),
									avatar: faker.image.avatar(),
								},
								image: {
									feature: faker.image.imageUrl(),
									thumbnail: faker.image.imageUrl(),
									teaser: faker.image.imageUrl(),
									credit: faker.image.imageUrl(),
									creditlink: faker.internet.url(),
								},
								tags: faker.lorem.words().split(" "),
							},
							timeToRead: faker.random.number(30),
							html: faker.lorem.paragraphs(),
						},
					}
				]
			}
		},
		renderPosts: jest.fn()
	};

	beforeEach(() => {
		wrapper = shallow(<LifePage {...props}/>);
	});
    
	it("should be able to mount", () => {
		mount(<LifePage {...props}/>);
	});
    
	it("should have 1 section element", () => {
		let section = wrapper.find("section");

		expect(section.length).toEqual(1);
	});
    
	it("should call renderPosts function with data argument on render", () => {
		expect(props.renderPosts).toHaveBeenCalled();
		expect(props.renderPosts).toHaveBeenCalledWith(props.data);
	})
})
