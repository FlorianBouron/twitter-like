import React from "react";
import { shallow, mount } from "enzyme";
import ModalError from "./ModalError";
import { Button, DialogContentText, DialogTitle } from "@material-ui/core";

describe("ModalError Component test", () => {
  describe("Renders without crashing", () => {
    const error = "";
    const wrapper = mount(<ModalError error={error} />);

    it("Renders ModalError Component", () => {
      shallow(<ModalError error={error} />);
    });

    it("Renders Dialog Title", () => {
      const dialogTitle = (
        <DialogTitle id="alert-dialog-title">HTTP connection error</DialogTitle>
      );
      expect(wrapper.containsMatchingElement(dialogTitle)).toBeTruthy();
    });

    it("Renders Dialog Content", () => {
      const dialogContent = (
        <DialogContentText id="alert-dialog-description">
          It seems like an error just occurred: {error}
        </DialogContentText>
      );
      expect(wrapper.containsMatchingElement(dialogContent)).toBeTruthy();
    });

    it("Renders Button", () => {
      const dialogTitle = <Button color="primary">Ok</Button>;
      expect(wrapper.containsMatchingElement(dialogTitle)).toBeTruthy();
    });
  });
});
