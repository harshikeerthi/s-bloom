import React from "react";
import { Target, Users } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import "./AboutPage.css";

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* ====================================================
          1. Hero Section: Closing the gap between expertise and understanding
          ==================================================== */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left: Matter */}
            <ScrollReveal delay={0} className="about-hero-text-col">
              <span className="about-hero-badge">ABOUT S-BLOOM</span>
              <h1 className="about-hero-headline">
                Closing the gap between expertise and understanding.
              </h1>
              <div className="about-hero-accent-bar" />
              <p className="about-hero-paragraph">
                S-Bloom was built to solve a specific problem: Expertise-led
                organizations—whether in healthcare, education, or professional
                consulting—do exceptional work, but often struggle to communicate
                their true value to the people who need them most.
              </p>
            </ScrollReveal>

            {/* Right: Full HD Graphic */}
            <ScrollReveal delay={150} className="about-hero-visual-col">
              <img
                src="/images/about/about-hero-hd.png"
                alt="Digital growth and trust across Healthcare, Education, and Professional Services"
                className="about-hero-visual-img"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. Strategy-Led Approach & Model (2 Equal Cards)
          ==================================================== */}
      <section className="about-cards-section">
        <div className="container">
          <div className="about-cards-grid">
            {/* Card 1: Our Strategy-Led Approach */}
            <ScrollReveal delay={100} className="h-full">
              <div className="about-card">
                <div className="about-card-header">
                  <div className="about-card-icon-bubble">
                    <Target size={24} />
                  </div>
                  <div className="about-card-title-group">
                    <h2 className="about-card-title">Our Strategy-Led Approach</h2>
                    <div className="about-card-accent-bar" />
                  </div>
                </div>
                <p className="about-card-text">
                  We believe that high-stakes decisions require a different
                  marketing approach. Generic digital packages and superficial
                  metrics don't build trust for expertise-led services. Instead,
                  we advocate for audience-centric marketing. We study how your
                  patients, students, or B2B clients actually discover, evaluate,
                  and choose a provider, and we build your digital strategy
                  around that journey.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Our Model */}
            <ScrollReveal delay={200} className="h-full">
              <div className="about-card">
                <div className="about-card-header">
                  <div className="about-card-icon-bubble">
                    <Users size={24} />
                  </div>
                  <div className="about-card-title-group">
                    <h2 className="about-card-title">Our Model</h2>
                    <div className="about-card-accent-bar" />
                  </div>
                </div>
                <p className="about-card-text">
                  By utilizing a core strategic team alongside a curated network of
                  specialized creative partners, we ensure that every client
                  receives high-level strategy backed by expert execution.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
