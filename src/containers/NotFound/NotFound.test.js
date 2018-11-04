import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("NotFound Container test", () => {
  it("renders without crashing", () => {
    shallow(<NotFound />);
  });
});
