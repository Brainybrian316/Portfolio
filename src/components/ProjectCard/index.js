import {Button, Modal, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import GalleryModal from '../Modal';
import React, { useState } from 'react';




export default function ProjectCard({project})  {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Container className="mt-3" >
    <Row className="g-2">
      <Col lg={4} md={6} sm={12}>
      <div className="hovereffect">
  <Image src={project.image}
  className='img-fluid'></Image>
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
    </Row>
  </Container>
     
  <GalleryModal
          project = {project}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  </>
  )
}
