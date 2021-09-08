import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import LoginSection from './Sections/LoginSection';
import awsconfig from './aws-exports';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

Amplify.configure(awsconfig);

const App = () => (
  <React.Fragment>

    <LoginSection>
       {/* Can add a header here */}
      <div class="topnav">
        <div class="topnav-right">

          
          <a href="#search">
            <FontAwesomeIcon icon = {faMapMarkerAlt}/>
            <h10>  Find Us</h10>
            </a>
          <a href="#about">
            <FontAwesomeIcon icon = {faPhoneAlt}/>
            <h10>  Contact Us</h10>
          </a>
        </div>
      </div>
      <AmplifyAuthenticator>
        <AmplifySignIn headerText="KAIZEN" slot="sign-in" />
        <AmplifySignUp headerText="Getting Started" slot="sign-up" />

        <div>
          <AmplifySignOut />
        </div>

      </AmplifyAuthenticator>
    </LoginSection>
  </React.Fragment>
);

export default App;