import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Container test", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});