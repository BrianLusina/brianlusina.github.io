import React from 'react';
import Contact from "./Contact";
import { shallow, mount } from 'enzyme';


describe("Contact", () => {
    let wrapper;
    const props = {
        town: "Nai",
        country: "Kenya",
        email: "tester@test.com",
        emailAlias: "blusina@ljournal.com"
    };

    const contactText = "Do get in touch to work on a project, create something new or even talk about the universe. :)"

    beforeEach(() => {
        wrapper = shallow(<Contact {...props}/>);
    });

    it("should be able to mount", () => {
        mount(<Contact {...props}/>);
    });

    it("should have 1 section", () => {
        let section = wrapper.find("section");
        expect(section.length).toEqual(1);  
    });

    it("should have 1 header element with class major", () => {
        let header = wrapper.find('header');
        
        expect(header.length).toEqual(1);
        expect(header.hasClass("major")).toEqual(true);
    });

    it("should have 1 h2 element with text Get In Touch", () => {
        let h2 = wrapper.find("h2");

        expect(h2.length).toEqual(1);
        expect(h2.text()).toEqual("Get in touch");
    });

    it("should have 1 p element with text", () => {
        let p = wrapper.find("p");

        expect(p.length).toEqual(1);
        expect(p.text()).toEqual(contactText);
    });

    it("should have 1 ul element with class contact", () => {
        let ul = wrapper.find("ul");

        expect(ul.length).toEqual(1);
        expect(ul.hasClass("contact"));
    });

    it("should have 2 li elements with class fa", () => {
        let lis = wrapper.find("li");

        expect(lis.length).toEqual(2);
        expect(wrapper.find("li").first().hasClass("fa")).toEqual(true)
    });

    it("should have 1 a element with text", () => {
        let a = wrapper.find("a");

        expect(a.length).toEqual(1);
        expect(a.text()).toEqual(props.emailAlias);
        expect(a.props().href).toEqual(`mailto:${props.email}`);
    });
})