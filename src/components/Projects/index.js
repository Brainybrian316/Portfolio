import { Container, Row, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import './filter.css';
import { projectsList } from '../../utils/dbProjects';
import ProjectCard from '../ProjectCard';


// add category to each dbobject 
// filter selection function that will update the state

  export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projectsList); 
  
    const filteredSelection = (value) => {
      // map through projectsList arr that has been filtered by category and set the filteredProject state to the filtered ProjectsList
    }
    return (
      <>
        
        <Container id="myBtnContainer" className="mt-3 text-center" fluid>
          <button className="filterBtn active" onClick="filterSelection('all')">Show All</button>
          <button className="filterBtn" onClick={() => filteredSelection('react')}>React.js</button>
          <button className="filterBtn" onClick={() => filteredSelection('javascript')}>JavaScript</button>
          <button className="filterBtn" onClick={() => filteredSelection('frontend')}>Front-End</button>
          <button className="filterBtn" onClick={() => filteredSelection('backend')}>Back-End</button>
          </Container>
        
        <Container className="mt-3">
          <Row className="g-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
  
          </Row>
        </Container>
       
      </>
    );
  }