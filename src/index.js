import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "App";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

import store from "./redux/store";
import { Provider } from "react-redux";

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
