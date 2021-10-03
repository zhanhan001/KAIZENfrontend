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

import { Fragment } from "react";

import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import SuiBox from "components/SuiBox";

// Images
import curved9 from "assets/images/sign-in.jpg";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SoftUIControllerProvider } from "context";
import Dashboard from "layouts/dashboard";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function SignIn() {
  return (
    <Fragment key="key">
      <CoverLayout
        title="Welcome to Kaizen"
        description="Leading Digital Revolution in Construction."
        image={curved9}
      >
        <SuiBox>
          <AmplifyAuthenticator>
            <AmplifySignIn headerText="Sign In" slot="sign-in" />
            <AmplifySignUp headerText="Getting Started" slot="sign-up" />
            <div>
              <AmplifySignOut />
            </div>
            <BrowserRouter>
              <SoftUIControllerProvider>
                <Dashboard />
              </SoftUIControllerProvider>
            </BrowserRouter>
          </AmplifyAuthenticator>
        </SuiBox>
      </CoverLayout>
    </Fragment>
  );
}

export default SignIn;
