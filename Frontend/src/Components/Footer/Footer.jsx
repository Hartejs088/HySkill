import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa", // light background
        color: "#333", // dark text for contrast
        padding: "40px 20px",
        borderTop: "1px solid #e0e0e0",
        marginTop: "50px",
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-3">
      
      
            <h5 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1.5rem",color:"blue" }}>
              HySkill
            </h5>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", marginTop: "10px" }}>
              HySkill connects learners and educators, enabling skill-sharing through interactive online courses,
              personalized recommendations, and a supportive learning community.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h6 style={{ fontWeight: 800, marginBottom: "10px" }}>Quick Links</h6>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "0.95rem" }}>
              <li><a href="/" style={{ color: "#7a7979ff", textDecoration: "none" }}>Home</a></li>
              <li><a href="/discover" style={{ color: "#7a7979ff", textDecoration: "none" }}>Discover</a></li>
              <li><a href="/about_us" style={{ color: "#7a7979ff", textDecoration: "none" }}>About Us</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6 style={{ fontWeight: 600, marginBottom: "10px" }}>Follow Us</h6>
            <div style={{ display: "flex", gap: "15px", fontSize: "1.2rem" }}>
              <a href="#" style={{ color: "#4037efff" }}><FaFacebookF /></a>
              <a href="#" style={{ color: "#0091ffff" }}><FaTwitter /></a>
              <a href="#" style={{ color: "#1b078dff" }}><FaLinkedinIn /></a>
              <a href="#" style={{ color: "#c6065cff" }}><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: "#e0e0e0" }} />
        <Row>
          <Col className="text-center">
            <small style={{ fontFamily: "'Montserrat', sans-serif" }}>
              &copy; 2025 HySkill. All Rights Reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
