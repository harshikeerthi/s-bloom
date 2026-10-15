import React from 'react';
import { Link } from 'react-router';
import { BookOpen, Pencil, Check, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import './DualPathCards.css';

export const DualPathCards: React.FC = () => {
  return (
    <section className="dual-path-section">
      {/* Background Soft Glow Effect */}
      <div className="dual-path-ambient-glow" aria-hidden="true" />

      {/* Subtle Flowing Golden & Champagne Background Curves */}
      <div className="dual-path-curves-layer" aria-hidden="true">
        <svg
          className="dual-path-curves-svg"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dpWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2D0B6" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#EDE0CA" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#E2D0B6" stopOpacity="0.38" />
            </linearGradient>
            <linearGradient id="dpWave2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFCDAE" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#EAD8BD" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E2D0B6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M-40,160 C320,80 800,280 1480,140"
            stroke="url(#dpWave1)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M-40,240 C380,160 840,360 1480,220"
            stroke="url(#dpWave2)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M-40,740 C440,640 920,810 1480,690"
            stroke="url(#dpWave1)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative Sparkles Layer */}
      <div className="dual-path-sparkles-layer" aria-hidden="true">
        <span className="dual-path-sparkle-star dp-sparkle-top-left-main">✦</span>
        <span className="dual-path-sparkle-dot dp-sparkle-top-left-dot" />
        <span className="dual-path-sparkle-star dp-sparkle-right-main">✦</span>
        <span className="dual-path-sparkle-dot dp-sparkle-right-dot" />
      </div>

      <div className="dual-path-container">
        {/* Top Centered Header Section */}
        <ScrollReveal delay={0}>
          <div className="dual-path-header">
            <h2 className="dual-path-title">
              How can <span className="title-highlight-gold">S-Bloom</span> help you grow?
            </h2>
            <p className="dual-path-subtitle">
              Different goals. Tailored digital strategies.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Path Choice Cards Grid */}
        <div className="dual-path-grid">
          {/* Card 1: sBLOOM for Business */}
          <ScrollReveal delay={100} style={{ height: '100%' }}>
            <div className="dual-path-card dual-path-card-business">
              <div>
                {/* Header: Icon + Title */}
                <div className="dual-path-card-header">
                  <div className="dual-path-icon-box dual-path-icon-business">
                    <BookOpen size={21} strokeWidth={2} />
                  </div>
                  <h3 className="dual-path-card-title">sBLOOM for Business</h3>
                </div>

                {/* Description */}
                <p className="dual-path-card-desc">
                  Build your online presence, strengthen credibility, and reach the right audience.
                </p>

                {/* Feature Points */}
                <ul className="dual-path-feature-list">
                  <li className="dual-path-feature-item">
                    <span className="dual-path-check-badge dual-path-check-business">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="dual-path-feature-text">SEO and Google visibility</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <span className="dual-path-check-badge dual-path-check-business">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="dual-path-feature-text">Websites and social media</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <span className="dual-path-check-badge dual-path-check-business">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="dual-path-feature-text">Digital marketing and ads</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Button */}
              <Link to="/contact" className="dual-path-card-btn">
                <span>Grow Your Business</span>
                <ArrowRight size={16} strokeWidth={2.2} className="btn-arrow" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Creative Workspace */}
          <ScrollReveal delay={200} style={{ height: '100%' }}>
            <div className="dual-path-card dual-path-card-creative">
              <div>
                {/* Header: Icon + Title */}
                <div className="dual-path-card-header">
                  <div className="dual-path-icon-box dual-path-icon-creative">
                    <Pencil size={21} strokeWidth={2} />
                  </div>
                  <h3 className="dual-path-card-title">Creative Workspace</h3>
                </div>

                {/* Description */}
                <p className="dual-path-card-desc">
                  Build your personal brand, showcase your work, and attract better opportunities.
                </p>

                {/* Feature Points */}
                <ul className="dual-path-feature-list">
                  <li className="dual-path-feature-item">
                    <span className="dual-path-check-badge dual-path-check-creative">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="dual-path-feature-text">Personal branding</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <span className="dual-path-check-badge dual-path-check-creative">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="dual-path-feature-text">Portfolio and online presence</span>
                  </li>
                  <li className="dual-path-feature-item">
                    <span className="dual-path-check-badge dual-path-check-creative">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="dual-path-feature-text">Content and audience growth</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Button */}
              <Link to="/creative-workspace" className="dual-path-card-btn">
                <span>Build Your Presence</span>
                <ArrowRight size={16} strokeWidth={2.2} className="btn-arrow" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DualPathCards;
