import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./containers/Login";
import App from "./containers/App";
import Posts from "./containers/Posts";

const routes = store => {
  return (
    <Switch>
      <Route path="/login" render={props => <Login {...props} />} />
      <App>
        <Route path="/" render={props => <Posts {...props} />} />
        <Route
          exact
          path="/index.html"
          render={props => <Posts {...props} />}
        />
        <Route exact path="/index.php" render={props => <Posts {...props} />} />
      </App>
      <Redirect from="*" to="/" />
    </Switch>
  );
};
export default routes;
