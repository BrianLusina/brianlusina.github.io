import React from 'react';
import {
	shallow, mount
} from 'enzyme'
import SocialIcon from './SocialIcon';

describe('SocialIcon', () => {
	let wrapper;

	const props = {
		socialIconClass: "fa fa-example",
		socialLink: "https://example.com",
		socialName: "Example",
	};

	beforeEach(() => {
		wrapper = shallow(<SocialIcon {...props}/> )
	});

	it('should be able to mount', () => {
		mount(<SocialIcon {...props}/>);
	});

	it("should contain 1 li root element", () => {
		expect(wrapper.find("li").length).toEqual(1);
	});

	it(`should contain 1 span element with '${props.socialName}' as child`, () => {
		const span = wrapper.find("span");

		expect(span.length).toEqual(1);
		expect(span.props().children).toEqual(props.socialName);
		expect(span.hasClass("label")).toEqual(true);
	});

	it(`should contain 1 a element with '${props.socialIconClass}' as class and '${props.socialLink}' as href`, () => {
		const a = wrapper.find("a");

		expect(a.length).toEqual(1);
		expect(a.hasClass(props.socialIconClass)).toEqual(true);
		expect(a.props().href).toEqual(props.socialLink);
	});
})
