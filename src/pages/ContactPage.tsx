import React, { useState } from 'react';
import {
  User,
  Building2,
  Mail,
  Phone,
  LayoutGrid,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  BarChart3,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import './ContactPage.css';

interface FormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  industry: string;
  improve: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    industry: '',
    improve: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      industry: '',
      improve: '',
    });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Approved Visual Reference Background: Champagne Silk with Flowing Gold Curves */}
      <div className="contact-bg-backdrop" aria-hidden="true">
        <img
          src="/contact-silk-gold-bg.png"
          alt=""
          className="contact-bg-image"
        />
        <div className="contact-bg-light-tint" />
      </div>

      <div className="contact-master-container">
        <div className="contact-split-grid">
          {/* =================================================================
              LEFT COLUMN: 46% WIDTH - HEADLINE & 3 PROCESS STEPS
              ================================================================= */}
          <div className="contact-left-col">
            {/* Top Eyebrow Tag */}
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-text">GET IN TOUCH</span>
              <span className="contact-eyebrow-line" />
            </div>

            {/* Main Headline */}
            <h1 className="contact-hero-title">
              Let’s discuss<br />
              your digital<br />
              <span className="title-gold-text">growth.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="contact-hero-desc">
              Tell us about your organization and what you are trying to achieve. We'll help you identify the right opportunities and next steps.
            </p>

            {/* 3 Strategic Process Steps: Understand, Strategize, Grow Together */}
            <div className="contact-process-list">
              {/* Step 1: Understand */}
              <div className="contact-process-item">
                <div className="contact-process-badge">
                  <MessageSquare size={18} strokeWidth={1.8} />
                </div>
                <div className="contact-process-content">
                  <h4 className="contact-process-title">Understand</h4>
                  <p className="contact-process-text">We listen to your goals and challenges.</p>
                </div>
              </div>

              {/* Step 2: Strategize */}
              <div className="contact-process-item">
                <div className="contact-process-badge">
                  <Lightbulb size={18} strokeWidth={1.8} />
                </div>
                <div className="contact-process-content">
                  <h4 className="contact-process-title">Strategize</h4>
                  <p className="contact-process-text">We identify the right opportunities.</p>
                </div>
              </div>

              {/* Step 3: Grow Together */}
              <div className="contact-process-item">
                <div className="contact-process-badge">
                  <BarChart3 size={18} strokeWidth={1.8} />
                </div>
                <div className="contact-process-content">
                  <h4 className="contact-process-title">Grow Together</h4>
                  <p className="contact-process-text">We build a clear plan for measurable results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================================
              RIGHT COLUMN: 54% WIDTH - RESTRAINED LUXURY FORM CARD
              ================================================================= */}
          <div className="contact-right-col">
            <div className="contact-card">
              {/* Card Eyebrow */}
              <div className="contact-card-badge">
                <span className="contact-card-badge-dot" />
                <span className="contact-card-badge-text">CONTACT sBLOOM</span>
                <span className="contact-card-badge-line" />
              </div>

              {/* Card Headings */}
              <h2 className="contact-card-title">Share a few details</h2>
              <p className="contact-card-subtitle">
                We'll get back to you with the right next steps.
              </p>

              {submitted ? (
                <div className="contact-success-card">
                  <div className="contact-success-icon-wrap">
                    <CheckCircle2 size={32} strokeWidth={2} />
                  </div>
                  <h3 className="contact-success-title">Message Received!</h3>
                  <p className="contact-success-msg">
                    Thank you for reaching out. We have received your details and our team will get back to you with tailored strategic recommendations within 24 hours.
                  </p>
                  <button type="button" className="contact-reset-btn" onClick={handleReset}>
                    Send Another Response
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Field 1: Full Name */}
                  <div className="contact-field-group">
                    <label htmlFor="fullName" className="contact-field-label">
                      Full Name <span className="contact-req-star">*</span>
                    </label>
                    <div className="contact-input-wrap">
                      <User size={15} strokeWidth={1.8} className="contact-input-icon" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Enter your full name"
                        className="contact-input"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Field 2: Organization Name */}
                  <div className="contact-field-group">
                    <label htmlFor="organization" className="contact-field-label">
                      Organization Name <span className="contact-req-star">*</span>
                    </label>
                    <div className="contact-input-wrap">
                      <Building2 size={15} strokeWidth={1.8} className="contact-input-icon" />
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        placeholder="Enter your organization name"
                        className="contact-input"
                        value={formData.organization}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Field 3: Email Address */}
                  <div className="contact-field-group">
                    <label htmlFor="email" className="contact-field-label">
                      Email Address <span className="contact-req-star">*</span>
                    </label>
                    <div className="contact-input-wrap">
                      <Mail size={15} strokeWidth={1.8} className="contact-input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="contact-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Field 4: Phone Number */}
                  <div className="contact-field-group">
                    <label htmlFor="phone" className="contact-field-label">
                      Phone Number <span className="contact-req-star">*</span>
                    </label>
                    <div className="contact-input-wrap">
                      <Phone size={15} strokeWidth={1.8} className="contact-input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="contact-input"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Field 5: Industry */}
                  <div className="contact-field-group">
                    <label htmlFor="industry" className="contact-field-label">
                      Industry <span className="contact-req-star">*</span>
                    </label>
                    <div className="contact-input-wrap">
                      <LayoutGrid size={15} strokeWidth={1.8} className="contact-input-icon" />
                      <select
                        id="industry"
                        name="industry"
                        required
                        className="contact-select"
                        value={formData.industry}
                        onChange={handleChange}
                      >
                        <option value="">Select an industry...</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Consulting & Professional Services">
                          Consulting & Professional Services
                        </option>
                        <option value="Technology & Software">Technology & Software</option>
                        <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                        <option value="Financial Services">Financial Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 6: What would you like to improve? (Optional) */}
                  <div className="contact-field-group">
                    <label htmlFor="improve" className="contact-field-label">
                      What would you like to improve? <span className="contact-opt-tag">(Optional)</span>
                    </label>
                    <div className="contact-input-wrap contact-textarea-wrap">
                      <FileText size={15} strokeWidth={1.8} className="contact-input-icon contact-textarea-icon" />
                      <textarea
                        id="improve"
                        name="improve"
                        rows={2}
                        placeholder="Tell us about your goals, challenges, or what you'd like to improve..."
                        className="contact-textarea"
                        value={formData.improve}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Planning Next Step...' : 'Plan My Next Step'}</span>
                    <ArrowRight size={15} strokeWidth={2.4} className="btn-arrow-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
