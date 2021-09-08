import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import LoginSection from './Sections/LoginSection';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => (
  <React.Fragment>
    <LoginSection>
      <AmplifyAuthenticator>
        <AmplifySignIn headerText="Welcome to Kaizen" slot="sign-in" />
        <AmplifySignUp headerText="Getting Started" slot="sign-up" />

        <div>
          <AmplifySignOut />
        </div>

      </AmplifyAuthenticator>
    </LoginSection>
  </React.Fragment>
);

export default App;