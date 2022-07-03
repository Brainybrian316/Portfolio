import { Container, Row, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './filter.css';
import { projectsList } from '../../utils/dbProjects';
import ProjectCard from '../ProjectCard';
import mixitup from 'mixitup';

// add category to each dbobject
// filter selection function that will update the state

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsList);

  useEffect(() => {
     mixitup('.g-2', {
      selectors: {
        target: '.mix'
      },
      load: {
        filter: '.mix'
      }
    });
  })


 
  return (
    <>
      <Container id="myBtnContainer" className="mt-3 text-center" fluid>
        <button type="button" data-filter="all">
          Show all
        </button>
        <button type="button" data-filter=".react">
          React
        </button>
        <button type="button" data-filter=".frontend">
          Front-End
        </button>
        <button type="button" data-filter=".backend">
          Back-End
        </button>
        <button type="button" data-filter=".javascript">
          JavaScript
        </button>
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
