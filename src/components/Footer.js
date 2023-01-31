import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";
import artstation from "../assets/img/artstation.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/aftab-s/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/aftab-s"><img src={github} alt="" /></a>
                <a href="https://www.instagram.com/devon_clive__/?hl=en"><img src={navIcon3} alt="" /></a>
                <a href="https://www.artstation.com/aftabs2001"><img src={artstation} alt="" /></a>
            </div>
            <p>Created by - Aftab S under the guidance of WebDecoded</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
