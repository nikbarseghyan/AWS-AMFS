import React, { useState, useEffect } from 'react';
import { Amplify, API } from 'aws-amplify';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';

import config from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import './components/style/index.css';

import { MainContainer } from './components/main.container'


Amplify.configure(config)

const Main = () => {
  // const [awsName, setAwsName] = useState('');
  // const [awsAge, setAwsAge] = useState(0);
  // const [awsCity, setAwsCity] = useState('');

  // useEffect(() => {
  //   API.get('awsapi', '/aws/name')
  //     .then(response => console.log('>>>>>', response))
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <MainContainer />
      </header>
    </div>
  );
}

export default withAuthenticator(Main)