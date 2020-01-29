import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './topbar.css'
const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Eduction', path: '/education' },
];

const Topbar = () => {
  const location = useLocation();

  return (
      <ul className='top-bar'>
        {items.map(i => (
          <li>
          <Link
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
            </Link>
          </li>
        ))}
      </ul> 
  );
};

export default Topbar;