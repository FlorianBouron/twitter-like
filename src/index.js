import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import routes from "./routes";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const state = window.__initialState__ || undefined;
const store = configureStore(state);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      {routes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
