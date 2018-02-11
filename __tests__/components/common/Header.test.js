import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Header from '../../../components/common/Header';

configure({adapter: new Adapter()});

function setup() {
  const props = {};

  return shallow(<Header {...props}/>);
}

describe("Header should", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("render without crashing", () => {
    render(<wrapper/>, document.createElement("div"));
  });

  it("contain 1 header element", () => {
    expect(wrapper.find("header").length).toEqual(1);
  });

  it("contain an anchor tag with site name", () => {
    expect(wrapper.find("a").first().props().children).toBeDefined();
    expect(wrapper.find("a").first().hasClass("logo")).toEqual(true);
    expect(wrapper.find("strong").props().children).toContain("LJournal");
  });

  it("contain 1 ul tag with class name icons", () => {
    expect(wrapper.find("ul").length).toEqual(1);
    expect(wrapper.find("ul").hasClass("icons")).toEqual(true);
  });

  it("contain 5 social link li tags", () => {
    expect(wrapper.find("li").length).toEqual(5);

    wrapper.find("li").forEach((link) => {
      expect(link.find("a").hasClass("icon")).toEqual(true);
      expect(link.find("a").props().href).toBeDefined();
      expect(link.find("span").hasClass("label")).toEqual(true);
    });
  });
});
