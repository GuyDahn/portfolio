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
              <a href={project.website}
                target="_blank">
                <img src={[...project.images].map((item) => (
                  item.resolutions.thumbnail.url))}
                  alt={project.name + " app"}
                />
              </a>
              <p>
                {project.summary}
              </p>

              <div>
                {[...project.languages,
                  ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </div>
              <a className='repo-link'
                href={project.githubUrl}
                target="_blank">
                  See On GitHub
               </a>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
