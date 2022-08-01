import './navbar.css';
import { motion } from 'framer-motion';


export default function Navbar() {

  
  return (
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#Home" id="fancy-text-nav" >
    <i className="fa-solid fa-dragon"></i>
    <i className="fa-solid fa-b"></i>
    <i className="fa-solid fa-m"></i>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <motion.li className="nav-item" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
          <a className="nav-link active" aria-current="page" href="#Home">HOME</a>
        </motion.li>
        
        <motion.li className="nav-item" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
          <a className="nav-link" href="#About">ABOUT</a>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
          <a className="nav-link" href="#Projects">PROJECTS</a>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
          <a className="nav-link" href="#Blog">BLOGS</a>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
          <a className="nav-link" href="#Contact">CONTACT</a>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.1 }}>
        <a className='nav-link'
        href="https://docs.google.com/document/d/1PeP8jPx4ct_WFCPPNeYYgJaiSRx9p8il5QjwZ7s0wbQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
        </motion.li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}