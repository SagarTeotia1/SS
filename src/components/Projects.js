
import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png"; // New
import projImg8 from "../assets/img/project-img8.png"; // New
import projImg9 from "../assets/img/project-img9.png"; // New
import projImg10 from "../assets/img/project-img10.png"; // New
import projImg11 from "../assets/img/project-img11.png"; // New
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const webProjects = [       //webinar
    {
      title: "STARTUP AND MARKETING",
      description: "By Guari Joshi",
      imgUrl: projImg10,
    },
    {
      title: "HOW TO BUILD A STARTUP",
      description: "By Sarthak Mittal",
      imgUrl: projImg5,
    },
    {
      title: "MARKETING & STARTUP", // New project
      description: "By Sarah Nitin Rawat",
      imgUrl: projImg6,
    },
  ];

  const mobileProjects = [ // Competitions
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
    {
      title: "INVEST FUSION",
      description: "Trading Competition",
      imgUrl: projImg4,
    },
    {
      title: "INTERNSHIP FAIR",
      description: "Symposium : Socio-Economic Enterpreneurial Competition",
      imgUrl: projImg7,
    },
    {
      title: "CASE STUDY COMPETITION", // New project
      description: "Innovate , Compete & Excel",
      imgUrl: projImg8,
    },
  ];

  const ecommerceProjects = [       //Summits
    {
      title: "SIH BOOTCAMP - JIIT", // New project
      description: "Pichathon Organised By AICTC",
      imgUrl: projImg9,
    },
    {
      title: "Indian Institute Of Technology Delhi", // New project
      description: "Society Summit Organised By IITD",
      imgUrl: projImg11,
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
                      <Nav.Link eventKey="second">Competitions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Summits</Nav.Link>
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
