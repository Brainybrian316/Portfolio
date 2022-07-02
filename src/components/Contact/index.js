
export default function Contact() {
  return (
    <div>

      <div class="col-12 mt-5 pt-5">
			<div className="text-center text-dark">
				<h1 id="Contact">Contact</h1>
			</div>
		</div>

    <div className="container mb-5">
			<div className="row d-flex justify-content-center text-white">
				<div className="col-lg-6 col-md-12 col-sm-12">
					<form className="contact-form">

						<label for="Name" className="form-label">Name:</label>
						<input type="text" name="Name" className="form-control" id="Name" placeholder="Enter your name" required/>

						<label for="Email" className="form-label">Email:</label>
						<input type="email" name="Email" className="form-control" id="Email" placeholder="Enter your email" required/>

						<label for="Message" className="form-label">Message:</label>
						<textarea name="Message" className="form-control" id="Message" rows="3" placeholder="Enter your message" required></textarea>

						<button type="submit" className="btn btn-primary mt-3">Submit</button>

					</form>
				</div>
			</div>
		</div>

    </div>
  )
}