import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const store = configureStore();

exports.wrapRootComponent = Root => {
  return () => (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
