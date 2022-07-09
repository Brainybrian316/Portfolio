import { Container, Row} from 'react-bootstrap';
import React, { useEffect} from 'react';
import './filter.css';
import { projectsList } from '../../utils/dbProjects';
import ProjectCard from '../ProjectCard';
import mixitup from 'mixitup';
import 'animate.css';



export default function Projects() {

  useEffect(() => {
     mixitup('.g-2', {
      selectors: {
        target: '[data-ref="mixIt"]',
      },
      load: {
        filter: 'all',
      },
      animation: {
        duration: 250,
        nudge: false,
        reverseOut: false,
        effects: "fade rotateX(90deg) stagger(30ms)"
    }
  });
  })
 
  return (
    <>
      <Container className="mt-3 text-center" fluid>
        <button type="button" id="filterBtn" data-filter="all" autoFocus>
          Show all
        </button>
        <button type="button"    id="filterBtn" data-filter=".react">
          React
        </button>
        <button type="button"   
        id="filterBtn" data-filter=".fullstack">
          Full-Stack
        </button>
        <button type="button"    id="filterBtn" data-filter=".node">
          Node.js
        </button>
        <button type="button"  id="filterBtn" data-filter=".frontend">
          Front-End
        </button>
      </Container>

      <Container className="mt-3">
        <Row className="g-2">
          {projectsList.map((project) => (
            <ProjectCard key={project.id}  project={project} />
          ))}
        </Row>
      </Container>
    </>
  );
}
