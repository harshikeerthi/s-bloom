import React from 'react';
import { Link } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';
import { DigitalGrowthSystem } from '../components/home/DigitalGrowthSystem';
import { HeroFloatingIcons } from '../components/home/HeroFloatingIcons';
import { HeroSubtleCurves } from '../components/home/HeroSubtleCurves';
import { DualPathCards } from '../components/home/DualPathCards';
import { BottomCornerScrollShowcase } from '../components/home/BottomCornerScrollShowcase';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* SECTION 1 - Hero (Final Master Implementation) */}
      <section className="hero-final-section">
        {/* Elegant, Seamless Vector Silk Wave Layer at the Bottom */}
        <div className="hero-bottom-silk-wrapper" aria-hidden="true">
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="hero-bottom-silk-svg"
          >
            <defs>
              <linearGradient id="silkFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5ECE0" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#EADBCC" stopOpacity="0.75" />
                <stop offset="70%" stopColor="#F8F3EC" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#E6D5C3" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="silkFlow2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EDE2D3" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FBF8F2" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#DFCDB8" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Deep Silk Flow Layer */}
            <path
              d="M 0,60 Q 360,140 720,70 T 1440,90 L 1440,180 L 0,180 Z"
              fill="url(#silkFlow1)"
            />
            {/* Sheen Highlight Fold */}
            <path
              d="M 0,95 Q 380,40 760,110 T 1440,65 L 1440,180 L 0,180 Z"
              fill="url(#silkFlow2)"
            />
            {/* Silky Edge Sheen Line */}
            <path
              d="M 0,95 Q 380,40 760,110 T 1440,65"
              stroke="url(#silkSheen)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Delicate Golden Orbital Curves & Tiny Gliding Sparkles (Behind Icons) */}
        <HeroSubtleCurves />

        <div className="hero-final-container">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-final-content">
            <div className="hero-final-eyebrow">
              <span className="eyebrow-text">DIGITAL GROWTH PARTNER</span>
              <span className="eyebrow-line" />
            </div>

            <h1 className="hero-final-title">
              We will help you<br />
              <span className="hero-mocha-gold">bloom socially.</span>
            </h1>

            <p className="hero-final-desc">
              Build digital authority, trust, and growth for a growing community of expertise-led businesses.
            </p>

            <div className="hero-final-buttons">
              <Link to="/contact" className="btn-final-primary">
                <span>Talk to sBLOOM</span>
                <svg className="btn-arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/solutions" className="btn-final-secondary">
                See How We Help
              </Link>
            </div>
          </div>

          {/* Right Column: Freely Floating Symbols (No Square Containers, Independent Motions) */}
          <div className="hero-final-showcase">
            <HeroFloatingIcons />
          </div>
        </div>
      </section>

      {/* SECTION 2 - Dual Paths */}
      <DualPathCards />

      {/* LOWER LUXURY SILK WRAPPER - Continuous Uninterrupted Background Canvas */}
      <div className="home-lower-silk-wrapper">
        {/* SECTION 4 - What sBLOOM Changes */}
        <DigitalGrowthSystem />

        {/* SECTION 10 - Final CTA */}
        <section className="home-final-cta-section">
          <div className="container">
            <ScrollReveal delay={0}>
              <h2 className="home-final-cta-title">Your business has potential. Let’s help the right people see it.</h2>
              <div className="home-final-cta-btn-wrap">
                <Link to="/contact" className="home-final-cta-btn">
                  <span>Talk to sBLOOM</span>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
<<<<<<< HEAD
          <div style={{ flex: '1', minWidth: '300px' }}>
            <ScrollReveal delay={150}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Strategy before execution.', 'An approach shaped around the business.', 'The right capabilities for the work.', 'One connected approach to digital growth.'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--dark-border)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 7 - How We Work */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal delay={0}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px' }}>A clear plan. The right people. Work that moves you forward.</h2>
          </ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
            {['Understand', 'Plan', 'Assemble', 'Deliver', 'Improve'].map((step, i) => (
              <ScrollReveal delay={100 * i} key={step} style={{ textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)', color: 'var(--dark-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontWeight: 'bold' }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: '1.2rem' }}>{step}</h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 9 - Brand Philosophy */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--dark-bg-secondary)', color: 'var(--gold-primary)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal delay={0}>
            <h2 style={{ fontSize: '3rem', letterSpacing: '4px', textTransform: 'uppercase' }}>Believe <span style={{ color: 'var(--bg-primary)' }}>→</span> Begin <span style={{ color: 'var(--bg-primary)' }}>→</span> Become</h2>
          </ScrollReveal>
        </div>
      </section>


      {/* SECTION 10 - Final CTA */}
      <section style={{ padding: '50px 0 40px', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal delay={0}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Your business has potential. Let’s help the right people see it.</h2>
            <div style={{ marginTop: '40px' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Talk to sBLOOM</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
=======
        </section>
      </div>
>>>>>>> origin/main

      {/* Interactive Bottom-Right Corner Scroll Pipeline: Camera ➔ Reel ➔ Post ➔ Ad ➔ Website ➔ Video */}
      <BottomCornerScrollShowcase />
    </div>
  );
};

export default HomePage;
