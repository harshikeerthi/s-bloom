import React, { useState } from "react";
import { Link } from "react-router";
import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Search, 
  FileText, 
  Megaphone,
  Heart,
  TrendingUp,
  Sparkles,
  Award
} from "lucide-react";
import "./HealthcarePage.css";

export const HealthcarePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    orgName: "",
    email: "",
    phone: "",
    industry: "Healthcare",
    marketingChallenge: "",
    businessGoals: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById("strategy-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="health-page">
      {/* ----------------------------------------------------
          1. Hero Section
          ---------------------------------------------------- */}
      <section className="health-hero">
        <div className="health-hero-ambient" />
        <div className="container">
          <div className="health-hero-grid">
            <div className="health-hero-content">
              <span className="health-hero-eyebrow">SBLOOM — HEALTHCARE</span>
              <h1 className="health-hero-title">
                Digital growth<br />for healthcare.
              </h1>
              <p className="health-hero-desc">
                We help expertise-led hospitals, clinics, doctors, and wellness brands close the gap between their clinical excellence and what patients understand about them.
              </p>
              
              <div className="health-hero-ctas">
                <button 
                  type="button" 
                  onClick={scrollToForm}
                  className="btn-health-primary"
                >
                  Get a Free Consultation <ArrowRight size={18} />
                </button>
                <button 
                  type="button" 
                  onClick={() => setVideoModalOpen(true)}
                  className="btn-health-secondary"
                >
                  <span className="play-icon"><Play size={12} fill="currentColor" /></span>
                  Watch Our Story
                </button>
              </div>
            </div>

            <div className="health-hero-visual">
              <div className="health-hero-image-wrap">
                <img 
                  src="/images/healthcare/hero-doctor.jpg" 
                  alt="Healthcare Medical Doctor" 
                />
                <div className="health-hero-aura-card">
                  <div className="health-hero-aura-icon">
                    <Award size={20} />
                  </div>
                  <div className="health-hero-aura-text">
                    <h4>Clinical Authority</h4>
                    <p>Verified Healthcare Strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="health-stats-strip">
            <div className="health-stat-col">
              <div className="health-stat-num">500+</div>
              <div className="health-stat-label">Healthcare Brands</div>
            </div>
            <div className="health-stat-col">
              <div className="health-stat-num">3+</div>
              <div className="health-stat-label">Years of Experience</div>
            </div>
            <div className="health-stat-col">
              <div className="health-stat-num">1000+</div>
              <div className="health-stat-label">Campaigns Delivered</div>
            </div>
            <div className="health-stat-col">
              <div className="health-stat-num">95%</div>
              <div className="health-stat-label">Client Retention</div>
            </div>
          </div>

          {/* 3 Value Pillars */}
          <div className="health-pillars-grid">
            <div className="health-pillar-card">
              <div className="health-pillar-icon">
                <Heart size={24} />
              </div>
              <h3 className="health-pillar-title">More Patients</h3>
              <p className="health-pillar-desc">
                Increase visibility and trust in your community.
              </p>
            </div>

            <div className="health-pillar-card">
              <div className="health-pillar-icon">
                <Calendar size={24} />
              </div>
              <h3 className="health-pillar-title">More Appointments</h3>
              <p className="health-pillar-desc">
                Turn awareness into measurable growth.
              </p>
            </div>

            <div className="health-pillar-card">
              <div className="health-pillar-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 className="health-pillar-title">Stronger Brand</h3>
              <p className="health-pillar-desc">
                Position your hospital or clinic as a trusted leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. Trust & Urgency Section
          ---------------------------------------------------- */}
      <section className="health-trust-section">
        <div className="container">
          <div className="health-trust-grid">
            <div className="health-trust-text-col">
              <span className="health-hero-eyebrow">SBLOOM — HEALTHCARE</span>
              <h2 className="health-trust-title">
                Healthcare decisions are built on trust and urgency.
              </h2>
              <p className="health-trust-desc">
                When patients seek medical care, they are often anxious or in urgent need. They evaluate your organization based on the qualifications of your doctors, clear explanations of treatments, and the perceived safety of your facilities. Our marketing approach respects this journey by prioritizing trust, empathy, and easy access to information.
              </p>
            </div>

            <div className="health-trust-image-col">
              <div className="health-trust-image-card">
                <img 
                  src="/images/healthcare/consultation.jpg" 
                  alt="Doctor and Patient Consultation" 
                />
              </div>
            </div>
          </div>

          {/* 3 Trust Action Cards */}
          <div className="health-trust-actions-grid">
            <div className="health-trust-action-card">
              <div className="health-trust-action-icon">
                <ShieldCheck size={24} />
              </div>
              <span className="health-trust-action-label">Build Patient Trust</span>
            </div>

            <div className="health-trust-action-card">
              <div className="health-trust-action-icon">
                <Users size={24} />
              </div>
              <span className="health-trust-action-label">Improve Communication</span>
            </div>

            <div className="health-trust-action-card">
              <div className="health-trust-action-icon">
                <Calendar size={24} />
              </div>
              <span className="health-trust-action-label">Drive More Appointments</span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. Authority & Compliance Section
          ---------------------------------------------------- */}
      <section className="health-authority-section">
        <div className="container">
          <div className="health-authority-grid">
            <div className="health-authority-text-col">
              <h2 className="health-authority-title">
                Balancing clinical authority with approachability.
              </h2>
              <p className="health-authority-desc">
                Healthcare organizations face strict compliance regulations and the challenge of managing local reputation. Flashy, transactional ads can damage a clinic's credibility. We ensure your digital presence is professional, compliant, and highly visible to those actively seeking care.
              </p>

              <div className="health-authority-checklist">
                <div className="health-check-item">
                  <div className="health-check-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="health-check-text">
                    Professional and credible digital presence
                  </span>
                </div>

                <div className="health-check-item">
                  <div className="health-check-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="health-check-text">
                    Compliant with industry regulations
                  </span>
                </div>

                <div className="health-check-item">
                  <div className="health-check-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="health-check-text">
                    Highly visible to those actively seeking care
                  </span>
                </div>
              </div>
            </div>

            <div className="health-authority-visual-col">
              <div className="health-authority-visual">
                <img 
                  src="/images/healthcare/clinic-corridor.jpg" 
                  alt="Care Connects People - Modern Clinic Corridor" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. Our Approach applied to Healthcare
          ---------------------------------------------------- */}
      <section className="health-approach-section">
        <div className="container">
          <div className="health-approach-header">
            <h2 className="health-approach-title">
              Our Approach applied to Healthcare
            </h2>
          </div>

          <div className="health-approach-cards-list">
            {/* BUILD */}
            <div className="health-approach-row-card">
              <div className="health-approach-thumb">
                <img 
                  src="/images/healthcare/approach-build.jpg" 
                  alt="SEO and Digital Presence for Healthcare" 
                />
              </div>
              <div className="health-approach-body">
                <div className="health-approach-tag-row">
                  <div className="health-approach-icon-circle">
                    <Search size={20} />
                  </div>
                  <span className="health-approach-label-text">BUILD</span>
                </div>
                <p className="health-approach-desc-text">
                  We focus heavily on hyper-local SEO and Google Business Profile optimization so patients find you exactly when they search for care "near me."
                </p>
              </div>
            </div>

            {/* CREATE */}
            <div className="health-approach-row-card">
              <div className="health-approach-thumb">
                <img 
                  src="/images/healthcare/approach-create.jpg" 
                  alt="Patient Education Content Creation" 
                />
              </div>
              <div className="health-approach-body">
                <div className="health-approach-tag-row">
                  <div className="health-approach-icon-circle">
                    <FileText size={20} />
                  </div>
                  <span className="health-approach-label-text">CREATE</span>
                </div>
                <p className="health-approach-desc-text">
                  We develop patient education content and physician Q&As that build clinical authority while remaining empathetic and easy to understand.
                </p>
              </div>
            </div>

            {/* PROMOTE */}
            <div className="health-approach-row-card">
              <div className="health-approach-thumb">
                <img 
                  src="/images/healthcare/approach-promote.jpg" 
                  alt="High-Intent Google Ads for Healthcare" 
                />
              </div>
              <div className="health-approach-body">
                <div className="health-approach-tag-row">
                  <div className="health-approach-icon-circle">
                    <Megaphone size={20} />
                  </div>
                  <span className="health-approach-label-text">PROMOTE</span>
                </div>
                <p className="health-approach-desc-text">
                  We deploy high-intent Google Search Ads capturing patients actively seeking specific treatments or urgent care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. Ready to Grow CTA Banner & Clinic Showcase
          ---------------------------------------------------- */}
      <section className="health-cta-banner-section">
        <div className="health-cta-banner-content">
          <h2 className="health-cta-banner-title">
            Ready to grow your digital presence?
          </h2>
          <button 
            type="button" 
            onClick={scrollToForm}
            className="btn-health-dark"
          >
            Request a Healthcare Strategy Consultation <span className="arrow">→</span>
          </button>
        </div>

        <div className="health-showcase-photo-container">
          <div className="health-showcase-photo-frame">
            <img 
              src="/images/healthcare/waiting-lounge.jpg" 
              alt="Better Care Brighter Communities - Serene Clinic Lounge" 
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          6. Strategy Request / Consultation Form Section
          ---------------------------------------------------- */}
      <section className="health-form-section" id="strategy-form">
        <div className="container">
          <div className="health-form-grid">
            <div className="health-form-left">
              <span className="health-form-eyebrow">STRATEGY REQUEST</span>
              <h2 className="health-form-headline">
                Let's discuss your digital growth.
              </h2>
              <p className="health-form-desc">
                Tell us about your organization and what you are trying to achieve. We'll help you diagnose the gaps and find the right strategic starting point.
              </p>

              <div className="health-form-desk-image">
                <img 
                  src="/images/healthcare/desk-stethoscope.jpg" 
                  alt="Clinical Digital Strategy Stethoscope and Laptop" 
                />
              </div>
            </div>

            <div className="health-form-right">
              <div className="health-form-card">
                {submitted ? (
                  <div className="health-form-success">
                    <CheckCircle2 size={44} style={{ margin: "0 auto 16px" }} />
                    <h3>Thank you for reaching out!</h3>
                    <p>
                      Our healthcare digital strategy specialists have received your inquiry. We will analyze your organization and contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="health-form-group">
                      <label className="health-form-label" htmlFor="fullName">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        className="health-form-input" 
                        placeholder="Dr. Sarah Jenkins"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="health-form-group">
                      <label className="health-form-label" htmlFor="orgName">Organization Name</label>
                      <input 
                        type="text" 
                        id="orgName" 
                        className="health-form-input" 
                        placeholder="Apex Medical Care / City Health Clinic"
                        required
                        value={formData.orgName}
                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      />
                    </div>

                    <div className="health-form-group">
                      <label className="health-form-label" htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="health-form-input" 
                        placeholder="doctor@clinic.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="health-form-group">
                      <label className="health-form-label" htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="health-form-input" 
                        placeholder="+1 (555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="health-form-group">
                      <label className="health-form-label" htmlFor="industry">Industry</label>
                      <select 
                        id="industry" 
                        className="health-form-select"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      >
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Consulting & Professional Services">Consulting & Professional Services</option>
                      </select>
                    </div>

                    <div className="health-form-group">
                      <label className="health-form-label" htmlFor="marketingChallenge">
                        What is your biggest current marketing challenge?
                      </label>
                      <textarea 
                        id="marketingChallenge" 
                        className="health-form-textarea" 
                        placeholder="e.g. Attracting high-intent patients, local Google Maps rankings, patient education content..."
                        rows={3}
                        value={formData.marketingChallenge}
                        onChange={(e) => setFormData({ ...formData, marketingChallenge: e.target.value })}
                      />
                    </div>

                    <div className="health-form-group">
                      <label className="health-form-label" htmlFor="businessGoals">
                        What are your primary business goals for the next 6 months?
                      </label>
                      <textarea 
                        id="businessGoals" 
                        className="health-form-textarea" 
                        placeholder="e.g. Expand clinic capacity, launch telehealth division, recruit specialized practitioners..."
                        rows={3}
                        value={formData.businessGoals}
                        onChange={(e) => setFormData({ ...formData, businessGoals: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-health-submit">
                      Request Strategy Consultation
                    </button>
                    <p className="health-form-notice">
                      Submission is handled with strict client confidentiality and medical data privacy standards.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal (Optional Story Preview) */}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close" 
              onClick={() => setVideoModalOpen(false)}
            >
              ×
            </button>
            <h3 style={{ marginBottom: "16px", color: "var(--text-primary)" }}>Our Healthcare Growth Story</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
              Discover how sBLOOM partners with clinicians and hospitals to turn clinical excellence into sustained community trust.
            </p>
            <div style={{ position: "relative", paddingTop: "56.25%", background: "#000", borderRadius: "8px", overflow: "hidden" }}>
              <video 
                src="/hero-studio-video.mp4" 
                controls 
                autoPlay 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthcarePage;
