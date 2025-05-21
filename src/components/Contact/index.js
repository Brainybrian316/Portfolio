import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiX } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      );

      setStatus({
        show: true,
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        show: true,
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (status.show) {
      const timer = setTimeout(() => {
        setStatus(prev => ({ ...prev, show: false }));
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [status.show]);

  const closeStatus = () => {
    setStatus(prev => ({ ...prev, show: false }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to chat? Feel free to reach out!</p>
        </motion.div>

        <div className="contact-content">
          <motion.form 
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="form-group">
              <div className="input-with-icon">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
                <div className="input-underline"></div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-with-icon">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Email"
                  required
                />
                <div className="input-underline"></div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-with-icon">
                <FiMessageSquare className="input-icon textarea-icon" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input textarea"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <div className="input-underline"></div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FiSend className="btn-icon" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>Prefer to reach out directly? Here's how you can find me:</p>
            
            <div className="contact-methods">
              <a href="mailto:brainybrian316@gmail.com" className="contact-method">
                <FiMail className="contact-icon" />
                <span>brainybrian316@gmail.com</span>
              </a>
              <a href="tel:+1234567890" className="contact-method">
                <FiMessageSquare className="contact-icon" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Brainybrian316" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <span className="divider">•</span>
              <a href="https://linkedin.com/in/Brainybrian316" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {status.show && (
          <motion.div 
            className={`status-message ${status.success ? 'success' : 'error'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="status-content">
              <FiCheckCircle className="status-icon" />
              <span>{status.message}</span>
            </div>
            <button onClick={closeStatus} className="close-btn" aria-label="Close message">
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
