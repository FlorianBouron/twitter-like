import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { Typography } from "@material-ui/core";
import Post from "./Post";

describe("Post Component test", () => {
  describe("Renders without crashing", () => {
    const userId = "1";
    const title = "Some title";
    const delay = 1000;
    const wrapper = mount(<Post userId={userId} title={title} delay={delay} />);

    it("Renders Post Component", () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <Post userId={userId} title={title} delay={delay} />,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });

    it("Renders empty div if delay > 0 and t=0", () => {
      const userIdComponent = <div className="post-component" />;
      expect(wrapper.containsMatchingElement(userIdComponent)).toBeTruthy();
    });

    it("Renders UserId when display true", () => {
      wrapper.setState({ display: true });
      const userIdComponent = (
        <Typography className="user-id-post" variant="headline" component="h2">
          UserId: 1
        </Typography>
      );
      expect(wrapper.containsMatchingElement(userIdComponent)).toBeTruthy();
    });

    it("Renders UserId when display false", () => {
      wrapper.setState({ display: false });
      const userIdComponent = (
        <Typography className="user-id-post" variant="headline" component="h2">
          UserId: 1
        </Typography>
      );
      expect(wrapper.containsMatchingElement(userIdComponent)).toBeFalsy();
    });

    it("Renders Title when display true", () => {
      wrapper.setState({ display: true });
      const titleComponent = (
        <Typography className="title-post">Title: Some title</Typography>
      );
      expect(wrapper.containsMatchingElement(titleComponent)).toBeTruthy();
    });

    it("Renders Title when display false", () => {
      wrapper.setState({ display: false });
      const titleComponent = (
        <Typography className="title-post">Title: Some title</Typography>
      );
      expect(wrapper.containsMatchingElement(titleComponent)).toBeFalsy();
    });
  });
});
