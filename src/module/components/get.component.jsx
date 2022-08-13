import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { Button } from '@aws-amplify/ui-react';

export const Get = () => {
  const [getData, setGetData] = useState([])

  const handleGetData = ev => {
    ev.preventDefault();

    API.get('awsapi', '/aws')
      .then(response => console.log('>>>>>>>', response))
      .then(res => setGetData([res]))
  }

  return (
    <div>
      <Button size="small" color="white" onClick={ handleGetData }>
        Get Data
      </Button>

      <ul>
        {getData.map(data => <li> {data.name} </li>)}
      </ul>
      
    </div>
  )
}