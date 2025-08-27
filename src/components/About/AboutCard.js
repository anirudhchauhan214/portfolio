import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anirudh Chauhan </span>
            from <span className="purple"> Mohali, India.</span>
            <br />
            I have completed Bachelors of Science (BSc) in Computer Science from
            Chaudhary Charan Singh University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Motorcycles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Food
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Anirudh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
