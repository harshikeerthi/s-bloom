import React from "react";
import { Link } from "react-router";
import { Layers, FileEdit, Megaphone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "../../components/ScrollReveal";
import "./SolutionsOverviewPage.css";

export const SolutionsOverviewPage: React.FC = () => {
  return (
    <div className="sol-overview-page">
      {/* ====================================================
          1. Hero Section: Aligned Matter (Left) & Full HD Picture (Right)
          ==================================================== */}
      <section className="sol-overview-hero">
        <div className="container">
          <div className="sol-hero-grid">
            {/* Left: Matter / Content */}
            <ScrollReveal delay={0} className="sol-hero-text-col">
              <span className="sol-hero-badge">SOLUTIONS OVERVIEW</span>
              <h1 className="sol-hero-headline">
                A coordinated approach to digital growth.
              </h1>
              <div className="sol-hero-accent-bar" />
              <p className="sol-hero-paragraph">
                We do not believe in one-size-fits-all digital marketing packages.
                Following a thorough diagnosis of your organization's communication
                gaps, we apply the exact combination of foundational building,
                content creation, and targeted promotion required to achieve
                your objectives.
              </p>
              <Link to="/how-it-works" className="sol-hero-cta-btn">
                Learn How We Work
              </Link>
            </ScrollReveal>

            {/* Right: Full HD Graphic perfectly aligned */}
            <ScrollReveal delay={150} className="sol-hero-visual-col">
              <img
                src="/images/solutions/solutions-hero-hd.png"
                alt="Digital growth ecosystem for Education, Healthcare, and Professional Services"
                className="sol-hero-visual-img"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. The Three Pillars (BUILD · CREATE · PROMOTE)
             - Compact, zero dead space, formatted text, identical sizes
          ==================================================== */}
      <section className="sol-cards-section">
        <div className="container">
          <div className="sol-cards-grid">
            {/* Card 1: BUILD */}
            <ScrollReveal delay={100} className="h-full">
              <div className="sol-card">
                <div className="sol-card-top-row">
                  <div className="sol-card-icon-bubble">
                    <Layers size={20} color="#D9A52E" />
                  </div>
                  <div className="sol-card-sparkle">
                    <SparkleBurst />
                  </div>
                </div>

                <h3 className="sol-card-title">BUILD</h3>
                <p className="sol-card-desc">
                  <strong className="sol-card-lead">Make your expertise discoverable.</strong>{" "}
                  <span>We build the digital infrastructure required to make your organization easy to find, navigate, and engage with.</span>
                </p>

                <Link to="/solutions/build" className="sol-card-link">
                  <span>EXPLORE BUILD</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="sol-card-corner-shape" />
              </div>
            </ScrollReveal>

            {/* Card 2: CREATE */}
            <ScrollReveal delay={200} className="h-full">
              <div className="sol-card">
                <div className="sol-card-top-row">
                  <div className="sol-card-icon-bubble">
                    <FileEdit size={20} color="#D9A52E" />
                  </div>
                  <div className="sol-card-sparkle">
                    <SparkleBurst />
                  </div>
                </div>

                <h3 className="sol-card-title">CREATE</h3>
                <p className="sol-card-desc">
                  <strong className="sol-card-lead">Help audiences understand and trust your organization.</strong>{" "}
                  <span>We produce the materials required to explain your true value and approach.</span>
                </p>

                <Link to="/solutions/create" className="sol-card-link">
                  <span>EXPLORE CREATE</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="sol-card-corner-shape" />
              </div>
            </ScrollReveal>

            {/* Card 3: PROMOTE */}
            <ScrollReveal delay={300} className="h-full">
              <div className="sol-card">
                <div className="sol-card-top-row">
                  <div className="sol-card-icon-bubble">
                    <Megaphone size={20} color="#D9A52E" />
                  </div>
                  <div className="sol-card-sparkle">
                    <SparkleBurst />
                  </div>
                </div>

                <h3 className="sol-card-title">PROMOTE</h3>
                <p className="sol-card-desc">
                  <strong className="sol-card-lead">Reach relevant audiences.</strong>{" "}
                  <span>We amplify your presence, putting your organization directly in front of the decision-makers that matter most.</span>
                </p>

                <Link to="/solutions/promote" className="sol-card-link">
                  <span>EXPLORE PROMOTE</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="sol-card-corner-shape" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

/* Radiating 3-ray burst decoration */
const SparkleBurst: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M5 16L1 18" stroke="#D9A52E" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 11L4 4" stroke="#D9A52E" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 8L17 1" stroke="#D9A52E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default SolutionsOverviewPage;
