import React from "react";
import { Switch, Redirect } from "react-router-dom";
import App from "./App";

const routes = store => {
  return (
    <Switch>
      <App />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
export default routes;
