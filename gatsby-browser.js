import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import { Router } from "react-router-dom"

const store = configureStore();

exports.replaceRouterComponent = ({ history }) => {
  const store = configureStore()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}