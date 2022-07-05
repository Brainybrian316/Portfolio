import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
              <Nav.Link href="#Home">HOME</Nav.Link>
              <Nav.Link href="#About" class>ABOUT</Nav.Link>
              <Nav.Link href="#Projects">PROJECTS</Nav.Link>
              <Nav.Link href="#Blog">BLOG</Nav.Link>
              <Nav.Link href="#Contact">CONTACT</Nav.Link>
              <Nav.Link
                href="https://docs.google.com/document/d/1PeP8jPx4ct_WFCPPNeYYgJaiSRx9p8il5QjwZ7s0wbQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
