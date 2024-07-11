import React from 'react';

function ProjectCard({ project }) {
  return (
    <a href={project.link}>
      <img className="hover" src={project.src} alt={`${project.h3} logo`} />
      <h3>{project.h3}</h3>
      <p>{project.p}</p>
    </a>
  );
}

export default ProjectCard;
