import React from 'react';
import {
	shallow, mount
} from 'enzyme'
import SocialIcon from './SocialIcon';

describe('SocialIcon', () => {
	let wrapper;

	const props = {
		socialIconClass: "",
		socialLink: "",
		socialName: "",
	};

	beforeEach(() => {
		wrapper = shallow(<SocialIcon {...props}/> )
	});

	it('should be able to mount', () => {
		mount(<SocialIcon {...props}/>);
	})
})
