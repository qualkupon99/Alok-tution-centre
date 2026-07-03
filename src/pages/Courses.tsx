import React from 'react';
import './Pages.css';
import { BookOpen } from 'lucide-react';

const Courses = () => {
  const categories = [
    {
      title: "Secondary Level",
      desc: "Expert mathematics coaching for middle and secondary school students.",
      courses: [
        { name: "Class 8 (C. Math & Opt. Math)", size: "40 students", duration: "1 Year", fees: "Inquire for fees" },
        { name: "Class 9 (C. Math & Opt. Math)", size: "40 students", duration: "1 Year", fees: "Inquire for fees" },
        { name: "Class 10 (C. Math & Opt. Math)", size: "40 students", duration: "1 Year", fees: "Inquire for fees" }
      ]
    },
    {
      title: "Higher Secondary",
      desc: "In-depth mathematics classes for +2 students.",
      courses: [
        { name: "Class 11 (Basic Mathematics & Business Math)", size: "40 students", duration: "1 Year", fees: "Inquire for fees" },
        { name: "Class 12 (Basic Mathematics & Business Math)", size: "40 students", duration: "1 Year", fees: "Inquire for fees" }
      ]
    },
    {
      title: "Diploma & Bachelor Level",
      desc: "Advanced coaching for CTEVT and BBS students.",
      courses: [
        { name: "All Papers for CTEVT Students (Diploma)", size: "40 students", duration: "Full Course", fees: "Inquire for fees" },
        { name: "B.B.S. (Statistics Math)", size: "40 students", duration: "1 Year", fees: "Inquire for fees" }
      ]
    }
  ];

  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Comprehensive educational programs designed for every stage of your academic journey.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {categories.map((cat, idx) => (
            <div key={idx} className="course-category-section" style={{marginBottom: '4rem'}}>
              <div className="category-header" style={{marginBottom: '2rem'}}>
                <h2 className="text-primary">{cat.title}</h2>
                <p className="text-muted">{cat.desc}</p>
              </div>
              
              <div className="grid grid-cols-2">
                {cat.courses.map((course, cIdx) => (
                  <div key={cIdx} className="card course-detail-card p-4" style={{padding: '1.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem'}}>
                      <BookOpen className="text-accent" size={24} />
                      <h3 style={{margin: 0, fontSize: '1.25rem'}}>{course.name}</h3>
                    </div>
                    <ul className="course-specs text-muted" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <li><strong>Duration:</strong> {course.duration}</li>
                      <li><strong>Batch Size:</strong> {course.size}</li>
                      <li><strong>Fees:</strong> {course.fees}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
