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

import App from "App";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";
// import SignIn from "layouts/authentication/sign-in";
// import {Auth} from "aws-amplify";

// const [isAuth, setAuth] = useState(false);

// async function ionViewCanEnter() {
//   try {
//       await Auth.currentAuthenticatedUser();
//       return true;
//   } catch {
//       return false;
//   }
// }

ReactDOM.render(
  <>
  <BrowserRouter>
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
  </BrowserRouter></>,
  document.getElementById("root")
);

