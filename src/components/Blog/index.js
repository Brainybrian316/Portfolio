import { dbBlogsList } from "../../utils/dbBlogs"
import { Container, Row, Col, Image, Carousel,} from "react-bootstrap"
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import './slider.css'


export default function Blog() {


	

	

	

	
  return (
    <>


<Container>
		<Row>
			<Col className="mt-5 pt-5">
				<h1 className="text-center">Blog</h1>
				<hr />
			</Col>
		</Row>
	</Container>
		<Container >
		<Carousel fade>
			{dbBlogsList.map((blog, index) => (
				<Carousel.Item key={index} interval={10000}>
					<Image src={blog.image} alt={blog.title} className="slider-image"/>
					<Carousel.Caption bsPrefix="carousel-caption">
						<h3>{blog.title}</h3>
						<p>{blog.description}</p>
						<a href={blog.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" >Read More</a>
					</Carousel.Caption>
					</Carousel.Item>
				))}
		</Carousel>
		</Container>


    </>
  )
}

