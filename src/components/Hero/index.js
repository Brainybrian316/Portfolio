import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import './hero.css';

export default function Hero() {

VANTA.HALO({
  el: "#vanta-canvas",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  baseColor: 0x0,
  backgroundColor: 0xf0f11,
  amplitudeFactor: 1.10,
  xOffset: 0.33,
  yOffset: -0.12
})


  return (
    <>
      <Container fluid>
      <div id="vanta-canvas">
			<div class="container hero" id="Home">
				<div class="row">
					<div class="col-md-12 mt-4 pt-4 fs-1">
						<div class="text-center text-light" id="hero-text">
							<p>Hello, I'm&nbsp;&nbsp;
								<span class="highlight">Brian Mojica</span>
								<br/>
								I'm a Full-Stack Web Developer.
                <Spline scene="https://prod.spline.design/Wuect47Lqcexw4QM/scene.splinecode" />

							</p>
							<div>
							<a href="#Projects" class="btn btn-primary" id="btn-hero"><span>View My Work</span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

      </Container>

  </>
 
  );
}

