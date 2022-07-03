import { Button, Col, Image, Overlay, OverlayTrigger, } from 'react-bootstrap';
import GalleryModal from '../Modal';
import React, { useState } from 'react';
import './gallery.css';


export default function ProjectCard({ project }) {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);


  return (
    <>
          <Col lg={4} md={6} sm={12}>
            <div className="hovereffect">
              <Image src={project.image} fluid rounded  ></Image>
              <div className="overlay">
                <h2>
                  {project.title}
                  <br />
                  <span className="languages">{project.languages}</span>
                </h2>
                <Button className="info"  onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
              </div>
            </div>
          </Col>

                {/* after modal close set to show projectCard */}
          <GalleryModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            project={project}
          />
    </>
  );
}
