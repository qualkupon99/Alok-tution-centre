import React from 'react';
import './Pages.css';

const Faculty = () => {
  // Placeholder data
  const faculty = [
    { name: "Mr. Ajay Kumar Sah", subject: "Director & Mathematics Instructor", qual: "Expert in C.Math, Opt.Math & Basic Mathematics", exp: "10+ Years", img: "/director.png" },
    { name: "Mr. Sandeep Kumar Sah", subject: "Co-ordinator", qual: "Administration & Student Affairs", exp: "Experienced Professional", img: "" }
  ];

  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>Our Faculty</h1>
          <p>Learn from Birgunj's most experienced and dedicated educators.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-3">
            {faculty.map((teacher, idx) => (
              <div key={idx} className="card faculty-card text-center" style={{padding: '2rem'}}>
                {teacher.img ? (
                  <img src={teacher.img} alt={teacher.name} style={{
                    width: '120px', height: '120px', borderRadius: '50%', 
                    margin: '0 auto 1.5rem', objectFit: 'cover', border: '3px solid var(--accent)'
                  }} />
                ) : (
                  <div className="faculty-img-placeholder" style={{
                    width: '120px', height: '120px', borderRadius: '50%', 
                    backgroundColor: '#eee', margin: '0 auto 1.5rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#999', fontSize: '0.8rem', border: '3px solid var(--accent)'
                  }}>
                    Photo
                  </div>
                )}
                <h3 className="text-primary" style={{marginBottom: '0.25rem'}}>{teacher.name}</h3>
                <p className="text-accent" style={{fontWeight: 600, marginBottom: '0.5rem'}}>{teacher.subject}</p>
                <div className="text-muted" style={{fontSize: '0.9rem'}}>
                  <p>{teacher.qual}</p>
                  <p>Experience: {teacher.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
