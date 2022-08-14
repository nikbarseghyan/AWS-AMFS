import React from 'react';
import { 
  Authenticator,
  Button,
} from '@aws-amplify/ui-react';

export const SignOut = () => {
  return (
    <Authenticator >
      {({ signOut, user }) => (
        <main className='amplify-authenticator'>
          <span> Hello,  { user.username } </span>
          <Button 
            onClick={signOut}
            size="large"
            backgroundColor=""
            color="white"
          >
            Sign out
          </Button>
        </main>
      )}
    </Authenticator>
  )
}