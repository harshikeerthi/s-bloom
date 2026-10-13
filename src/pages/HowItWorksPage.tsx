import React from "react";
import { Search, FileText, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import "./HowItWorksPage.css";

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="hiw-page">
      {/* ====================================================
          1. Hero Section: Strategy first. Execution second.
          ==================================================== */}
      <section className="hiw-hero-section">
        <div className="container">
          <div className="hiw-hero-grid">
            {/* Left: Matter */}
            <ScrollReveal delay={0} className="hiw-hero-text-col">
              <span className="hiw-hero-badge">HOW IT WORKS</span>
              <h1 className="hiw-hero-headline">
                Strategy first. Execution second.
              </h1>
              <div className="hiw-hero-accent-bar" />
              <p className="hiw-hero-paragraph">
                We approach every new client engagement systematically. BUILD,
                CREATE, and PROMOTE are selected according to the diagnosed needs.
              </p>
            </ScrollReveal>

            {/* Right: Full HD Visual Illustration */}
            <ScrollReveal delay={150} className="hiw-hero-visual-col">
              <img
                src="/images/how-it-works/how-it-works-hero-hd.png"
                alt="Systematic strategy and execution methodology"
                className="hiw-hero-visual-img"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. Systematic 5-Step Process with Connecting Timeline
          ==================================================== */}
      <section className="hiw-process-section">
        <div className="container">
          <div className="hiw-timeline-wrapper">
            {/* Horizontal timeline line connecting the step pills */}
            <div className="hiw-timeline-track" aria-hidden="true" />

            <div className="hiw-steps-grid">
              {/* Step 01: UNDERSTAND */}
              <ScrollReveal delay={100} className="hiw-step-item">
                <div className="hiw-step-pill">01</div>
                <div className="hiw-step-icon-bubble">
                  <Search size={22} />
                </div>
                <h3 className="hiw-step-title">UNDERSTAND</h3>
                <p className="hiw-step-desc">
                  We begin by thoroughly understanding your organization, the services
                  you provide, your business goals, your target audiences, and your
                  current digital footprint.
                </p>
              </ScrollReveal>

              {/* Step 02: DIAGNOSE */}
              <ScrollReveal delay={200} className="hiw-step-item">
                <div className="hiw-step-pill">02</div>
                <div className="hiw-step-icon-bubble">
                  <FileText size={22} />
                </div>
                <h3 className="hiw-step-title">DIAGNOSE</h3>
                <p className="hiw-step-desc">
                  We identify the specific communication and visibility gaps
                  preventing your intended audience from discovering, understanding,
                  or evaluating your services.
                </p>
              </ScrollReveal>

              {/* Step 03: STRATEGIZE */}
              <ScrollReveal delay={300} className="hiw-step-item">
                <div className="hiw-step-pill">03</div>
                <div className="hiw-step-icon-bubble">
                  <Lightbulb size={22} />
                </div>
                <h3 className="hiw-step-title">STRATEGIZE</h3>
                <p className="hiw-step-desc">
                  We define clear priorities, audience-specific messaging, the
                  appropriate marketing channels, and measurable objectives.
                </p>
              </ScrollReveal>

              {/* Step 04: EXECUTE */}
              <ScrollReveal delay={400} className="hiw-step-item">
                <div className="hiw-step-pill">04</div>
                <div className="hiw-step-icon-bubble">
                  <Rocket size={22} />
                </div>
                <h3 className="hiw-step-title">EXECUTE</h3>
                <p className="hiw-step-desc">
                  We deploy the precise mix of BUILD, CREATE, and PROMOTE activities
                  required to address the diagnosed gaps.
                </p>
              </ScrollReveal>

              {/* Step 05: MEASURE AND IMPROVE */}
              <ScrollReveal delay={500} className="hiw-step-item">
                <div className="hiw-step-pill">05</div>
                <div className="hiw-step-icon-bubble">
                  <BarChart3 size={22} />
                </div>
                <h3 className="hiw-step-title">MEASURE AND IMPROVE</h3>
                <p className="hiw-step-desc">
                  We continuously review relevant performance indicators, identify
                  what is working, and recommend appropriate improvements to support
                  long-term growth.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
