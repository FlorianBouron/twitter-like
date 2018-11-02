import React from 'react';
import { Switch, Redirect } from 'react-router';
import App from './App';

const routes = (store) => {
  return (
    <Switch>
      <App>
      </App>
      <Redirect from='*' to='/' />
    </Switch>
  )
};
export default routes;