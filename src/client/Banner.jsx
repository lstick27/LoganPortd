import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "./header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from "react-on-screen";

 const Banner = () => {

  const [loopNum, setLoopNum] = useState(0); // To cycle through phrases
  const [isDeleting, setIsDeleting] = useState(false); // Text is being deleted
  const [delta, setDelta] = useState(100); // Reduces the speed of typing
  const [text, setText] = useState(''); // Holds the text to be displayed
  const [index, setIndex] = useState(1); // Tracks the index of phrases
  const toRotate = ["3D Print Designer", "Video Gamer", "NS Student"];// Phrases to rotate over
  const period = 10000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I\'m Logan`} <span className="txt-rotate" data-period="1000" data-rotate='["Web-Developer", "UI/UX Designer", "Web-Designer"]'><span className="wrap">{text}</span></span>
                  </h1>
                  <p>
                    I design things for 3D printing, and play lots of games, while being a NS Student. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of Cicero's *De Finibus Bonorum et Malorum* for use in a type specimen book.
                  </p>
                  <button onClick={() => console.log('Connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
