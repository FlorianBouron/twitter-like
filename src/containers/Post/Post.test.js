import React from "react";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { CircularProgress } from "@material-ui/core";
import Post from "./Post";
import ModalError from "../../components/ModalError";

describe("Posts Container test", () => {
  describe("Renders without crashing", () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = {
      posts: {
        data: [
          {
            userId: "10",
            id: 100,
            title: "at nam consequatur ea labore ea harum",
            body:
              "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
          }
        ],
        fetchedData: [
          {
            userId: "10",
            id: 100,
            title: "at nam consequatur ea labore ea harum",
            body:
              "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
          }
        ],
        filter: "",
        error: ""
      }
    };
    const store = mockStore(initialState);

    it("Renders Post Container", () => {
      mount(
        <Post
          store={store}
          match={{ params: { id: 1 }, isExact: true, path: "", url: "" }}
        />
      );
    });

    it("Renders Post Container without data", () => {
      const initialState = {
        posts: {
          data: [],
          fetchedData: [],
          filter: "",
          error: ""
        }
      };
      const store = mockStore(initialState);
      const wrapper = mount(
        <Post
          store={store}
          match={{ params: { id: 1 }, isExact: true, path: "", url: "" }}
        />
      );
      expect(
        wrapper.containsMatchingElement(<CircularProgress size={50} />)
      ).toBeTruthy();
    });

    it("Renders Post Container without data and error", () => {
      const initialState = {
        posts: {
          data: [],
          fetchedData: [],
          filter: "",
          error: "No Network"
        }
      };
      const store = mockStore(initialState);
      const wrapper = mount(
        <Post
          store={store}
          match={{ params: { id: 1 }, isExact: true, path: "", url: "" }}
        />
      );
      expect(
        wrapper.containsMatchingElement(<ModalError error={"No Network"} />)
      ).toBeTruthy();
    });
  });
});
