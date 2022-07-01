
export default function Contact() {
  return (
    <div>

      <div class="col-12 mt-5 pt-5">
			<div class="text-center text-dark">
				<h1 id="Contact">Contact</h1>
			</div>
		</div>

    <div class="container mb-5">
			<div class="row d-flex justify-content-center text-white">
				<div class="col-lg-6 col-md-12 col-sm-12">
					<form class="contact-form">

						<label for="Name" class="form-label">Name:</label>
						<input type="text" name="Name" class="form-control" id="Name" placeholder="Enter your name" required/>

						<label for="Email" class="form-label">Email:</label>
						<input type="email" name="Email" class="form-control" id="Email" placeholder="Enter your email" required/>

						<label for="Message" class="form-label">Message:</label>
						<textarea name="Message" class="form-control" id="Message" rows="3" placeholder="Enter your message" required></textarea>

						<button type="submit" class="btn btn-secondary mt-3">Submit</button>

					</form>
				</div>
			</div>
		</div>

    </div>
  )
}