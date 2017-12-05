import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Feature from '../../../components/feature/Feature';

configure({adapter: new Adapter()});

let featureTitle = "Featured Article";
let subtitle = "Feature Subtitle";
let shortDescription = "Feature short description with some words describing this feature article"

function setup() {
  const props = {
    featureTitle, subtitle, shortDescription
  };

  return shallow(<Feature {...props}/>);
}

describe("Feature should", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("render without crashing", () => {
    render(<wrapper/>, document.createElement("div"));
  });

  it("contain 1 div element", () => {
    expect(wrapper.find("div").length).toEqual(1);
    expect(wrapper.find("div").hasClass("content")).toEqual(true);
  });

  it("contain 1 h1 tag with title of feature article", () => {
    expect(wrapper.find("h1").length).toEqual(1);
    expect(wrapper.find("h1").text()).toEqual(featureTitle);

    featureTitle = "Featured Article 2";
    // a change in the title, changes the title
    wrapper.setProps({featureTitle});

    expect(wrapper.find("h1").text()).toEqual(featureTitle);
  });

  it("contain p tags with subtitle and short description", () => {
    let subtitleTag = wrapper.find("p").first();
    let paragraph = wrapper.findWhere(n => n.props().id === "short-desc");

    expect(wrapper.find("p").length).toEqual(2);

    // subtitle is displayed
    expect(subtitleTag.text()).toEqual(subtitle);
    expect(paragraph.text()).toEqual(shortDescription);

    // a change in the subtitle, changes the title
    subtitle = "Featured subtitle 2";
    wrapper.setProps({subtitle});

    expect(wrapper.find("p").first().text()).toEqual(subtitle);

    shortDescription = "Short description change";

    // a change in the short description is reflected in the UI
    wrapper.setProps({shortDescription});
    expect(wrapper.findWhere(n => n.props().id === "short-desc").text()).toEqual(shortDescription);
  });
});
