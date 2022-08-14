import React from 'react';
import { 
  Grid,
  Card,
  Image, 
  Flex,
  useTheme,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { 
  SignOut,
  Post,
  Get,
} from './components';
import { 
  ImageURL,
  ImageAlt
} from '../config/app.cfg';
import config from '../aws-exports';

import '@aws-amplify/ui-react/styles.css';
import './components/style/index.css';

Amplify.configure(config);

const Main = () => {
  const { tokens } = useTheme();

  return (
    <div className="App">
      <header className="App-header">
        <Grid columnGap="1rem" rowGap="1rem" templateColumns="5fr 5fr 5fr" templateRows="0fr 3fr 0fr">
            <Card columnStart="-90" columnEnd="-1" backgroundColor={tokens.colors.overlay[30]} className='amplifay-card-header'>
              <Flex>
                <Image alt={ImageAlt} src={ImageURL} />
                <SignOut />
              </Flex>
            </Card>
            <Card columnStart="-90" columnEnd="-40" backgroundColor={tokens.colors.overlay[50]} >
              <Post />
            </Card>
            <Card columnStart="-40" columnEnd="-1" backgroundColor={tokens.colors.overlay[20]}>
              <Get />
            </Card>
        </Grid>
      </header>
    </div>
  )
}

export default withAuthenticator(Main);