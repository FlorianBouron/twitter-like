import React from "react";
import { shallow } from "enzyme";
import ModalError from "./ModalError";

describe("ModalError Component test", () => {
  it("renders without crashing", () => {
    shallow(<ModalError />);
  });
});
