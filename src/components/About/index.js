import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

export default function About() {
  return (
    <section id="About">
      <Container fluid>
        <Row>
          <Col className="mt-5 pt-5">
            <h1 className="text-center">About Me</h1>
            <hr />
          </Col>
        </Row>
      </Container>

      <Container className="bg-black text-white rounded p-0">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Image
              src={require('../../assets/images/prof-b.jpeg')}
              alt="Brian"
              className="rounded img-fluid"
            />
          </Col>
          <Col lg={8} md={6} sm={12}>
          <h1 className="text-info">Brian Mojica</h1>
            <p>
              Mission-driven full-stack Web Developer & Educator with a passion for thoughtful UI,
              collaboration, and teaching. I am innovative problem-solver with a passion for
              developing apps. I am continuing my studies by expanding my knowledge in IOS
              development, more languages, libraries, and concepts.
            </p>
            <ListGroup className="list-group-flush rp">
              <ListGroup.Item className="bg-black text-white">
                Full-Stack Web Developer & Educator
              </ListGroup.Item>
              <ListGroup.Item className="bg-black text-white">
                University of Central Florida Graduate
              </ListGroup.Item>
              <ListGroup.Item className="bg-black text-white">
                <i className="fa-regular fa-bookmark"></i> HTML, CSS, JavaScript, & React.js{' '}
                <i className="fa-regular fa-heart"></i>
              </ListGroup.Item>
            </ListGroup>
            <a href="https://github.com/Brainybrian316" className="fs-1">
              <i className="fa-brands fa-github-alt px-2 text-warning"></i>
            </a>
            <a href="https://www.linkedin.com/in/brian-mojica-63b638221" className="fs-1">
              <i className="fa-brands fa-linkedin px-2 text-warning"></i>
            </a>
            <a href="mailto:brainybrian316@gmail.com" className="fs-1">
              <i className="fa-solid fa-envelope px-2 text-warning"></i>
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="bg-black text-white rounded mt-2">
        <Row>
          <Col md={6} sm={12}>
            <h1 className="text-info">Technical Skills:</h1>
            <p>
              MERN Stack (MongoDB, Express.js, React.js, Node.js) jQuery, Bootstrap, JavaScript,
              MySQL
            </p>
            <p>
              Core Concepts: Security and Session Storage, User Authentication, Responsive Design,
              Cookies, Local Storage
            </p>
            <p>
              My goal and desire are to leave my mark in the tech world whether that be through open
              source contributions, project tutorials, and of course the career opportunities I
              endeavor in.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <p>
              What I bring to every project:
              <ul>
                <li> Problem-solving skills and perseverance</li>
                <li> An understanding of UX/UI principles</li>
                <li>Creativity and passion</li>
                <li>Dedication to teamwork and flexible collaboration</li>
                <li>Foundational knowledge of agile software development principles</li>
              </ul>
              I am excited to leverage my skills in the future as part of a quality-driven team.
              Let's <a href="#Contact">connect</a> and chat about our next project.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
