/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";
import SignIn from "layouts/authentication/sign-in";

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <SignIn />
    </SoftUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
