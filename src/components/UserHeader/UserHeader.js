import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderContainer, Header, Image } from './styles.js';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <hr />
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.usernameCaseSensitive}`}
              target="_blank"
              rel="noreferrer noopener"
            >
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;
