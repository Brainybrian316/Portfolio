import { dbBlogsList } from "../../utils/dbBlogs"
import { Container, Row, Col } from "react-bootstrap"
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import './slider.css'


export default function Blog({ isVisible }) {
	const [[page, direction], setPage] = useState([0, 0])

	const imageIndex = wrap(0, dbBlogsList.length - 1, page)

	const paginate = newDirection => {
		setPage([page + newDirection, newDirection])
	}
	
  return (
    <>

    <div className="col-12 mt-5 mb-3">
			<div className="text-center text-dark">
				<h1 id="Blog">Blog</h1>
			</div>
		</div>

<Container>
		<AnimatePresence initial={false} custom={direction}>
    <motion.img
			key={imageIndex}
			src={dbBlogsList[imageIndex].image}
			alt={dbBlogsList[imageIndex].title}
			custom={direction}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				x: {type: 'spring', stiffness: 300, damping: 300 },
				opacity: {duration: 1}
			}}
			drag="x"
			dragConstraints={{ left: 0, right: 0 }}
			dragElasticity={1} />
  </AnimatePresence>
	<motion.button
	whiteHover={{ scale: 1.2, transition: {duration: 0.5 } }}
	whileTap={{ scale: 0.9 }}
	className="next"
	onClick={() => paginate(1)}
	>
		<FontAwesomeIcon icon={faArrowRight} size="2x"  />
	</motion.button>
	<motion.button
	whiteHover={{ scale: 1.2, transition: {duration: 0.5 } }}
	whileTap={{ scale: 0.9 }}
	className="prev"
	onClick={() => paginate(-1)}
	>
		<FontAwesomeIcon icon={faArrowLeft} size="2x" />
	</motion.button>
	</Container>

	






    </>
  )
}

{/* 			
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
		</Container> */}