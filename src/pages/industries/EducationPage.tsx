import React from "react";
import { Link } from "react-router";
import { ScrollReveal } from "../../components/ScrollReveal";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  School, 
  Calendar, 
  ShieldCheck, 
  ChevronRight, 
  Building2 
} from "lucide-react";
import "./EducationPage.css";

export const EducationPage: React.FC = () => {
  return (
    <div className="edu-page">
      {/* ====================================================
          1. Hero Section
          ==================================================== */}
      <section className="edu-hero">
        <div className="edu-hero-ambient" aria-hidden="true" />
        <div className="container">
          <div className="edu-hero-grid">
            {/* Left Content */}
            <ScrollReveal delay={0}>
              <span className="edu-hero-badge">
                <GraduationCap size={16} /> SBLOOM · EDUCATION & ACADEMIA
              </span>
              <h1 className="edu-hero-title">
                Where Academic Excellence Meets <br />
                <span className="edu-hero-highlight">Inspiring Digital Authority.</span>
              </h1>
              <p className="edu-hero-desc">
                Choosing the right school or college is a big decision for every family. We help schools, colleges, and learning academies showcase their real classroom quality online—so more parents and students discover you, send enquiries, and enroll with confidence.
              </p>
              
              <div className="edu-hero-actions">
                <Link to="/contact" className="edu-btn-primary">
                  <span>Request Education Strategy</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#approach" className="edu-btn-secondary">
                  <span>Explore Our Approach</span>
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="edu-hero-proof">
                <div className="edu-proof-item">
                  <CheckCircle2 size={18} className="edu-proof-icon" />
                  <span>Predictable Intake Cycles</span>
                </div>
                <div className="edu-proof-item">
                  <CheckCircle2 size={18} className="edu-proof-icon" />
                  <span>Cinema-Grade Storytelling</span>
                </div>
                <div className="edu-proof-item">
                  <CheckCircle2 size={18} className="edu-proof-icon" />
                  <span>Academic Compliance</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Media Frame */}
            <ScrollReveal delay={150} className="edu-hero-visual-card">
              <div className="edu-hero-img-frame">
                <img 
                  src="/edu-hero-classroom.jpg" 
                  alt="Happy schoolchildren learning in classroom with caring teacher" 
                  className="edu-hero-img" 
                />
                
                {/* Floating Badge Top Right */}
                <div className="edu-float-badge badge-top-right">
                  <div className="float-badge-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="float-badge-text">
                    <strong>+94% Tour-to-Enrollment</strong>
                    <span>More Families Joining School Tours</span>
                  </div>
                </div>

                {/* Floating Badge Bottom Left */}
                <div className="edu-float-badge badge-bottom-left">
                  <div className="float-badge-icon">
                    <Sparkles size={20} />
                  </div>
                  <div className="float-badge-text">
                    <strong>Authentic Campus Life</strong>
                    <span>Real Stories of Happy Students</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. Impact Metrics Strip
          ==================================================== */}
      <section className="edu-metrics-strip">
        <div className="container">
          <div className="edu-metrics-grid">
            <ScrollReveal delay={50} className="edu-metric-card">
              <div className="edu-metric-num">3.4x</div>
              <div className="edu-metric-label">Increase in Qualified Student Applications</div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="edu-metric-card">
              <div className="edu-metric-num">62%</div>
              <div className="edu-metric-label">Reduction in Prospective Student Drop-Off</div>
            </ScrollReveal>
            <ScrollReveal delay={150} className="edu-metric-card">
              <div className="edu-metric-num">8.5M+</div>
              <div className="edu-metric-label">Verified Video Views for Campus Stories</div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="edu-metric-card">
              <div className="edu-metric-num">100%</div>
              <div className="edu-metric-label">Academic Integrity & Regulatory Compliance</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          3. Institutional Enrollment Asset
          ==================================================== */}
      <section className="edu-audiences-section">
        <div className="container">
          <div className="edu-audience-row" style={{ marginBottom: 0 }}>
            <ScrollReveal delay={100} className="edu-audience-text">
              <span className="aud-pill">
                <Building2 size={15} /> FOR INSTITUTIONS & UNIVERSITIES
              </span>
              <h3>Turn Your Campus Culture Into Your Strongest Enrollment Asset</h3>
              <p>
                Parents and students want to picture themselves succeeding in your classrooms, libraries, and playgrounds. We showcase the real warmth and excellence of your campus so more families book tours and enroll.
              </p>

              <div className="edu-benefit-grid">
                <div className="edu-benefit-box">
                  <strong>Predictable Influx</strong>
                  <span>A steady, reliable flow of new student applications each term.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Campus Life in 4K</strong>
                  <span>Short, lively videos showing real, daily student experiences.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Parent Trust Funnels</strong>
                  <span>Clear answers addressing safety, transport, fees, and career results.</span>
                </div>
                <div className="edu-benefit-box">
                  <strong>Hyper-Local Dominance</strong>
                  <span>Top rankings on Google and local maps when families search for schools.</span>
                </div>
              </div>

              <Link to="/contact" className="edu-btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
                <span>Partner for Institutional Growth</span>
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200} className="edu-audience-media">
              <div className="edu-audience-img-wrapper">
                <img 
                  src="/edu-campus-students.jpg" 
                  alt="Happy students walking on university and school campus" 
                  className="edu-audience-img" 
                />
                <div className="edu-img-overlay-caption">
                  <span>🏛️ Campus Tour & Community Showcase</span>
                  <span>94% Tour Attendance Rate</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          5. S-Bloom Approach (BUILD · CREATE · PROMOTE)
          ==================================================== */}
      <section className="edu-approach-section" id="approach">
        <div className="container">
          <div className="edu-section-header">
            <ScrollReveal delay={0}>
              <span className="edu-section-badge">OUR SYSTEMATIC METHODOLOGY</span>
              <h2 className="edu-section-title">The Three-Pillar S-Bloom Education Framework</h2>
              <p className="edu-section-subtitle">
                A simple, 3-step plan designed specifically to help schools get more inquiries, fill admissions, and grow revenue season after season.
              </p>
            </ScrollReveal>
          </div>

          <div className="edu-approach-cards-grid">
            {/* Card 1: BUILD */}
            <ScrollReveal delay={100} className="h-full">
              <div className="edu-approach-card-v2">
                <div className="edu-card-step-badge">01</div>
                <span className="edu-card-phase">FOUNDATION & PLATFORMS</span>
                <h3>BUILD: The Digital Campus</h3>
                <p>
                  We build fast, mobile-friendly websites so parents can easily explore your school, check fees, and book campus visits.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: CREATE */}
            <ScrollReveal delay={200} className="h-full">
              <div className="edu-approach-card-v2">
                <div className="edu-card-step-badge">02</div>
                <span className="edu-card-phase">CONTENT & AUTHORITY</span>
                <h3>CREATE: Cinema-Grade Stories</h3>
                <p>
                  We film real classroom lessons, caring teachers, and happy student moments that build immediate trust with parents.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: PROMOTE */}
            <ScrollReveal delay={300} className="h-full">
              <div className="edu-approach-card-v2">
                <div className="edu-card-step-badge">03</div>
                <span className="edu-card-phase">REACH & CONVERSION</span>
                <h3>PROMOTE: Timed Campaigns</h3>
                <p>
                  We run targeted ads timed with your peak admission dates to bring more parent phone calls, visits, and student enrolments.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          6. Academic Calendar Roadmap
          ==================================================== */}
      <section className="edu-roadmap-section">
        <div className="container">
          <div className="edu-section-header">
            <ScrollReveal delay={0}>
              <span className="edu-section-badge">ANNUAL ADMISSIONS TIMELINE</span>
              <h2 className="edu-section-title">Planned Around Your Admissions Calendar</h2>
              <p className="edu-section-subtitle">
                Timing is everything. We plan our work around your annual school calendar so your classrooms stay full all year round.
              </p>
            </ScrollReveal>
          </div>

          <div className="edu-timeline-grid">
            <ScrollReveal delay={50} className="edu-timeline-step">
              <span className="edu-quarter-pill">STEP 1 · BEFORE ADMISSIONS</span>
              <h4>Build Trust & Awareness</h4>
              <p>Showcase great teachers and happy classrooms to build a strong reputation early.</p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="edu-timeline-step">
              <span className="edu-quarter-pill">STEP 2 · OPEN ADMISSIONS</span>
              <h4>Bring In Enquiries</h4>
              <p>Run targeted ads to bring parent calls, brochure downloads, and campus tour bookings.</p>
            </ScrollReveal>

            <ScrollReveal delay={150} className="edu-timeline-step">
              <span className="edu-quarter-pill">STEP 3 · ADMISSION DEADLINES</span>
              <h4>Confirm Applications</h4>
              <p>Answer parent questions to help families complete enrolment on time.</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="edu-timeline-step">
              <span className="edu-quarter-pill">STEP 4 · NEW SCHOOL YEAR</span>
              <h4>Welcome New Students</h4>
              <p>Welcome students warmly and keep positive momentum going for the next academic year.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================
          7. Final High-Converting CTA
          ==================================================== */}
      <section className="edu-final-cta-section">
        <div className="edu-cta-ambient" aria-hidden="true" />
        <div className="container">
          <div className="edu-cta-inner">
            <ScrollReveal delay={0}>
              <span className="edu-cta-badge">
                <Sparkles size={16} /> TAKE THE NEXT STEP
              </span>
              <h2 className="edu-cta-title">
                Your Institution Inspires Minds. <br />
                Let’s Help More Students Discover It.
              </h2>
              <p className="edu-cta-desc">
                Book a friendly 30-minute call with S-Bloom. We will look at your current admissions process and show you simple, proven ways to get more student enquiries and fill your seats for the upcoming term.
              </p>

              <div className="edu-cta-buttons">
                <Link to="/contact" className="edu-cta-primary-btn">
                  <span>Schedule Strategy Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="edu-cta-perks">
                <span><ShieldCheck size={16} color="#D9A52E" /> Free 30-minute admissions review</span>
                <span><Calendar size={16} color="#D9A52E" /> Tailored to your school calendar</span>
                <span><Award size={16} color="#D9A52E" /> 100% compliant with educational standards</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
