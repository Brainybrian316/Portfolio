import { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Result = () => {
	return(
		<p>Your message has been successfully sent. I will contact you soon.</p>
	)
}

export default function Contact(props) {


	const [result, showResult] = useState(false);

	
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio-contact', 'template_meymdpm', e.target, '9D0f7rikY489nEQZS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
			e.target.reset();
			showResult(true);
  };

	setTimeout(() => {
		showResult(false); },
		 5000);

  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-5 pt-5">
            <h1 className="text-center">Contact</h1>
            <hr />
          </Col>
        </Row>
      </Container>

      <div className="container mb-5">
        <div className="row d-flex justify-content-center text-white">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <form className="contact-form"  action="" onSubmit={sendEmail}>
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

              <button type="submit" className="btn btn-primary mt-3" value="Send">
                Submit
              </button>
							<div>{result ? <Result/> : null}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY

