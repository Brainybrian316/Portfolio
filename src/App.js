import About from  './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../src/assets/css/style.css';
import Container from 'react-bootstrap/Container';
import Hero from './components/Hero';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function App() {
  useEffect(() => {
  Aos.init(
    { duration: 1000, once: true });
}, []);

  return (
    <>
      <Navbar />
      <Hero/>
      <div 
      data-aos="fade-up"
      data-aos-offset="360">
      <About />
      </div>
      <div data-aos="fade-right">
      <FeaturedProjects />
      </div>
      <div data-aos="fade-right">
      <Projects />
      </div>
      <div data-aos="fade-right">
      <Blog/>
      </div>

      <div data-aos="fade-up">
      <Container id="curve" fluid >
      <Contact/>
      <Footer/>
      </Container>
      </div>

    </>
  );
}

export default App;
