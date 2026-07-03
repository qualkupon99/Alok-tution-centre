import React, { useState } from 'react';
import './Pages.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out to us with any questions or inquiries.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{gap: '4rem'}}>
            
            {/* Contact Details */}
            <div>
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>Get in Touch</h2>
              
              <div className="contact-info-list" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                <div style={{display: 'flex', gap: '1.5rem'}}>
                  <div style={{background: 'var(--primary)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary" style={{marginBottom: '0.25rem'}}>Visit Us</h3>
                    <p className="text-muted">Birgunj-13, Tejarth Tol,<br/>Birgunj, Nepal</p>
                  </div>
                </div>
                
                <div style={{display: 'flex', gap: '1.5rem'}}>
                  <div style={{background: 'var(--primary)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary" style={{marginBottom: '0.25rem'}}>Call Us</h3>
                    <p className="text-muted">+977 9814207127, 9825262406</p>
                  </div>
                </div>
                
                <div style={{display: 'flex', gap: '1.5rem'}}>
                  <div style={{background: 'var(--primary)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary" style={{marginBottom: '0.25rem'}}>Operating Hours</h3>
                    <p className="text-muted">Sunday - Friday: 6:00 AM - 6:00 PM<br/>Saturday: Closed (Except Mock Tests)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{padding: '2.5rem'}}>
              <h3 className="text-primary" style={{marginBottom: '1.5rem'}}>Send us a Message</h3>
              {formStatus === 'success' ? (
                <div style={{padding: '1rem', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px'}}>
                  Thank you for your message! We will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" required className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" required className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea rows={5} required className="form-control"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{marginTop: '0.5rem'}}>Send Message</button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113063.85807963283!2d84.79250499879793!3d27.019777176527555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399354006c39fbb3%3A0x67399435a2d6199f!2sBirgunj%2044300%2C%20Nepal!5e0!3m2!1sen!2sus!4v1714234567890!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{border: 0, display: 'block'}} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Aalok Tuition Centre Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
