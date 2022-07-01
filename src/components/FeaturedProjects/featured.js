

export default function featuredProjects() {
  return (
    <div>

      	<div class="col-12 mt-5 pt-5">
					<div class="text-center">
						<h1 id="Projects">Projects</h1>
					</div>
				</div>

        <div class="container mt-3 pt-3">
					<div class="row">
						<div class="col-12">
							<div class="card border-dark text-bg-dark">
								<img  src={require("../../assets/images/Sweet-Nostalgia.png")} alt="Sweet-Nostalgia" class="card-img-top"/>
								<div class="card-body">
									<h5 class="card-title">Sweet Nostalgia (Featured)</h5>
									<p class="card-text">
										A Full-Stack Web Developer's CMS-style E-Commerce Application📚💻 🖥️ . The site is similar to most box subscription model sites, where clients can subscribe to a box subscription of their choice. Users will have the option to signup and subscribe to one of the three category decades we have to offer. The app follows the MVC architecture using Handlebars.js for the front-end templating language. Sequelize as the ORM, and express-session npm package for authentication. The app is hosted on Heroku. The app is built with bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mySql2, sequelize, and MySql. The following languages used to create this demo are: JavaScript, HTML, CSS.
									</p>
								</div>
                <ul class="list-group list-group-flush">
									<li class="list-group-item bg-dark text-white">Handlebars, MVC-architecture, MySQL...</li>
									<li class="list-group-item bg-dark text-white">Full-Stack</li>
									<li class="list-group-item bg-dark text-white"><a href="https://github.com/Brainybrian316/Sweet-Nostalgia" target="_blank" rel="noopener noreferrer">GitHub</a></li>
								</ul>
								<div class="p-3">
									<a class="btn btn-primary float-end" href="https://sweet-nostalgia.herokuapp.com/" target="_blank" rel="noopener noreferrer" role="button">Visit Site</a>
                </div>
                </div>
                </div>
                </div>
                </div>
    </div>
  )
}