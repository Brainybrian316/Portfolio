import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Result = () => {
  return <p>Your message has been successfully sent. I will contact you soon.</p>;
};

export default function Contact(props) {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <>

      <Container className='text-center text-white pb-5'>
            <h1>Contact</h1>
      </Container>

			
			<Container >	
				<Row className="mt-5 text-white">
            <form className="contact-form" action="" onSubmit={sendEmail}>
              <label for="Name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="Name"
                placeholder="Enter your name"
                required
              />

              <label for="Email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="Email"
                placeholder="Enter your email"
                required
              />

              <label for="Message" className="form-label">
                Message:
              </label>
              <textarea
                name="message"
                className="form-control"
                id="Message"
                rows="3"
                placeholder="Enter your message"
                required
              ></textarea>
              <div className="text-primary fs-4 fw-bold">{result ? <Result /> : null}</div>

              <button type="submit" className="btn btn-primary mt-3" value="Send">
                Submit
              </button>
            </form>
				</Row>
			</Container>

    </>
  );
}
