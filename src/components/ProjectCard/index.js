import { Button, Col,  Image } from 'react-bootstrap';
import GalleryModal from '../Modal';
import React, { useState } from 'react';
import './gallery.css';
import 'animate.css';


export default function ProjectCard({ project }) {
  const [modalShow, setModalShow] = useState(false);

  // change image src to fallback on project.image if it is not available
  const image = project.image ? project.image : project.primarySource;


  return (
    <>
      <Col lg={4} md={6} sm={12} className={`${project.category}`} data-order="1"
      data-ref="mixIt">
        <div className="hovereffect">
          <Image src={image} className="img-fluid" alt={project.title} type="image/webp" />
          <div className="overlay">
            <h2 className="animated">
              {project.title}
              <br />
              <span className="languages">{project.languages}</span>
            </h2>
            <Button className="info animated"  onClick={() => setModalShow(true)}>
    Learn More
  </Button>
          </div>
        </div>
      </Col>

      <GalleryModal show={modalShow} onHide={() => setModalShow(false)} project={project} />
    </>
  );
}

