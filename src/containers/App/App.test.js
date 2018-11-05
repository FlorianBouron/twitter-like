import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Container test", () => {
  it("Renders without crashing", () => {
    shallow(<App />);
  });
});
