import React from 'react';
import './Pages.css';
import { Award, Star } from 'lucide-react';

const Results = () => {
  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>Results & Achievements</h1>
          <p>Celebrating the outstanding academic successes of our students.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{alignItems: 'center', gap: '4rem', marginBottom: '4rem'}}>
            <div>
              <h2 className="section-title" style={{textAlign: 'left'}}>Consistent Excellence</h2>
              <p className="text-muted" style={{marginBottom: '1rem', fontSize: '1.1rem'}}>
                At Aalok Tuition Centre, we measure our success by the success of our students. Year after year, our students have achieved remarkable results in their board exams and competitive entrance tests.
              </p>
              <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'var(--accent)', padding: '0.5rem', borderRadius: '50%', color: 'white'}}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 style={{margin: 0}}>98% Overall Pass Rate</h4>
                    <p className="text-muted" style={{margin: 0, fontSize: '0.9rem'}}>Consistently maintained over the last 5 years.</p>
                  </div>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'var(--accent)', padding: '0.5rem', borderRadius: '50%', color: 'white'}}>
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 style={{margin: 0}}>50+ District Toppers</h4>
                    <p className="text-muted" style={{margin: 0, fontSize: '0.9rem'}}>In SEE and +2 board examinations.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card bg-light p-4" style={{padding: '2rem', textAlign: 'center'}}>
              <h3 className="text-primary" style={{fontSize: '3rem', marginBottom: '0.5rem'}}>2025</h3>
              <p className="text-accent" style={{fontWeight: 600, fontSize: '1.25rem'}}>Batch Highlights</p>
              <div style={{marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <div style={{background: 'white', padding: '1rem', borderRadius: '8px'}}>
                  <h4 className="text-primary" style={{fontSize: '2rem'}}>4.0</h4>
                  <p className="text-muted">GPA in SEE</p>
                </div>
                <div style={{background: 'white', padding: '1rem', borderRadius: '8px'}}>
                  <h4 className="text-primary" style={{fontSize: '2rem'}}>100%</h4>
                  <p className="text-muted">First Division</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">Student Testimonials</h2>
          <div className="grid grid-cols-3">
            {[
              {name: "Rahul Gupta", exam: "SEE 2024", text: "The dedicated teachers at Aalok Tuition Centre helped me understand complex science concepts easily. I owe my 4.0 GPA to them!"},
              {name: "Priya Singh", exam: "+2 Science", text: "Regular mock tests and personalized attention made all the difference in my NEB board preparation. Highly recommended."},
              {name: "Amit Patel", exam: "IOE Entrance", text: "The intensive entrance preparation course was perfectly structured. I secured a full scholarship thanks to the expert guidance."}
            ].map((test, idx) => (
              <div key={idx} className="card testimonial-card" style={{padding: '2rem'}}>
                <div style={{display: 'flex', gap: '0.25rem', color: 'var(--accent)', marginBottom: '1rem'}}>
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p style={{fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)'}}>"{test.text}"</p>
                <div>
                  <h4 className="text-primary" style={{margin: 0}}>{test.name}</h4>
                  <p className="text-accent" style={{margin: 0, fontSize: '0.85rem', fontWeight: 600}}>{test.exam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
