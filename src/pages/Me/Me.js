import React from 'react';
import Layout from '../../components/Layout';
import { Paragraph, Pill } from '../../styles';


const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div className='me-section'>
        <h2>About Me</h2>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div className='me-section'>
        <h2>Skills</h2>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div className='me-section'>
        <h2>Social Profiles</h2>
          {user.basics.profiles.map((profile, i) => (
            <a key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </a>
          ))}
      </div>
    </Layout>
  );
};

export default Me;
