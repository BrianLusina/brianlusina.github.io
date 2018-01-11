import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const store = configureStore();

exports.wrapComponent = Root => {
  return () => {
    <Provider store={store}>
      <Root />
    </Provider>;
  };
};
