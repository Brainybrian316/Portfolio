import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


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
      


				<Row>
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <Card style={{ width: '50rem' }} className="bg-black text-white ">
              <Card.Img
                variant="top"
                src={require('../../assets/images/Prof-pic.png')}
                alt="Brian"
                className="rounded pb-3"
              />
              <h1 className='text-info'>Brian Mojica</h1>
              <Card.Text>
                <p>
                  Mission-driven full-stack Web Developer & Educator with a passion for thoughtful
                  UI, collaboration, and teaching. I am innovative problem-solver with a passion for developing apps. I am continuing my studies by expanding my knowledge in IOS development, more languages, libraries, and concepts. 
                </p>
              </Card.Text>
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
              <Card.Body>
                <Card.Link href="https://github.com/Brainybrian316" className='fs-1'>
                  <i className="fa-brands fa-github-alt px-2 text-warning"></i>
                </Card.Link>
                <Card.Link href="https://www.linkedin.com/in/brian-mojica-63b638221" className='fs-1'>
                  <i className="fa-brands fa-linkedin px-2 text-warning"></i>
                </Card.Link>
                <Card.Link href="mailto:brainybrian316@gmail.com" className='fs-1'>
                  <i className="fa-solid fa-envelope px-2 text-warning"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
				


          <Col md={6} sm={12} className="d-flex justify-content-center mt-2" >
            <Card style={{ width: '50rem' }} className="bg-black text-white">
              <Card.Body>
								<h1 className='text-info'>Technical Skills:</h1>
                <Card.Text>
                  <p>
                  MERN Stack (MongoDB, Express.js, React.js, Node.js) jQuery,
                    Bootstrap, JavaScript, MySQL
                  </p>
                  <p>
                    Core Concepts: Security and Session Storage, User Authentication, Responsive
                    Design, Cookies, Local Storage
                  </p>

                  <p className="pt-3 mt-3">
                  My goal and desire are to leave my mark in the tech world whether that be through open source contributions, project tutorials, and of course the career opportunities I endeavor in.
                  </p>
                  <p className="pt-3 mt-3">
                    What I bring to every project:
                    <br />
                    <ul>
                      <li> Problem-solving skills and perseverance</li>
                      <li> An understanding of UX/UI principles</li>
                      <li>Creativity and passion</li>
                      <li>Dedication to teamwork and flexible collaboration</li>
                      <li>Foundational knowledge of agile software development principles</li>
                    </ul>
                    I am excited to leverage my skills in the future as part of a quality-driven
                    team. Let's <a href="#Contact">connect</a> and chat about our next project.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
				</Row>

			</Container>
    </section>
  );
}
