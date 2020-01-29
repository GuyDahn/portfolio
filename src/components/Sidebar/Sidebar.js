import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Eduction', path: '/education' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
      <div>
        {items.map(i => (
          <button>
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
          </button>
        ))}
      </div> 
  );
};

export default Sidebar;