import {Button, Modal, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import './gallery.css';
import './filter.css';
// import GalleryModal from  '../Modal';
import { projectsList } from '../../utils/dbProjects';
import ProjectCard from '../ProjectCard';

//  container card gallery put inside its own component
// inside here map through the projects array and display the cards
//  project data inside utils folder 



  // function GalleryModal(props) {
  //   return (
  //     <Modal 
  //     {...props}
  //     size="lg"
  //     aria-labelledby="contained-modal-title-vcenter"
  //     centered>
  //       <Modal.Header closeButton
  //       className='bg-dark text-white'>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           {projects[0].title}
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body className="bg-dark text-white">
  //         <p>
  //           {projects[0].description}
  //         </p>
  //         <ListGroup className="list-group-flush">
  //           <ListGroup.Item className='bg-dark text-white'>
  //             {projects[0].languages}
  //           </ListGroup.Item>
  //           <ListGroup.Item className='bg-dark text-white' >
  //             {projects[0].type}
  //           </ListGroup.Item>
  //           <ListGroup.Item className='bg-dark text-white'>
  //             <a href={projects[0].github}>GitHub</a>
  //           </ListGroup.Item>
  //         </ListGroup>
  //         </Modal.Body>
  //         <Modal.Footer className='bg-dark text-white'>
  //         <Button variant="primary" href={projects[0].website}>View</Button>
  //           <Button onClick={props.onHide} variant="danger">Close</Button>
  //         </Modal.Footer>
  //     </Modal>
  //   )
  // }

  export default function Projects() {
    // const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        
        <Container id="myBtnContainer" className="mt-3 text-center" fluid>
          <button className="filterBtn active" onClick="filterSelection('all')">Show All</button>
          <button className="filterBtn" onClick="filterSelection('react')">React.js</button>
          <button className="filterBtn" onClick="filterSelection('javascript')">JavaScript</button>
          <button className="filterBtn" onClick="filterSelection('frontend')">Front-End</button>
          <button className="filterBtn" onClick="filterSelection('backend')">Back-End</button>
          </Container>

          {projectsList.map(project => (
             <ProjectCard project = {project}  />
          ))}
   
  
        {/* <GalleryModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
      </>
    );
  }
/* <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/Dev.png')}
                alt="DevCloud"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">DevCloud</h5>
                <p className="card-text">
                  This is a website used to check meant to grab anything a new web developer may
                  need and put it all in one place.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">HTML, CSS, & JavaScript</li>
                <li className="list-group-item bg-dark text-white">Front-End & Back-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/DevCloud" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://brainybrian316.github.io/DevCloud/"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/tech.png')}
                alt="DevCloud"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Tech Blog</h5>
                <p className="card-text">
                  A CMS-style Blog Application The site is similar to Wordpress site, where
                  developers can make blog post
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">
                  Node.js, Express, Handlebars, Sequelize...
                </li>
                <li className="list-group-item bg-dark text-white">Front-End & Back-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/Tech-Blog" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://brainybrian316-blog-site.herokuapp.com/"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/Team-profile-generator-sample.png')}
                alt="Team Profile Generator"
                className="card-img-top"
                id="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">Team Profile Generator</h5>
                <p className="card-text">
                  A node package used to generate a webpage that will display a team of employees
                  basic info. This will enable the user to have quick access to their employees
                  email's and GitHub profiles.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">Node.js, inquirer, Jest</li>
                <li className="list-group-item bg-dark text-white">Back-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/Tech-Blog" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://user-images.githubusercontent.com/99369106/164992557-8eaf23b6-8282-4f3a-8e3e-711c9586f2de.mp4"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/Password-generator.png')}
                alt="DevCloud"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">
                  This is a password generator used to create random password. The user can choose
                  the length of the password and the number of characters to generate the password
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">HTML, CSS, Javascript</li>
                <li className="list-group-item bg-dark text-white">Front-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/Password-Generator" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://brainybrian316.github.io/Password-Generator/"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/quick_read_5.jpg')}
                alt="Read Me Generator"
                className="card-img-top"
                id="no-image"
              />
              <div className="card-body">
                <h5 className="card-title">README.md Generator</h5>
                <p className="card-text">
                  This is a node based README.md generator. You are given a set of prompts in the
                  CLI. Once you answer all the prompts a README.md is automatically generated.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">JavaScript, Node.js, Inquirer</li>
                <li className="list-group-item bg-dark text-white">Back-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a
                    href="https://github.com/Brainybrian316/Professional-Readme-Generator"
                    target="_blank" rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://drive.google.com/file/d/1ccKcpgQswggh2Rq0LavOuJjWCWZAamHb/view"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  Visit Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/trending_3.jpg')}
                alt="Employee Tracker"
                className="card-img-top"
                id="no-image"
              />
              <div className="card-body">
                <h5 className="card-title">Employee-Tracker</h5>
                <p className="card-text">
                  A backend development application that creates an interface that will allow
                  non-developers to easily view and interact with information stored in
                  databases(CMS).
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">Node.js, Inquirer, and MySQL</li>
                <li className="list-group-item bg-dark text-white">Back-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/Employee-Tracker" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://user-images.githubusercontent.com/99369106/167320912-c0d48f05-ce94-4a8a-9c44-5e5dd851dfdf.mp4"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/work.png')}
                alt="WorkDay Scheduler"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">WorkDay Scheduler</h5>
                <p className="card-text">
                  This is a Workday-Scheduler used to track your task for the day. The task will
                  update the color of each time block to represent whether a task is past, present,
                  or future time.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">
                  Luxon.js, BootStrap, Jquery, HTML, CSS, JS
                </li>
                <li className="list-group-item bg-dark text-white">Front-End With API Request</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/Workday-Scheduler" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://brainybrian316.github.io/Workday-Scheduler/"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/code.png')}
                alt="Coding Quiz"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Coding Quiz</h5>
                <p className="card-text">
                  A dynamically updated HTML, CSS, and JavaScript quiz that utilizes LocalStorage to
                  save results. This is a coding quiz used to test your knowledge on different
                  languages. Currently the quiz includes questions on CSS, HTML, and JavaScript.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">HTML, CSS, Javascript</li>
                <li className="list-group-item bg-dark text-white">Front-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/Code-Game" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://brainybrian316.github.io/Code-Game/"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/quick_read_4.jpg')}
                alt="E-Commerce App"
                className="card-img-top"
                id="no-image"
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce App</h5>
                <p className="card-text">
                  A backend development application that creates a database for an e-commerce site
                  that will utilize Object-Relational Mapping to interact with the database.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">
                  RESTful CRUD Operations, MySQL...
                </li>
                <li className="list-group-item bg-dark text-white">Back-End</li>
                <li className="list-group-item bg-dark text-white">
                  <a href="https://github.com/Brainybrian316/E-commerce-Back-End" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://user-images.githubusercontent.com/99369106/168486014-38a9bed0-3895-4878-ac5e-f79cf1449982.mp4"
                  target="_blank" rel="noopener noreferrer"
                  role="button"
                >
                  Visit Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
*/ 
