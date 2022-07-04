import About from  './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../src/assets/css/style.css';
import Container from 'react-bootstrap/Container';


function App() {

  return (
    <body>
      <Navbar />
      <About/>
      <FeaturedProjects/>
      <Projects />
      <Blog/>

      
      <Container id="thing" fluid >
      <Contact/>
      <Footer/>
      </Container>

    </body>
  );
}

export default App;
