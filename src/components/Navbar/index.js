import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { motion } from "framer-motion";

export default function navbar() {
  return (
    <>
      <Navbar sticky="top" expand="lg" style={{ background: 'black' }} variant="dark" >
        <Container fluid>
          <Navbar.Brand href="/" id="fancy-text-nav">
            <i className="fa-solid fa-dragon"></i>
            <i className="fa-solid fa-b"></i>
            <i className="fa-solid fa-m"></i>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto nav-link">
            <motion.toggle whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
              <Nav.Link href="#Home">HOME</Nav.Link>
            </motion.toggle>

            <motion.toggle whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
              <Nav.Link href="#About" >ABOUT</Nav.Link>
            </motion.toggle>
            <motion.toggle whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }} className="example">
              <Nav.Link href="#Projects">PROJECTS</Nav.Link>
            </motion.toggle>
            <motion.toggle whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
              <Nav.Link href="#Blog">BLOG</Nav.Link>
            </motion.toggle>
            <motion.toggle whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
              <Nav.Link href="#Contact">CONTACT</Nav.Link>
            </motion.toggle>
            <motion.toggle whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
              <Nav.Link
                href="https://docs.google.com/document/d/1PeP8jPx4ct_WFCPPNeYYgJaiSRx9p8il5QjwZ7s0wbQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </Nav.Link>

            </motion.toggle>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
