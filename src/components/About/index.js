import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaGithubAlt, FaLinkedin, FaEnvelope, FaBookmark, FaHeart } from 'react-icons/fa';
import styles from './about.module.css';

const About = () => {
  const profileImage = require('../../assets/images/prof-b.jpeg');
  const groguGif = 'https://res.cloudinary.com/dbgsvyi21/image/upload/v1657407214/grogu_vmhkbh.gif';

  const skills = [
    'Full-Stack Development (MERN Stack)',
    'JavaScript (ES6+) / TypeScript / Python',
    'React.js / Next.js / Redux',
    'Node.js / Express.js / RESTful APIs',
    'MongoDB / PostgreSQL / MySQL',
    'HTML5 / CSS3 / Tailwind CSS / Bootstrap',
    'Git / GitHub / GitLab',
    'Agile / Scrum Methodologies',
    'AWS / Heroku / Vercel',
    'Jest / Mocha / Chai',
    'Docker / Containerization',
    'CI/CD Pipelines',
    'Responsive Web Design',
    'Cross-browser Compatibility',
    'Performance Optimization'
  ];

  const strengths = [
    'Full-Stack Development: Experience in both frontend and backend technologies',
    'Technical Leadership: Led development teams and mentored junior developers',
    'Problem Solving: Strong analytical and debugging skills',
    'Agile Development: Experience working in fast-paced Agile environments',
    'Code Quality: Focus on writing clean, maintainable, and efficient code',
    'Collaboration: Excellent teamwork and communication skills',
    'Continuous Learning: Passion for staying updated with latest technologies',
    'Project Management: Experience in planning and delivering complex projects',
    'Code Review: Strong focus on code quality and best practices',
    'Testing: Experience with unit and integration testing'
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center my-5">
            <h1 className={styles.sectionTitle}>About Me</h1>
            <div className={styles.divider} />
          </Col>
        </Row>

        <Row className={`${styles.aboutContainer} align-items-center`}>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <Image 
                src={profileImage} 
                alt="Brian Mojica"
                className={styles.profileImage}
                fluid
              />
            </div>
          </Col>
          
          <Col lg={8} md={6}>
            <div className={styles.aboutContent}>
              <h1 className={styles.name}>Brian Mojica</h1>
              <h2 className={styles.title}>Senior Full-Stack Developer</h2>
              
              <p className={styles.bio}>
                Results-driven Full-Stack Developer with extensive experience in designing and implementing scalable web applications.
                Proven track record of leading development teams, architecting robust solutions, and delivering high-quality software.
                Passionate about creating efficient, maintainable code and mentoring the next generation of developers.
              </p>
              
              <p className={styles.bio}>
                With expertise in both frontend and backend technologies, I excel at bridging the gap between user experience and technical implementation.
                My experience spans across various industries, from healthcare to finance, where I've consistently delivered impactful solutions.
              </p>
              
              <div className={styles.socialLinks}>
                <a 
                  href="https://github.com/Brainybrian316" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithubAlt className={styles.socialIcon} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/brian-mojica-63b638221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className={styles.socialIcon} />
                </a>
                <a 
                  href="mailto:brainybrian316@gmail.com" 
                  aria-label="Email"
                >
                  <FaEnvelope className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row className={`${styles.skillsContainer} mt-5`}>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h3 className={styles.sectionSubtitle}>
              <FaBookmark className="me-2" />
              Technical Skills
            </h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <p>
                With extensive experience in full-stack development, I've architected and implemented
                scalable web applications using modern JavaScript frameworks and cloud technologies.
                My expertise includes building responsive UIs, designing RESTful APIs, and optimizing
                application performance for maximum efficiency and user satisfaction.
              </p>
              <p className="mt-3">
                I'm particularly passionate about implementing best practices in code quality,
                testing, and deployment automation to ensure reliable and maintainable software solutions.
              </p>
            </div>
          </Col>
          
          <Col lg={6}>
            <h3 className={styles.sectionSubtitle}>
              <FaHeart className="me-2" />
              What I Bring
            </h3>
            <ul className={styles.strengthsList}>
              {strengths.map((strength, index) => (
                <li key={index} className={styles.strengthItem}>
                  {strength}
                </li>
              ))}
            </ul>
            
            <p className="mt-3">
              I'm excited to leverage my skills as part of a quality-driven team.
              Let's <a href="#contact" className={styles.highlightLink}>connect</a> and chat about our next project!
            </p>
            
            <div className={`${styles.funElement} mt-3`}>
              <img 
                src={groguGif} 
                alt="Grogu having fun" 
                className={styles.groguGif}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '../assets/images/grogu.gif';
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
