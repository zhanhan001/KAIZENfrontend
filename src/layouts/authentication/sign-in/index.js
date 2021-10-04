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

import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

// Authentication layout components
// import CoverLayout from "layouts/authentication/components/CoverLayout";
// import SuiBox from "components/SuiBox";

// Images
// import curved9 from "assets/images/sign-in.jpg";
import React from "react";
import "./index.css";
import awsconfig from "./aws-exports";



Amplify.configure(awsconfig);




function SignIn() {
  
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn headerText="Sign In" slot="sign-in" />
      <AmplifySignUp headerText="Getting Started" slot="sign-up" />
      <div>
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  );
}

export default SignIn;
