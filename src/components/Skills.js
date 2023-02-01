import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { TabContainer } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { Tab, Nav } from "react-bootstrap";
import React from "react";

export const Skills = () => {
  const [activeTab, setActiveTab] = React.useState("technical");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2><br></br>
              <TrackVisibility as={TabContainer}>
                <Tab.Container id="skills-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link
                        eventKey="first"
                        onClick={() => setActiveTab("technical")}
                      >
                        Technical
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
                        onClick={() => setActiveTab("non-technical")}
                      >
                        Non-Technical
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="owl-carousel owl-theme skill-slider"
                      >
                        <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>3D Design</h5>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>C/C++</h5>
                        </div>
                        <div className="item">
                          <img src={meter3} alt="Image" />
                          <h5>MySQL</h5>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>LINUX</h5>
                          <br></br>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>Python</h5>
                          <br></br>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="owl-carousel owl-theme skill-slider"
                      >
                        <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>Public Speaking</h5>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>Quick Learner</h5>
                        </div>
                        <div className="item">
                          <img src={meter3} alt="Image" />
                          <h5>Engaging Presenter</h5>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>Communication Skills</h5>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
