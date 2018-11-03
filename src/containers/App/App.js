import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./App.scss";
import config from "../../config";

class App extends Component {
  isAuthenticated = () => {
    return !!sessionStorage.getItem(config.sessionStorageUserID);
  };

  render() {
    return (
      <div className="app-container">
        {this.isAuthenticated() ? (
          this.props.children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: this.props.location }
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
