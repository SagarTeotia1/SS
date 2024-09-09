import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const webProjects = [       //webinars
    {
      title: "Symposium",
      description: "Rotaract Club Event",
      imgUrl: projImg1,
    },
    {
      title: "Fish Tank",
      description: "Startup Pitch Competition",
      imgUrl: projImg2,
    },
    {
      title: "Round Table Conference",
      description: "Startup Ideas Event",
      imgUrl: projImg3,
    },
  ];

  const mobileProjects = [ // Competitions
    {
      title: "Mobile App 1",
      description: "Innovative Mobile Solution",
      imgUrl: projImg2,
    },
    {
      title: "Mobile App 2",
      description: "User-Friendly Interface",
      imgUrl: projImg3,
    },
    {
      title: "Mobile App 3",
      description: "Cross-Platform Development",
      imgUrl: projImg1,
    },
  ];

  const ecommerceProjects = [       //Summits
    {
      title: "E-commerce Platform",
      description: "Online Retail Solution",
      imgUrl: projImg3,
    },
    {
      title: "Payment Gateway",
      description: "Secure Transaction System",
      imgUrl: projImg1,
    },
    {
      title: "Inventory Management",
      description: "Efficient Stock Control",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Events</h2>
                <p>Explore Events of Startupsphere!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Webinars</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Competition</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">summits</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {webProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {mobileProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {ecommerceProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};