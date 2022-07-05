import { Image } from 'react-bootstrap';
import './hero.css';
import Clouds from 'vanta/dist/vanta.clouds.min';
import { useEffect, useRef, useState } from 'react';

export default function Hero(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Clouds({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          skyColor: 0x50505,
          cloudColor: 0x2a2a3e,
          cloudShadowColor: 0x4671d2,
          sunColor: 0xffffff,
          sunGlareColor: 0xfa,
          sunlightColor: 0x13ff
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
        <div className="container hero" id="Home">
          <div className="row">
            <div className="col-12 mt-4 pt-4 fs-1">
              <div className="text-center text-light" id="hero-text">
                <p>
                  Hello, I'm&nbsp;&nbsp;
                  <span id="fancy-text-hero">Brian Mojica</span>
                  <br />
                  I'm a Full-Stack Web Developer.
                </p>
                  <div className="wrapper">
                    <Image 
                  src={require('../../assets/images/me.png')}
                  fluid />
                  </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
