import { Button, Col, Image } from 'react-bootstrap';
import GalleryModal from '../Modal';
import React, { useState } from 'react';
import './gallery.css';
import 'animate.css';

export default function ProjectCard({ project }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Col lg={4} md={6} sm={12} className={`mix ${project.category}`} data-order="1">
        <div className="hovereffect">
          <Image src={project.image} alt={project.title}  fluid id="img-size"/>
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
