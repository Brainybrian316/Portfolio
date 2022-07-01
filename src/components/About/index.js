

export default function About() {
  return (
    <div>

      <div class="container">
        <div class="row">
          <div class="col-12 mt-5 pt-5">
            <div class="text-center">
              <h1 id="About">About</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 mt-5">
            <div className="card border-dark bg-dark text-white"  style={{ width: "30rem" }}>
              <img src={require("../../assets/images/Prof-pic.png")} alt="Brian" class="rounded card-img-top" />

						<div className="card-body">
							<h5 className="card-title">Brian Mojica</h5>
							<p className="card-text">
								Mission-driven full-stack Web Developer & Educator with a passion for thoughtful UI, collaboration, and teaching. Recently earned a certificate in Full Stack development from the University of Central Florida. Continually honing the skills learned at UCF such as HTML, CSS, JavaScript, React.js, and more, while expanding my knowledge by learning new skills like Angular and Python.
							</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item bg-dark text-white">Full-Stack Web Developer & Educator</li>
							<li className="list-group-item bg-dark text-white">University of Central Florida Grad</li>
							<li className="list-group-item bg-dark text-white"><i className="fa-regular fa-bookmark"></i> HTML, CSS, JavaScript, & React.js <i className="fa-regular fa-heart"></i></li>
						</ul>

						<div class="card-body text-center fs-3">
							<a href="https://github.com/Brainybrian316"><i class="fa-brands fa-github-alt px-2 text-warning"></i></a>
							<a href="https://www.linkedin.com/in/brian-mojica-63b638221"><i class="fa-brands fa-linkedin px-2 text-warning"></i></a>
							<a href="https://www.facebook.com/"><i class="fa-brands fa-facebook px-2 text-warning"></i></a>
							<a href="mailto:brainybrian316@gmail.com"><i class="fa-solid fa-envelope px-2 text-warning"></i></a>
						</div>
						</div>
          </div>

			<div class="d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 mt-5">
					<div class="card border-dark text-bg-dark" 
					 style={{ width: "32rem" }}>
						<div class="card-body">
							<h4 class="card-title">Technical Skills</h4>
							<p class="card-text"/>

								<div>
										<p>Languages: HTML, CSS, JavaScript,</p>
										<p>
												Frameworks: MERN Stack (MongoDB, Express.js, React.js, Node.js) jQuery, Bootstrap, Firebase, MySQL
										</p>
										<p>
												Core Concepts: Security and Session Storage, User Authentication, Responsive Design,  Cookies, Local Storage
										</p>

										<p class="pt-3 mt-3">
									Thanks for viewing my profile. Above is a table showcasing my confidence in the skills listed.
								</p>
								<p class="pt-3 mt-3">
									I am innovative problem-solver with a passion for developing apps. I am continuing my studies by expanding into IOS development. My goal and desire are to leave my mark in the tech world whether that be through open source contributions, project tutorials, and of course the career opportunities I endeavor in.
								</p>
								<p class="pt-3 mt-3">
									What I bring to every project:
									<br/>
									<ul>
										<li> Problem-solving skills and perseverance</li>
										<li> An understanding of UX/UI principles</li>
										<li>Creativity and passion</li>
										<li>Dedication to teamwork and flexible collaboration</li>
										<li>Foundational knowledge of agile software development principles</li>
									</ul>
									I am excited to leverage my skills in the future as part of a quality-driven team. Let's <a href="#Contact">connect</a> and chat about our next project.
								</p>
								</div>
								</div>
								</div>
								</div>
								</div>
								</div>
    </div>
  );
}

