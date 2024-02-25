import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Container className="mt-5 mb-5 about-us">
        <div>
          <div>
            <div className={`text-image-grid`}>
              <div>
                <div className="text-image-grid-title">What is </div>
                <div className="text-image-grid-line"></div>
                <div className="text-image-grid-description">
               
                </div>
              </div>
              <div>
                <img
                  src="about-us.jpg"
                  alt="img"
                  className="text-image-grid-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-image-grid-title">
          </div>
          <div className="text-image-grid-line  mb-4"></div>
          <div className="accordion-container">
            <Accordion className="accordion" defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>9</Accordion.Header>
                <Accordion.Body>
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>5</Accordion.Header>
                <Accordion.Body>
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>7</Accordion.Header>
                <Accordion.Body>
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>4</Accordion.Header>
                <Accordion.Body>
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>1</Accordion.Header>
                <Accordion.Body>
                 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
