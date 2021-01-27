import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { XenditShopContainer } from "./client/xendit-shop";
import store from "./client/store";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <XenditShopContainer />
  </Provider>,
  document.getElementById("root")
);
