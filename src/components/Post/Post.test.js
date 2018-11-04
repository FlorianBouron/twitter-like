import React from "react";
import { shallow } from "enzyme";
import Post from "./Post";

describe("Posts Container test", () => {
  it("renders without crashing", () => {
    shallow(<Post />);
  });
});
