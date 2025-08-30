import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gaply"
              description="Gaply is a consultancy tool which assess your client's requirement and based on that sends them an assessment. Based on that assessment we further generates an report automatically for client. Users can view the activity feed dashboard and their current assessment."
              demoLink="https://gaply.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TMP (Multi Tenant Platform)"
              description="Worked as a backend developer in nest.js with a team of 25 persons. Handled backend for panel with multiple user roles, DB architecture in Postgres. Used typescript with nest.js with multiple AWS services like s3, OpenSearch, secrets manager, Cognito etc"
              demoLink="null"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Custom Chatbot Assistant"
              description="Created a chatbot using OpenAI API and Langchain.js with custom data learning from text, PDFs, and website URLs. Utilized Puppeteer for web crawling to gather URLs and text content, training the chatbot with the collected data. Incorporated data training from LinkedIn and Facebook. Supported real-time chat with human operators using Socket.ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weslides"
              description="Created a web app which creates multiple slides presentation of given topic using OpenAI API. Also had options to export as a pdf, txt and doc. Stripe payment method with membership."
              demoLink="https://weslides.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
