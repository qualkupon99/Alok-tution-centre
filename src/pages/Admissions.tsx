import React, { useState } from 'react';
import './Pages.css';

const Admissions = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // Here we would normally use EmailJS or Formspree
  };

  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>Admissions</h1>
          <p>Join Aalok Tuition Centre and secure your academic future.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{gap: '4rem'}}>
            
            {/* How to Enrol */}
            <div>
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>How to Enrol</h2>
              <div className="enroll-steps" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div className="step-card card" style={{padding: '1.5rem', borderLeft: '4px solid var(--accent)'}}>
                  <h3 className="text-primary">Step 1: Inquiry</h3>
                  <p className="text-muted">Visit the centre or fill out the online inquiry form to register your interest.</p>
                </div>
                <div className="step-card card" style={{padding: '1.5rem', borderLeft: '4px solid var(--accent)'}}>
                  <h3 className="text-primary">Step 2: Free Counselling</h3>
                  <p className="text-muted">Attend a free counselling session to evaluate the student's needs and pick the right course.</p>
                </div>
                <div className="step-card card" style={{padding: '1.5rem', borderLeft: '4px solid var(--accent)'}}>
                  <h3 className="text-primary">Step 3: Registration</h3>
                  <p className="text-muted">Select the course, complete the enrollment form, and pay the registration fee.</p>
                </div>
                <div className="step-card card" style={{padding: '1.5rem', borderLeft: '4px solid var(--accent)'}}>
                  <h3 className="text-primary">Step 4: Begin Classes</h3>
                  <p className="text-muted">Get your class schedule and begin your journey towards excellence.</p>
                </div>
              </div>

              <div className="fees-note mt-4 card bg-light" style={{padding: '1.5rem', marginTop: '2rem'}}>
                <h3 className="text-primary">Fee Structure</h3>
                <p className="text-muted">Our fee structure is highly competitive and designed to be affordable. As fees vary by course and level, please contact the centre or submit an inquiry for detailed pricing information.</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <div className="card" style={{padding: '2rem'}}>
                <h2 className="text-primary" style={{marginBottom: '1.5rem'}}>Online Inquiry Form</h2>
                
                {formStatus === 'success' ? (
                  <div className="alert-success" style={{padding: '1rem', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px'}}>
                    Thank you for your inquiry! We will contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="inquiry-form" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" required className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Parent/Guardian Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="grid grid-cols-2" style={{gap: '1rem'}}>
                      <div className="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" required className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Email (Optional)</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2" style={{gap: '1rem'}}>
                      <div className="form-group">
                        <label>Class/Level</label>
                        <select className="form-control">
                          <option>Primary / Middle School</option>
                          <option>SEE Preparation</option>
                          <option>+2 Science</option>
                          <option>+2 Management</option>
                          <option>Entrance Exam</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Preferred Subject</label>
                        <input type="text" className="form-control" placeholder="e.g. Math, Science" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea rows={4} className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginTop: '1rem'}}>Submit Inquiry</button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
