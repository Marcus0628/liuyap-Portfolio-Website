import styles from './ProjectsStyles.module.css';
import youtube from '../../assets/youtube.png';
import amazon from '../../assets/amazon.png';
import portfolio from '../../assets/portfolio.png';
import game from '../../assets/game.png';
import zero from '../../assets/zero.png';
import ProjectCard from '../../common/ProjectCard';
import { useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      src: youtube,
      link: 'https://github.com/Marcus0628/liuyap-Youtube-website',
      h3: 'YouTube',
      p: 'A Clone YouTube Website',
      page: 'https://marcus0628.github.io/liuyap-Youtube-website/',
    },
    {
      id: 2,
      src: amazon,
      link: 'https://github.com/Marcus0628/liuyap-Amazon-Website',
      h3: 'Amazon',
      p: 'A Clone Amazon Website',
    },
    {
      id: 3,
      src: portfolio,
      link: 'https://github.com/Marcus0628/liuyap-Portfolio-Website',
      h3: 'Portfolio',
      p: "Liu Yap's Portfolio",
    },
    {
      id: 4,
      src: game,
      link: 'https://github.com/Marcus0628/liuyap-Rock-Paper-Scissors-Game',
      h3: 'Rock Paper Scissors',
      p: 'A Rock Paper Scissors Game',
    },
    {
      id: 5,
      src: zero,
      link: 'https://github.com/Marcus0628/liuyap-ZERO-App',
      h3: 'ZERO',
      p: 'A Food Waste Reduction App',
    },
  ]);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
