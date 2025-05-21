import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsList } from '../../utils/dbProjects';
import ProjectCard from '../ProjectCard';
import './projects.css';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'react', name: 'React' },
  { id: 'python', name: 'Python' },
  { id: 'c#', name: 'C#' },
  { id: 'node', name: 'Node.js' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsList);

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProjects(projectsList);
    } else {
      const filtered = projectsList.filter(project => 
        project.category.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Projects</h2>
          <p>Here are some of my recent works</p>
        </motion.div>

        <div className="filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => filterProjects(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div 
          className="projects-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-item"
                variants={item}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
