import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Button, TextField } from "@material-ui/core";
import Login from "./Login";
import config from "../../config";

describe("Login Container test", () => {
  const mockStore = configureStore();
  const initialState = {
    userId: sessionStorage.getItem(config.sessionStorageUserID)
      ? sessionStorage.getItem(config.sessionStorageUserID)
      : ""
  };
  const store = mockStore(initialState);

  describe("Renders without crashing", () => {
    const wrapper = mount(<Login store={store} />);

    it("Renders Login", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Login store={store} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("Renders Login Title", () => {
      const titleLogin = <div className="title-login">Login</div>;
      expect(wrapper.contains(titleLogin)).toBeTruthy();
    });

    it("Renders TextField Username", () => {
      const mockValues = {
        error_username: false,
        helperUsername: "",
        username: ""
      };
      expect(
        wrapper.containsMatchingElement(
          <TextField
            className="username-login"
            error={mockValues.error_username}
            helperText={mockValues.helperUsername}
            name="username"
            label="Username"
            defaultValue={mockValues.username}
            margin="normal"
          />
        )
      ).toBeTruthy();
    });

    it("Renders TextField Password In", () => {
      const mockValues = {
        error_password: false,
        helperPassword: "",
        password: ""
      };
      expect(
        wrapper.containsMatchingElement(
          <TextField
            className="password-login"
            error={mockValues.error_password}
            helperText={mockValues.helperPassword}
            name="password"
            label="Password"
            type="password"
            defaultValue={mockValues.password}
            margin="normal"
          />
        )
      ).toBeTruthy();
    });

    it("Renders button Sign In", () => {
      expect(
        wrapper.containsMatchingElement(
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Sign in
          </Button>
        )
      ).toBeTruthy();
    });
  });
});
