import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from "react-dark-mode-toggle"

import './topbar.css'

const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Eduction', path: '/education' },
]

const Topbar = () => {
  const location = useLocation()
  const [isDarkMode, setIsDarkMode] = useState(() => false)

  return (
    <div className='bar-container'>
      <ul className='top-bar'>
        {items.map(i => (
          <li key={i.name}>
            <Link
              isactive={
                location.pathname === '/'
                  && i.path === '/' ? true : location.pathname === i.path}
              element={Link}
              to={i.path}
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className='toggle-mode'>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </div>
    </div>
  )
}

export default Topbar