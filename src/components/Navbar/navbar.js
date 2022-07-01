
export default function Navbar() {
  return (
    <div>

<header className="sticky-top">
			<nav className="navbar navbar-expand-sm" style={{ background: "#1e06f4" }}>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<i className="fa-solid fa-dragon"></i>
						<i className="fa-solid fa-b"></i>
						<i className="fa-solid fa-m"></i>
					</a>
          
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="#Home">HOME</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#About">ABOUT</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Projects">PROJECTS</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Blog">BLOG</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Contact">CONTACT</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="https://docs.google.com/document/d/1PeP8jPx4ct_WFCPPNeYYgJaiSRx9p8il5QjwZ7s0wbQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
							</li>
						</ul>
					</div>

				</div>
			</nav>
		</header>

    </div>
  )
}