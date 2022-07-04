import { dbBlogsList } from "../../utils/dbBlogs"
import { Container, Row, Col } from "react-bootstrap"
// import { motion, AnimatePresence } from "framer-motion"


export default function Blog({ isVisible }) {
	
  return (
    <div>

    <div className="col-12 mt-5 mb-3">
			<div className="text-center text-dark">
				<h1 id="Blog">Blog</h1>
			</div>
		</div>
		{/* <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence> */}

		<Container>
			<Row>
				{dbBlogsList.map((blog) => 
					<Col key={blog.id} md={4} sm={12} className="g-2">
						<div className="card">
							<img className="card-img-top" src={blog.image} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">{blog.title}</h5>
								<p className="card-text">{blog.description}</p>
								<a href={blog.link} className="btn btn-primary">Read More</a>
							</div>
						</div>
					</Col>
				)}
			</Row>
		</Container>



    </div>
  )
}