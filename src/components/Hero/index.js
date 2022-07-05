import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import './hero.css';
import HALO from 'vanta/dist/vanta.halo.min';
import { useEffect, useRef, useState } from 'react';

export default function Hero(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x0,
          backgroundColor: 0xf0f11,
          amplitudeFactor: 1.1,
          xOffset: 0.33,
          yOffset: -0.12,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div id="vanta-canvas" ref={myRef}>
        <div class="container hero" id="Home">
          <div class="row">
            <div class="col-md-12 mt-4 pt-4 fs-1">
              <div class="text-center text-light" id="hero-text">
                <p>
                  Hello, I'm&nbsp;&nbsp;
                  <span class="highlight">Brian Mojica</span>
                  <br />
                  I'm a Full-Stack Web Developer.
                </p>
                <div>
                  <a href="#Projects" class="btn btn-primary" id="btn-hero">
                    <span>View My Work</span>
                  </a>
                  <Spline scene="https://prod.spline.design/Wuect47Lqcexw4QM/scene.splinecode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
