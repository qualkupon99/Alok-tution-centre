import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Clock, ChevronRight } from 'lucide-react';
import './Pages.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Building Tomorrow's Leaders, Today</h1>
          <p>Birgunj's premier coaching and tuition centre. Join us to unlock your true academic potential with expert guidance and a proven track record.</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-accent">Explore Courses</Link>
            <Link to="/admissions" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Enrol Now</Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats bg-primary">
        <div className="container">
          <div className="grid grid-cols-4 stats-grid">
            <div className="stat-item">
              <Award size={40} className="text-accent" />
              <h3>10+</h3>
              <p>Years Established</p>
            </div>
            <div className="stat-item">
              <BookOpen size={40} className="text-accent" />
              <h3>3+</h3>
              <p>Subjects Offered</p>
            </div>
            <div className="stat-item">
              <Users size={40} className="text-accent" />
              <h3>1000+</h3>
              <p>Students Enrolled</p>
            </div>
            <div className="stat-item">
              <Award size={40} className="text-accent" />
              <h3>98%</h3>
              <p>Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Aalok Tuition Centre?</h2>
          <p className="section-subtitle">We provide an environment where students thrive academically and personally.</p>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="card feature-card">
              <div className="feature-icon"><Users /></div>
              <h3>Experienced Faculty</h3>
              <p>Learn from Birgunj's top educators with years of proven experience in their subjects.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon"><Award /></div>
              <h3>Proven Results</h3>
              <p>Our students consistently top board exams and secure placements in top institutions.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon"><Clock /></div>
              <h3>Optimal Batch Size</h3>
              <p>Dedicated batches of 40 students ensure a perfect balance of peer learning and focus.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon"><BookOpen /></div>
              <h3>Modern Facilities</h3>
              <p>Fully Air-Conditioned (A/C) classrooms equipped with Smart Boards for interactive learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem'}}>
            <div>
              <h2 className="section-title" style={{marginBottom: '0.5rem', textAlign: 'left'}}>Popular Courses</h2>
              <p className="text-muted">Comprehensive coaching tailored for success.</p>
            </div>
            <Link to="/courses" className="btn btn-outline" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-3">
            {[
              { title: 'Class 8, 9, 10', level: 'Secondary Level', desc: 'Expert coaching in Compulsory Mathematics and Optional Mathematics.' },
              { title: 'Class 11, 12', level: 'Higher Secondary', desc: 'In-depth classes for Basic Mathematics (Business Math/General Math).' },
              { title: 'CTEVT & BBS Math', level: 'Diploma & Bachelors', desc: 'Specialized coaching for CTEVT Diploma papers and BBS Statistics Mathematics.' }
            ].map((course, idx) => (
              <div key={idx} className="card course-card">
                <div className="course-card-body">
                  <span className="course-badge text-accent">{course.level}</span>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                </div>
                <div className="course-card-footer">
                  <Link to="/admissions" className="text-primary" style={{fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section bg-primary text-center">
        <div className="container">
          <h2 style={{color: 'white', marginBottom: '1rem'}}>Admissions Open for 2026 Batch</h2>
          <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
            Secure your seat today and take the first step towards academic excellence.
          </p>
          <Link to="/admissions" className="btn btn-accent" style={{fontSize: '1.1rem', padding: '1rem 2rem', display: 'inline-block', marginBottom: '3rem'}}>
            Enrol Now
          </Link>
          
          <div style={{marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '3rem'}}>
            <h3 style={{color: 'var(--accent)', marginBottom: '1.5rem'}}>Message from the Director</h3>
            <img src="/director.png" alt="Director Ajay Kumar Sah" style={{width: '100%', maxWidth: '400px', borderRadius: '12px', margin: '0 auto', display: 'block', border: '4px solid var(--accent)'}} />
            <p style={{color: 'white', marginTop: '1rem', fontSize: '1.2rem', fontWeight: 600}}>Mr. Ajay Kumar Sah</p>
            <p style={{color: 'rgba(255,255,255,0.8)'}}>Mob No. 9814207127</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
