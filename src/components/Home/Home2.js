import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {" "}
              BUILDING <span className="purple">DIGITAL EXPERIENCES</span> WITH
              PASSION{" "}
            </h1>{" "}
            <p className="home-about-body">
              {" "}
              Welcome! I’m a Full Stack Developer dedicated to crafting
              high-performance web applications and deploying robust cloud
              solutions.
              <br /> <br /> From architecting scalable backend systems with{" "}
              <b className="purple">Nest.js, Node.js, and MongoDB</b> to
              perfecting UI/UX with <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>, I thrive on solving challenges
              and bringing ideas to life. <br />
              <br /> My experience spans{" "}
              <b className="purple">CI/CD automation</b>,{" "}
              <b className="purple">Docker & AWS</b> cloud setups, and AI-driven
              features. I build tools and libraries that power product teams,
              streamline deployment, and help transform ambitious concepts into
              reality. <br />
              <br /> Let’s innovate together—you’ll often find me experimenting
              with{" "}
              <b className="purple">
                new frameworks, AI solutions, and efficient workflows
              </b>{" "}
              to push boundaries and deliver meaningful results.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anirudhchauhan214"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anirudh-chauhan-b99a03164/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anirudh_chauhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
