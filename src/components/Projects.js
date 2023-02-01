import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import GCSB from "../assets/img/Google-Cloud.jpg";
import cisco from "../assets/img/cisco.png";
import Sololearn from "../assets/img/Sololearn.png";

import horizon from "../assets/img/horizon.png";
import sss_22 from "../assets/img/SEDS.png";
import mentor from "../assets/img/mentor.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Battery-Less Wireless Switch",
      description: "Based on Faraday's laws of Electro-Magnetic Induction, we made a wireless switch that does not require a battery to power it.",
      imgUrl: projImg1,
    },
    {
      title: "GSRS - (Adacdemic Mini-Project)",
      description: "GSRS (Gesture Sensing Roboting Vehile) using Arduino.",
      imgUrl: projImg2,
    },
    {
      title: "V-Drive",
      description: "Driving Simulator - Software developed as part of Reboot Kerala Hackathon, 2020. This was created using Unity and Blender.",
      imgUrl: projImg3,
    },
  ];

  const certifications = [
    {
      title: "Create and Manage Cloud Resources",
      description: "Google Cloud Skills Boost",
      imgUrl: GCSB,
    },
    {
      title: "Introduction to Cybersecurity",
      description: "Cisco Networking Academy",
      imgUrl: cisco,
    },
    {
      title: "MySQL",
      description: "Sololearn",
      imgUrl: Sololearn,
    },
  ];

  const works = [
    {
      title: "Team Lead, Horizon",
      description: "The Mars rover team of Cochin University Of Science And Technology.",
      imgUrl: horizon,
    },
    {
      title: "Event Organizer",
      description: "Student Space Summit 2022, an event held as part of SEDS-CUSAT.",
      imgUrl: sss_22,
    },
    {
      title: "Mentor",
      description: "Taught Blender, an opensource 3D modeling software as part of TinkerHub and Horizon.",
      imgUrl: mentor,
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
                <h2>Projects and Additional Works</h2><br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Additional Works</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          certifications.map((certifications, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...certifications}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          works.map((works, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...works}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
