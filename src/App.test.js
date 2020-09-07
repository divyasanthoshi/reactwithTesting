import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";

describe("counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("The Counter App");
  });

  test("render a button with text Increment", () => {
    expect(wrapper.find("#increment-btn").text()).toContain("Increment");
  });
  test("render a button with text Decrement", () => {
    expect(wrapper.find("#decrement-btn").text()).toContain("Decrement");
  });
  test("render a paragrtaph with counter initial  value 0 ", () => {
    expect(wrapper.find("#counter-value").text()).toEqual("0");
  });
});

