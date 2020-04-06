import React from 'react';
import Layout from '../../components/Layout';
import { Paragraph } from '../../styles';

const Contact = ({ user }) => {
  return (
    <Layout user={user}>
      <div className='me-section'>
        <br/>
        You can find me in one of my....
        <h2>Social Profiles</h2>
        {user.basics.profiles.map((profile, i) => (
          <a key={profile.network}>
            {i !== 0 && ' | '}
            <a href={profile.url} target="_blank" rel="noreferrer noopener">
              {profile.network}
            </a>
          </a>
        ))}
        <h2>Email</h2>
        <Paragraph><a href='mailto:guydaane@gmail.com'>guydaane@gmail.com</a></Paragraph>
        <h2>Or simply give me a call:</h2>
        <a href='tel:+972507259265'>050-7259265</a>
      </div>
      
    </Layout>
  );
};

export default Contact;
