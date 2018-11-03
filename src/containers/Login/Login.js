import React, { Component } from "react";
import { Card, CardContent, TextField, Button } from "@material-ui/core";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error_username: false,
      error_password: false
    };
  }

  checkUsername = username => {
    let error_username = false;
    if (username.length < 5) {
      error_username = true;
    }
    return error_username;
  };

  checkPassword = password => {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let error_password = false;
    if (!password.match(regex)) {
      error_password = true;
    }
    return error_password;
  };

  handleSubmit = event => {
    event.preventDefault();
    //Check the login requirements
    const { username, password } = this.state;
    const error = {
      error_username: this.checkUsername(username),
      error_password: this.checkPassword(password)
    };
    this.setState(error);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, error_username, error_password } = this.state;
    const helperUsername = error_username
      ? "Username should be at least 5 characters long"
      : "";
    const helperPassword = error_password
      ? "Password should contains 8 characters, at least one small and capital letters, and one number"
      : "";

    return (
      <div className="login-container">
        <Card className="card-login">
          <CardContent>
            <div className="title-login">Login</div>
            <form className="body-login" onSubmit={this.handleSubmit}>
              <TextField
                className="username-login"
                error={error_username}
                helperText={helperUsername}
                name="username"
                label="Username"
                defaultValue={username}
                margin="normal"
                onChange={this.handleChange}
              />
              <TextField
                className="password-login"
                error={error_password}
                helperText={helperPassword}
                name="password"
                label="Password"
                type="password"
                defaultValue={password}
                margin="normal"
                onChange={this.handleChange}
              />
              <Button
                className="login-button"
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign in
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Login;
