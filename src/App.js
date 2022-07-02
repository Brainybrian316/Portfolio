import About from  './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import '../src/assets/css/style.css';
import { projectsList } from './utils/dbProjects';

// in my projects component before the slash we can do projectlist = {projectslist}

function App() {

  return (
    <body>
      <Navbar />
      <About/>
      <FeaturedProjects/>
      <Projects projectsList={projectsList} />
      <Blog/>
      <Contact/>
    </body>
  );
}

export default App;
