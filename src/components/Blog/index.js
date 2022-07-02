
export default function Blog() {
  return (
    <div>

    <div className="col-12 mt-5 mb-3">
			<div className="text-center text-dark">
				<h1 id="Blog">Blog</h1>
			</div>
		</div>

    <div className="container">
			<div className="row justify-content-center">
				<div className="d-flex justify-content-evenly col-lg-3 col-md-4 col-sm-12 mt-5">
					<div className="card border-dark text-bg-dark">
						<img src={require("../../assets/images/Under-Construction.png.jpg")} alt="image1" className="rounded card-img-top"/>
						<div className="card-body">
							<h5 className="card-title">Brian Mojica</h5>
							<p className="card-text">
								I have a passion for creating beautiful, functional, and
								intuitive user experiences. I'm currently looking for an entry level position.
							</p>
						</div>
						<div className="p-3">
							<a className="btn btn-secondary" href="home" role="button">Read Blog</a>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-center col-lg-3 col-md-4 col-sm-12 mt-5">
					<div className="card border-dark text-bg-dark">
						<img src={require("../../assets/images/Under-Construction.png.jpg")}  alt="image2" className="rounded card-img-top"/>
						<div className="card-body">
							<h5 className="card-title">Brian Mojica</h5>
							<p className="card-text">
								I have a passion for creating beautiful, functional, and
								intuitive user experiences. I'm currently looking for an entry level position.
							</p>
						</div>
						<div className="p-3">
							<a className="btn btn-secondary" href="home" role="button">Read Blog</a>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-center col-lg-3 col-md-4 col-sm-12 mt-5">
					<div className="card border-dark text-bg-dark">
						<img src={require("../../assets/images/Under-Construction.png.jpg")}  alt="image3" className="rounded card-img-top"/>
						<div className="card-body">
							<h5 className="card-title">Brian Mojica</h5>
							<p className="card-text">
								I have a passion for creating beautiful, functional, and
								intuitive user experiences. I'm currently looking for an entry level position.
							</p>
						</div>
						<div className="p-3">
							<a className="btn btn-secondary" href="home" role="button">Read Blog</a>
						</div>
					</div>
				</div>

			</div>
		</div>

    </div>
  )
}