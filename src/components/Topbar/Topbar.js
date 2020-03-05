import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from "react-dark-mode-toggle"
import useDarkMode from 'use-dark-mode';

// import Toggle from './Toggle';
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
  const darkMode = useDarkMode(false);

  return (
    <div className='bar-container'>
      <div className='toggle-mode'>
      <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={80}
        />
      </div>
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
    </div>
  )
}

export default Topbar