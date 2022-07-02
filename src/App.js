import About from  './components/About/about';
import FeaturedProjects from './components/FeaturedProjects/featured';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/blog';
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/navbar';
import '../src/assets/css/style.css';


function App() {
  return (
    <body>
      <Navbar />
      <About/>
      <FeaturedProjects/>
      <Projects/>
      <Blog/>
      <Contact/>
    </body>
  );
}

export default App;
