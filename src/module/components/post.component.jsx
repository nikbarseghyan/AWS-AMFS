import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { Button, TextField } from '@aws-amplify/ui-react';


export const Post = () => {
  const [awsName, setAwsName] = useState('')
  const [awsAge, setAwsAge] = useState(18);
  const [awsCity, setAwsCity] = useState('');

  const handleCreateUser = ev => {
    ev.preventDefault();

    API.post('awsapi', '/aws', {
      body: {
        name: awsName,
        age: awsAge,
        city: awsCity
      }
    })
  }

  return (
      <form onClick={ handleCreateUser }>
        <TextField 
          descriptiveText="Enter a valid Name"
          placeholder="Name"
          errorMessage="Error"
          color="white"
          value={awsName}
          onChange={ev => setAwsName(ev.target.value)}
        />
        <TextField 
          descriptiveText="Enter a valid Age"
          placeholder="Age"
          errorMessage="Error"
          color="white"
          value={awsAge}
          onChange={ev => setAwsAge(ev.target.value)}
        />
        <TextField 
          descriptiveText="Enter a valid City"
          placeholder="City"
          color="white"
          errorMessage="Error"
          value={awsCity}
          onChange={ev => setAwsCity(ev.target.value)}
        />
        <Button size="small" color="white">
            Create User
        </Button>
      </form>
  )
}