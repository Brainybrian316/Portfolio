

import  React from 'react';

function listProjects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {props.projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}