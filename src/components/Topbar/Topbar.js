import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from "react-dark-mode-toggle"
import useDarkMode from 'use-dark-mode';

import './topbar.css'

const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Eduction', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

const Topbar = () => {
  const location = useLocation()
  const darkMode = useDarkMode(false);

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
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={80}
        />
      </div>
    </div>
  )
}

export default Topbar