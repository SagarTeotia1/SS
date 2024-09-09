import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"; // Import new image
import projImg5 from "../assets/img/project-img5.png"; // Import new image
import projImg6 from "../assets/img/project-img6.png"; // Import new image
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import React, { useEffect } from 'react';




export const Projects = () => {

  const projects = [
    {
      title: "SYMPOSIUM",
      description: "2 May 2024",
      imgUrl: projImg1,
    },
    {
      title: "FISH TANK",
      description: "24 April 2024",
      imgUrl: projImg2,
    },
    {
      title: "ROUND TABLE CONFERENCE",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "INVEST FUSION", // New project title
      description: "25 April 2024",
      imgUrl: projImg4,
    },
    {
      title: "HOW TO BUILD STARTUP", // New project title
      description: "28 March 2024",
      imgUrl: projImg5,
    },
    {
      title: "MARKETING & STARTUP", // New project title
      description: "22 Octuber 2023",
      imgUrl: projImg6,
    }
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Design & UX</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => (
                            <Col key={index} sm={6} md={4}>
                              <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                              />
                            </Col>
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Explore various web development projects that showcase innovative solutions and cutting-edge technologies.</p>
                      <Row>
                        {/* Filter and display web development-related projects here */}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Discover creative design and UX projects that emphasize user experience and visual aesthetics.</p>
                      <Row>
                        {/* Filter and display design & UX-related projects here */}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}