import React from 'react';
import './Pages.css';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover the legacy of academic excellence at Aalok Tuition Centre.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title" style={{textAlign: 'left'}}>Our Story</h2>
              <p>
                Aalok Tuition Centre (also known as Alok Tuition Center) was founded with a simple yet powerful goal: to provide high-quality, accessible education to the students of Birgunj. Over the years, we have grown into one of the most trusted coaching institutions in the region.
              </p>
              <p>
                Rated 4.3/5 on Google Maps by our proud students and parents, our strong local reputation is built on the hard work of our experienced faculty and the consistent success of our students in their academic pursuits.
              </p>
              
              <div className="mission-vision mt-2">
                <div className="mv-box">
                  <h3 className="text-primary">Our Mission</h3>
                  <p>To empower students with the knowledge, skills, and confidence they need to achieve academic excellence and reach their full potential.</p>
                </div>
                <div className="mv-box">
                  <h3 className="text-primary">Our Vision</h3>
                  <p>To be the leading educational institution in Nepal, recognized for producing tomorrow's leaders through innovative and dedicated teaching.</p>
                </div>
              </div>
            </div>
            
            <div className="about-image-wrapper">
              <div className="placeholder-image">
                <p>Centre Building Image Placeholder</p>
                <small>Will be replaced by real photo of Durga Tole location</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-cols-2">
            {[
              {title: "Discipline", desc: "Fostering a structured environment that encourages focus and respect."},
              {title: "Quality Teaching", desc: "Delivering the highest standard of education through expert educators."},
              {title: "Student Focus", desc: "Prioritizing the individual learning needs and well-being of every student."},
              {title: "Affordability", desc: "Making premium education accessible to the wider community in Birgunj."}
            ].map((val, idx) => (
              <div key={idx} className="value-card card">
                <CheckCircle2 className="text-accent" size={32} style={{marginBottom: '1rem'}} />
                <h3>{val.title}</h3>
                <p className="text-muted">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
