import About from  './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './assets/css/style.css';
import Container from 'react-bootstrap/Container';
import Hero from './components/Hero';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <Navbar />
      </header>
      <main>
        <Hero id="home"/>
        <div data-aos="fade-up" data-aos-offset="360" id="about">
          <About />
        </div>
        <div data-aos="fade-up" id="projects">
          <Projects />
        </div>
        <div data-aos="fade-up" id="contact">
          <Container id="curve" fluid>
            <Contact/>
            <Footer/>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
