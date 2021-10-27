import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "App";
import { SoftUIControllerProvider } from "context";
import store from "./redux/store";
import { Provider } from "react-redux";
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("1326488dc77f91039518354a26d80239f")
/**
 * {@code index} is a react component for the injection of react components into root.
 *
 * @author React
 * @version 1.0
 * @since 2021-10-16
 */

ReactDOM.render(
  <>
    <BrowserRouter>
      <SoftUIControllerProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SoftUIControllerProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
