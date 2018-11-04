import React from "react";
import { shallow } from "enzyme";
import Posts from "./Posts";

describe("Posts Container test", () => {
  it("renders without crashing", () => {
    shallow(<Posts />);
  });
});
