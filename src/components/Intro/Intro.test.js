import React from "react";
import Intro from "./Intro";
import { shallow, mount } from "enzyme";


describe("Intro", () => {
    let wrapper;

    const props = {
        pageDesc: "Page description"
    };

    beforeEach(() => {
        wrapper = shallow(<Intro {...props}/>);
    });

    it("should be able to mount", () => {
        mount(<Intro {...props}/>);
    });

    it("should have one section element with id attribute of intro", () => {
        let section = wrapper.find("section");

        expect(section.length).toEqual(1);
        expect(section.props().id).toEqual("intro");
    });

    it("should have one header element with", () => {
        let header = wrapper.find("header");

        expect(header.length).toEqual(1);
    });

    it("should have 1 h2 element with the title of the site LJournal", () => {
        let h2 = wrapper.find("h2");

        expect(h2.length).toEqual(1);
        expect(h2.text()).toEqual("LJournal");
    });

    it("should have 1 p tag", () => {
        let p = wrapper.find("p");

        expect(p.length).toEqual(1);
        expect(p.text()).toEqual(props.pageDesc);
    });
})