import {Button, ListGroup, } from 'react-bootstrap';
import React from 'react';
import Modal from 'react-bootstrap/Modal'


function GalleryModal(props) {
  return (
    <>
    <Modal 
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton
      className='bg-dark text-white'>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.project.title} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <p>
          {props.project.description} 
        </p>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className='bg-dark text-white'>

            {props.project.languages} 
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white' >
            <p></p>
            {props.project.type} 
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white'>
            <a href={props.project.github} target="_blank" rel="noopener noreferrer"
                  role="button">GitHub</a> 
          </ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-white'>
        <a role="button" href={props.project.website}  target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a> 
          <Button  onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default GalleryModal;