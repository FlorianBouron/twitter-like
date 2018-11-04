import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Post from "./Post";

describe("Posts Container test", () => {
  const mockStore = configureStore();
  const initialState = {
    data: [],
    fetchedData: [],
    filter: "",
    error: ""
  };
  const store = mockStore(initialState);

  it("renders without crashing", () => {
    shallow(<Post store={store} />);
  });
});
