import React from "react";
import "./AboutUs.css";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "80px 10%",
  backgroundColor: "#ffffffff",
  color: "#000000ff",
  minHeight: "80vh",
  gap: "40px",
  flexWrap: "wrap",
};

const contentContainerStyle = {
  flex: "1 1 500px",
  maxWidth: "600px",
};

const titleStyle = {
  fontFamily: "'Oswald', sans-serif",
  color: "#FFD700",
  fontSize: "3rem",
  fontWeight: "700",
  marginBottom: "20px",
};

const descriptionStyle = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "#444444ff",
  marginBottom: "20px",
};

const imageStyle = {
  flex: "1 1 400px",
  maxWidth: "500px",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
};

const AboutUs = () => {
  return (
    <section style={containerStyle}>
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>About HySkill</h2>
        <p style={descriptionStyle}>
          <i>
            HySkill is a modern skill-sharing platform designed to connect learners and educators. Our mission is to
            provide a space where acquiring new skills is accessible, interactive, and engaging for everyone.
          </i>
        </p>
        <p style={descriptionStyle}>
          At HySkill, we believe in the power of collaborative learning. Tutors can create courses, conduct live sessions,
          and provide valuable insights, while learners can explore courses, track progress, and receive personalized
          recommendations. With AI-powered features, analytics dashboards, and a supportive community, HySkill fosters
          growth, innovation, and continuous learning.
        </p>
        <p style={descriptionStyle}>
          Our goal is to empower individuals to unlock their full potential by sharing knowledge, networking with skilled
          professionals, and gaining practical skills for the real world. Join HySkill to learn, teach, and thrive
          together in a professional, interactive environment.
        </p>
      </div>
      <div>
        <img
          src={"/assets/images/aboutus.jpg"}
          alt="HySkill Learning Platform"
          style={imageStyle}
        />
      </div>
    </section>
  );
};

export default AboutUs;
