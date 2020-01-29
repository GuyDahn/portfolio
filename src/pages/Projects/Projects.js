import React from 'react';
import Layout from '../../components/Layout';
import { Pill } from '../../styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <h2>Projects</h2>
        <ul>
          {user.projects.map((project, i) => (
            <div key={i}>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <a href={project.githubUrl} target="_blank">see repository</a>
              <div>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
