import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./containers/Login";

const routes = store => {
  return (
    <Switch>
      <Route path="/login" render={props => <Login />} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
export default routes;
