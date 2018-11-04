import React from "react";
import { shallow } from "enzyme";
import Post from "./Post";

describe("Post Component test", () => {
  it("renders without crashing", () => {
    shallow(<Post />);
  });
});
