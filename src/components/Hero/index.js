import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './hero.css';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const words = ['Developer', 'Designer', 'Problem Solver'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Brian Mojica</span>
          </h1>
          <div className="typewriter">
            <h2 className="hero-subtitle">
              I'm a <span className="changing-word">{words[currentWordIndex]}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
          <p className="hero-description">
            Full-stack developer with a passion for creating beautiful, functional web applications.
          </p>
          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="primary-btn"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            y: isHovered ? -10 : 0,
            rotate: isHovered ? 2 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="image-container">
            <div className="glow"></div>
            <img 
              src={require('../../assets/images/me.png')} 
              alt="Brian Mojica" 
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
