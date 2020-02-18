import React, { useState, useEffect } from 'react'
import Pages from './pages'
import './app.css'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/guydahn')
      .then(res => res.json())
      .then(user => {
        setUser(user)
      })
  }, [] //empty arr to prevent too many requests/crashes
  )
  if (!user) {
    return <div />;
  }

  return (
    <Pages user={user} />
  )
}

export default App;
