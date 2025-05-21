import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './project-card.css';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const image = project.image || project.primarySource;
  const isVideo = project.website?.endsWith('.mp4') || 
                 project.website?.includes('youtube') || 
                 project.website?.includes('vimeo');

  // Format the description to handle newlines and truncate if needed
  const formatDescription = (text) => {
    if (!text) return '';
    // Replace newlines with <br /> and truncate if needed
    const formatted = text.replace(/\n/g, '<br />');
    return formatted.length > 120 ? `${formatted.substring(0, 120)}...` : formatted;
  };

  return (
    <motion.div 
      className="project-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.3 
      }}
    >
        <div className="card-image-container">
          <img 
            src={image} 
            alt={project.title} 
            className="card-image"
            loading="lazy"
            onError={(e) => {
              // Fallback for broken images
              if (project.primarySource && project.primarySource !== image) {
                e.target.src = project.primarySource;
              }
            }}
          />
          <div className="card-overlay" />
          
          <div className="card-content">
            <div className="card-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon-link"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="View on GitHub"
                  >
                    <FiGithub />
                  </a>
                )}
                {project.website && !isVideo && (
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon-link"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="View Live Demo"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
            
            <div 
              className="project-description"
              dangerouslySetInnerHTML={{ __html: formatDescription(project.description) }}
            />
            
            {project.languages && (
              <div className="project-tags">
                {project.languages.split(',').map((tag, index) => (
                  <span key={index} className="tag">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
            
            {isVideo && (
              <div className="video-indicator">
                <span>Video Demo</span>
              </div>
            )}
          </div>
        </div>
    </motion.div>
  );
}
