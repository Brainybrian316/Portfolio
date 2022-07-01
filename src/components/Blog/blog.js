
export default function Blog() {
  return (
    <div>

    <div class="col-12 mt-5 mb-3">
			<div class="text-center text-dark">
				<h1 id="Blog">Blog</h1>
			</div>
		</div>

    <div class="container">
			<div class="row justify-content-center">
				<div class="d-flex justify-content-evenly col-lg-3 col-md-4 col-sm-12 mt-5">
					<div class="card border-dark text-bg-dark">
						<img src={require("../../assets/images/Under-Construction.png.jpg")} alt="image1" class="rounded card-img-top"/>
						<div class="card-body">
							<h5 class="card-title">Brian Mojica</h5>
							<p class="card-text">
								I have a passion for creating beautiful, functional, and
								intuitive user experiences. I'm currently looking for an entry level position.
							</p>
						</div>
						<div class="p-3">
							<a class="btn btn-secondary" href="home" role="button">Read Blog</a>
						</div>
					</div>
				</div>

				<div class="d-flex justify-content-center col-lg-3 col-md-4 col-sm-12 mt-5">
					<div class="card border-dark text-bg-dark">
						<img src={require("../../assets/images/Under-Construction.png.jpg")}  alt="image2" class="rounded card-img-top"/>
						<div class="card-body">
							<h5 class="card-title">Brian Mojica</h5>
							<p class="card-text">
								I have a passion for creating beautiful, functional, and
								intuitive user experiences. I'm currently looking for an entry level position.
							</p>
						</div>
						<div class="p-3">
							<a class="btn btn-secondary" href="home" role="button">Read Blog</a>
						</div>
					</div>
				</div>

				<div class="d-flex justify-content-center col-lg-3 col-md-4 col-sm-12 mt-5">
					<div class="card border-dark text-bg-dark">
						<img src={require("../../assets/images/Under-Construction.png.jpg")}  alt="image3" class="rounded card-img-top"/>
						<div class="card-body">
							<h5 class="card-title">Brian Mojica</h5>
							<p class="card-text">
								I have a passion for creating beautiful, functional, and
								intuitive user experiences. I'm currently looking for an entry level position.
							</p>
						</div>
						<div class="p-3">
							<a class="btn btn-secondary" href="home" role="button">Read Blog</a>
						</div>
					</div>
				</div>

			</div>
		</div>

    </div>
  )
}