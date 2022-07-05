import { Container, Row, Col } from 'react-bootstrap';

export default function featuredProjects() {
  return (
		<div>
		<Container>
		<Row>
			<Col className="mt-5 pt-5">
				<h1 className="text-center" id="Projects">Projects</h1>
				<hr />
			</Col>
		</Row>
	</Container>

      <div className="container mt-3 pt-3">
        <div className="row">
          <div className="col-12">
            <div className="card border-dark text-bg-dark">
              <img
                src={require('../../assets/images/sweet.png')}
                alt="Sweet-Nostalgia"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Sweet Nostalgia (Featured)</h5>
                <p className="card-text">
                  A Full-Stack Web Developer's CMS-style E-Commerce Application📚💻 🖥️ . The site is
                  similar to most box subscription model sites, where clients can subscribe to a box
                  subscription of their choice. Users will have the option to signup and subscribe
                  to one of the three category decades we have to offer. The app follows the MVC
                  architecture using Handlebars.js for the front-end templating language. Sequelize
                  as the ORM, and express-session npm package for authentication. The app is hosted
                  on Heroku. The app is built with bcrypt, connect-session-sequelize, dotenv,
                  express, express-handlebars, express-session, mySql2, sequelize, and MySql. The
                  following languages used to create this demo are: JavaScript, HTML, CSS.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white">
                  Handlebars, MVC-architecture, MySQL...
                </li>
                <li className="list-group-item bg-dark text-white">Full-Stack</li>
                <li className="list-group-item bg-dark text-white">
                  <a
                    href="https://github.com/Brainybrian316/Sweet-Nostalgia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
              <div className="p-3">
                <a
                  className="btn btn-primary float-end"
                  href="https://sweet-nostalgia.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
