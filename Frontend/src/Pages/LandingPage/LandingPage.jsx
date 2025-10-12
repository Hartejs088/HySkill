import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: document.getElementById("why-hyskill").offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/assets/images/1.png"
          alt="Decor left"
          className="hero-img left-img"
          style={{ transform: `translateX(${scrollY * 0.2}px)` }}
        />
        <div className="hero-title-box">
          <h1 className="hero-title">
            Hy<span>Skill</span>
          </h1>
          <p className="hero-subtitle">
            Learn. Share. Grow — Together.
          </p>
          <button onClick={handleButtonClick} className="hero-btn">
            Why HySkill?
          </button>
        </div>
        <img
          src="/assets/images/2.png"
          alt="Decor right"
          className="hero-img right-img"
          style={{ transform: `translateX(-${scrollY * 0.2}px)` }}
        />
      </section>

      {/* Why Section */}
      <section id="why-hyskill" className="why-section">
        <h2>Why Choose <span>HySkill</span>?</h2>
        <div className="why-content">
          <p>
            <strong>HySkill</strong> is an AI-powered collaborative learning platform
            where students and tutors connect to teach, learn, and earn.
            Experience an ecosystem designed for modern learners — flexible,
            intelligent, and community-driven.
          </p>

          <div className="why-points">
            <div className="why-card">
              <h4>1️⃣ Learn from Verified Tutors</h4>
              <p>
                Gain real-world skills from experienced mentors through live classes,
                interactive sessions, and detailed feedback.
              </p>
            </div>

            <div className="why-card">
              <h4>2️⃣ Share & Earn</h4>
              <p>
                Teach what you love and get recognized. Set class fees, share your
                expertise, and help others grow while you earn.
              </p>
            </div>

            <div className="why-card">
              <h4>3️⃣ Smart AI Matching</h4>
              <p>
                HySkill’s AI system recommends tutors and courses based on your
                interests, progress, and learning behavior.
              </p>
            </div>

            <div className="why-card">
              <h4>4️⃣ Analytics Dashboard</h4>
              <p>
                Track your progress, upcoming sessions, and ratings with visual
                graphs — all in a beautiful dashboard.
              </p>
            </div>

            <div className="why-card">
              <h4>5️⃣ Learn Anywhere, Anytime</h4>
              <p>
                Access live or recorded sessions, downloadable notes, and reminders
                to never miss a class — all at your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
