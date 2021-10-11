/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

//import awsconfig from "./aws-exports";

// Amplify.configure(awsconfig);

import React from "react";

import { useState, useEffect} from "react";

// react-router components
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard PRO React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard PRO React themes
import theme from "assets/theme";

// Soft UI Dashboard PRO React routes
import routes from "routes";

// Soft UI Dashboard PRO React contexts
import { useSoftUIController } from "context";


import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from "./aws-exports";


import SignInStyles from "./SignIn.css";
import EmployeePage from "layouts/organisation/data/EmployeeListing";


Amplify.configure(awsconfig);

const App = () => {

  const [controller, dispatch] = useSoftUIController();
  const { direction, layout, openConfigurator } = controller;
  const { pathname } = useLocation();
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

    useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => {
    dispatch({ type: "OPEN_CONFIGURATOR", value: !openConfigurator });
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });

    const signUpConfig = {
      signUpFields: [
          {
              label: "Company UEN",
              key: "custom:CompanyUEN",
              placeholder: "Company UEN",
              required: true,
              displayOrder: 5
          }
      ]
  };

  const configsButton = (
    <SuiBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      backgroundColor="white"
      boxShadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      customClass="cursor-pointer"
      onClick={handleConfiguratorOpen}
    >
      <Icon className=" text-dark" fontSize="default">
        settings
      </Icon>
    </SuiBox>
  );

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {layout === "dashboard" && (
                <>
                  <Sidenav routes={routes} />
                  <Configurator />
                  <EmployeePage />
                  {configsButton}
                </>
              )}
              <Switch>
                {getRoutes(routes)}
              <Redirect from="*" to="/dashboard" />
              </Switch>
            </ThemeProvider>
          </StyledEngineProvider>
    </div>
  ) : (<div className = "bg">
    <AmplifyAuthenticator styles={{ SignInStyles }} signUpConfig={signUpConfig} />
    </div>
);

}

export default App;





  // return direction === "rtl" ? (
  //   <CacheProvider value={rtlCache}>
  //     <StylesProvider jss={jss}>
  //       <ThemeProvider theme={themeRTL}>
  //         <CssBaseline />
  //         {layout === "dashboard" && (
  //           <>
  //             <Sidenav routes={routes} />
  //             <Configurator />
  //             {configsButton}
  //           </>
  //         )}
  //         {layout === "vr" && <Configurator />}
  //         <Switch>
  //           {getRoutes(routes)}
  //           <Redirect from="*" to="/dashboard" />
  //         </Switch>
  //       </ThemeProvider>
  //     </StylesProvider>
  //   </CacheProvider>
  // ) : (
  //   // </CacheProvider>
  //   <StyledEngineProvider injectFirst>
  //     <ThemeProvider theme={theme}>
  //       <CssBaseline />
  //       {layout === "dashboard" && (
  //         <>
  //           <Sidenav routes={routes} />
  //           <Configurator />
  //           {configsButton}
  //         </>
  //       )}
  //       {layout === "vr" && <Configurator />}
  //       <Switch>
  //         {getRoutes(routes)}
  //         <Redirect from="*" to="/dashboard" />
  //       </Switch>
  //     </ThemeProvider>
  //   </StyledEngineProvider>
  // );