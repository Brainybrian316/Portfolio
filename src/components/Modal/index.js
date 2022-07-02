import {Button, Modal, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import React, { useState } from 'react';

function GalleryModal(props) {
  return (
    <Modal 
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton
      className='bg-dark text-white'>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* {projects[0].title} */} test
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <p>
          {/* {projects[0].description} */} test
        </p>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className='bg-dark text-white'>
            {/* {projects[0].languages} */} test
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white' >
            {/* {projects[0].type} */} test
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white'>
            {/* <a href={projects[0].github}>GitHub</a> */} test
          </ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-white'>
        <Button variant="primary" href=''>View</Button>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default GalleryModal;