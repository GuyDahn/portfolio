import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/guydahn')
      .then(res => res.json())
      .then(user => {
        setUser(user)
      })
  },[])//I set this empty arr to prevent from crushing the app for too many requests

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />
}

export default App;
