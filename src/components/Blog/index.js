import { dbBlogsList } from '../../utils/dbBlogs';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import './slider.css';

export default function Blog() {
  const blog = dbBlogsList;

  // set blog.primarySource to fallback on blog.image if it is not available
  blog.forEach((blog) => {
    if (!blog.primarySource) {
      blog.primarySource = blog.image;
    }
  });

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5 pt-5">
            <h1 className="text-center" id="Blog">
              Blog
            </h1>
            <hr />
          </Col>
        </Row>
      </Container>
      <Container>
        <Carousel>
          {blog.map((blog) => (
            <Carousel.Item key={blog.id} interval={10000}>
              <Image src={blog.primarySource} alt={blog.title} fluid />
              <Carousel.Caption>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
