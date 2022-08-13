import React from 'react';
import { 
  Grid,
  Card,
  Image, 
  Flex,
  useTheme
} from '@aws-amplify/ui-react';
import {SignOut} from './signout.component';
import { Post } from './post.component';
import { Get } from './get.component';
import { ImageURL, ImageAlt } from '../../config/app.cfg';

import '@aws-amplify/ui-react/styles.css';

export const MainContainer = () => {
  const { tokens } = useTheme();

  return (
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
  )
}