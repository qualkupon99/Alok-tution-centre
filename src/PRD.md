PRODUCT REQUIREMENTS DOCUMENT
Aalok Tuition Centre
Official Website
Birgunj, Nepal  |  Version 1.0  |  April 2026
Document Owner	Status	Version	Last Updated
Aalok Tuition Centre	Draft	1.0	April 2026


1. Product Overview
1.1 Purpose
This document defines the requirements for building a professional, modern website for Aalok Tuition Centre, a coaching and tutoring institution located in Birgunj, Nepal. The website will serve as the primary digital presence for the centre, enabling students and parents to discover services, learn about faculty, view schedules, and contact the institution.
1.2 Background
Aalok Tuition Centre (also known as Alok Tuition Center) is an established coaching centre in Birgunj with a strong local reputation, rated 4.3/5 on Google Maps. The centre currently has a Facebook page but lacks a dedicated website, limiting its reach and online credibility.
1.3 Goals
•	Establish a credible, professional online identity for Aalok Tuition Centre
•	Increase student enrolment by reaching parents and students searching online
•	Provide key information (courses, faculty, timings, location) in an accessible format
•	Enable students and parents to contact or inquire directly from the website
•	Build trust through transparent display of reviews, achievements, and credentials
1.4 Scope
This PRD covers the design and development of a static/semi-dynamic multi-page website. It does not include a student portal, LMS (learning management system), fee payment gateway, or live chat functionality in the initial version.

2. Target Audience
Persona	Who They Are	Primary Need
Student	School/college students in Birgunj aged 10-20	Find courses, fees, schedule, and enrol
Parent / Guardian	Parents evaluating coaching options for their children	Assess credibility, faculty quality, location, and cost
Returning Visitor	Enrolled students or existing families	Check schedules, announcements, contact faculty
Prospective Teacher	Educators seeking teaching positions	Learn about the institution and apply


3. Website Structure & Pages
The website will consist of the following pages, accessible via a persistent top navigation bar:

Page No.	Page Name	Description
P-01	Home	Hero section, highlights, call-to-action, quick links to all major sections
P-02	About Us	History, mission, vision, values, and centre overview
P-03	Courses	List of all subjects/courses offered with details
P-04	Faculty	Profiles of teachers and staff
P-05	Admissions	Enrolment process, eligibility, fees structure, and inquiry form
P-06	Gallery	Photos of classes, events, and facilities
P-07	Results & Achievements	Student success stories, toppers, pass rates
P-08	Contact Us	Address, phone, map embed, social links, and contact form


4. Detailed Page Requirements
P-01: Home Page
4.1.1 Hero Section
•	Full-width banner with centre name, tagline, and a strong CTA button (e.g., 'Enrol Now' or 'Explore Courses')
•	Background: high-quality photo of a classroom or students, or illustrated banner
•	Tagline should be short and aspirational (e.g., 'Building Tomorrow's Leaders, Today')
4.1.2 Quick Stats Bar
•	Display 3-4 key numbers: Years Established, Subjects Offered, Students Enrolled, Pass Rate
•	Numbers should be visually prominent with icons
4.1.3 Courses Preview
•	3-4 course cards in a responsive grid with course name, icon, and a 'Learn More' link
4.1.4 Why Choose Us
•	3-6 feature highlights with icons: Experienced Faculty, Affordable Fees, Proven Results, Small Batches, etc.
4.1.5 Testimonials / Reviews
•	Section displaying Google Reviews or curated student/parent testimonials
•	Reference existing 4.3/5 Google Maps rating with review snippets
4.1.6 Call to Action Banner
•	Prominent section with 'Admissions Open' message and an inquiry button

P-02: About Us
•	Centre history and founding story
•	Mission statement: what the centre aims to achieve
•	Vision statement: long-term educational goals
•	Core values: discipline, quality teaching, student focus, affordability
•	Photo of the centre / director if available
•	Location description: Durga Tole 13, Durgatol, Birgunj 44300

P-03: Courses
4.3.1 Course Categories
•	Primary / Middle School Tuition
•	Secondary Level (SEE Preparation)
•	Higher Secondary (+2 / NEB preparation)
•	Entrance Exam Coaching (IOE, CTEVT, etc.)
4.3.2 Per Course Card
•	Subject name and level
•	Duration of course / batch timing
•	Class size or batch size
•	Brief description of what is taught
•	Fees (if publicly disclosed) or 'Inquire for fees'

P-04: Faculty
•	Grid of faculty profiles: name, photo, subject specialisation, qualification, years of experience
•	Optional short bio per teacher
•	Note: placeholder profiles should be used if photos are not yet available

P-05: Admissions
4.5.1 How to Enrol (Step-by-step)
•	Step 1: Visit the centre or fill the online inquiry form
•	Step 2: Attend a free counselling session
•	Step 3: Select course and pay registration fee
•	Step 4: Begin classes
4.5.2 Online Inquiry Form
•	Fields: Full Name, Parent Name, Phone Number, Email (optional), Class/Level, Preferred Subject, Message
•	Form should submit via email (mailto or EmailJS) or a backend form service
•	Success confirmation message after submission
4.5.3 Fee Structure
•	Display as a table per course/level if information is available
•	If fees are variable, include a note to contact the centre for details

P-06: Gallery
•	Masonry or grid photo gallery
•	Categories: Classroom, Events, Celebrations, Facilities
•	Lightbox popup on click to view full image
•	Minimum 12 placeholder slots; actual images to be provided by client

P-07: Results & Achievements
•	Annual board exam results and top scorers
•	Pass percentage statistics
•	Student achievements, awards, and recognition
•	Testimonials from past students who secured good results

P-08: Contact Us
•	Full address: Durga Tole 13, Durgatol, Birgunj 44300, Nepal
•	Google Maps embed with pin at centre location
•	Google Maps link: https://maps.app.goo.gl/i8nWCmCt77QNkHaA8
•	Phone number (to be provided by client)
•	Facebook page link: https://www.facebook.com/aalok.tuition.centre/
•	Contact form (same fields as inquiry form above)
•	Operating hours (to be confirmed with client)

5. Global UI Components
5.1 Navigation Bar (Header)
•	Sticky top navigation, visible on all pages
•	Logo on the left (centre name + icon)
•	Navigation links: Home, About, Courses, Faculty, Admissions, Gallery, Results, Contact
•	'Enrol Now' CTA button on far right (accent color)
•	Hamburger menu for mobile devices
•	Active page highlighted in nav
5.2 Footer
•	Centre name, tagline, and short description
•	Quick links: all main pages
•	Contact info: address, phone, email
•	Social media icons: Facebook (primary), optional WhatsApp
•	Google Maps link
•	Copyright line: © 2026 Aalok Tuition Centre. All rights reserved.
5.3 Announcement Banner (Optional)
•	Dismissible top banner for time-sensitive announcements such as 'Admissions Open for 2026 Batch'

6. Design Requirements
6.1 Visual Identity
Attribute	Specification
Primary Color	Deep Green (#2E5339) — representing knowledge and growth
Accent Color	Gold (#C9922A) — representing excellence and prestige
Background	Warm off-white (#FFFDF8) for a premium, academic feel
Heading Font	Playfair Display (serif) — authoritative and traditional
Body Font	DM Sans (sans-serif) — clean and readable
Tone	Professional, trustworthy, academic, warm

6.2 Responsive Design
•	Website must be fully responsive across desktop (1200px+), tablet (768px), and mobile (375px)
•	All images must include alt text for accessibility
•	Font sizes must be readable without zooming on all devices
•	Touch targets (buttons, links) minimum 44x44px on mobile
6.3 Imagery Guidelines
•	Use real photos of the centre when available; use high-quality royalty-free stock otherwise
•	All student photos must have guardian consent if minors are depicted
•	Consistent image aspect ratios per section for visual coherence

7. Technical Requirements
7.1 Technology Stack Options
Option A (Recommended for simplicity):
•	HTML5, CSS3, Vanilla JavaScript
•	No backend required; forms handled via EmailJS or Formspree
•	Hosted on GitHub Pages, Netlify, or Vercel (free tier)

Option B (For future scalability):
•	React.js or Next.js frontend
•	Node.js backend for form handling
•	Hosted on VPS or shared hosting
7.2 Performance Requirements
•	Page load time under 3 seconds on a standard 4G connection
•	Google PageSpeed Insights score of 80+ on mobile
•	All images compressed and served in WebP format where supported
•	Lazy loading for gallery images
7.3 SEO Requirements
•	Meta title and description on every page
•	Structured data (Schema.org) for LocalBusiness
•	Sitemap.xml and robots.txt
•	Nepal-specific keywords: 'tuition centre Birgunj', 'coaching Birgunj', 'SEE preparation Nepal'
•	Open Graph tags for social sharing
7.4 Form Handling
•	Contact and inquiry forms must send email notification to the centre's email address
•	Anti-spam measure: honeypot field or reCAPTCHA
•	Form data should not be stored without a privacy policy in place
7.5 Browser Support
•	Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
•	IE11 is NOT required

8. Content Requirements
The following content must be provided by the client (Aalok Tuition Centre) before development can be completed:

#	Content Item	Who Provides	Priority
1	Centre logo (PNG with transparent background)	Client	High
2	Phone number and email address	Client	High
3	Operating hours (days and times)	Client	High
4	List of courses offered with fees	Client	High
5	Faculty names, qualifications, and photos	Client	Medium
6	Centre photos (interior, exterior, classrooms)	Client	Medium
7	Founding year and centre history/story	Client	Medium
8	Student results or achievement statistics	Client	Medium
9	Student/parent testimonials (with consent)	Client	Low
10	Social media handles (Facebook, WhatsApp)	Client	Low


9. Non-Functional Requirements
9.1 Accessibility
•	WCAG 2.1 Level AA compliance where feasible
•	Keyboard navigable interface
•	Sufficient color contrast ratios (minimum 4.5:1 for normal text)
•	Screen reader friendly semantic HTML
9.2 Security
•	HTTPS (SSL certificate) — mandatory for all deployments
•	No sensitive student data stored client-side
•	Form inputs sanitised before sending
9.3 Maintainability
•	Well-commented, clean code
•	Content sections should be easy to update (ideally without coding knowledge)
•	Images stored in a consistent folder structure

10. Project Milestones & Timeline
#	Milestone	Deliverable	Target
M1	Requirements Sign-off	Approved PRD	Week 1
M2	Design Mockups	Figma wireframes for all pages	Week 2
M3	Design Approval	Client-approved mockups	Week 3
M4	Frontend Development	All pages coded (HTML/CSS/JS)	Week 5
M5	Content Integration	Real content inserted into pages	Week 6
M6	QA & Testing	Cross-browser, mobile, and form testing	Week 7
M7	Go Live	Website deployed to domain	Week 8


11. Success Metrics
The website will be considered successful when the following measurable outcomes are achieved within 3 months of launch:

•	At least 200 unique monthly visitors via organic search
•	At least 10 inquiry form submissions per month
•	Google Search Console showing centre name appearing in local search results
•	Mobile usability score of 90+ on Google Search Console
•	Zero critical bugs reported by users in the first 30 days

12. Out of Scope (V1)
The following features are explicitly excluded from version 1.0 of the website and may be considered for future versions:

•	Student login portal or dashboard
•	Online fee payment integration
•	Live chat or chatbot
•	Learning Management System (LMS) or online classes
•	Blog or news section
•	Multi-language support (Nepali/Hindi)
•	Mobile application

13. Approval & Sign-off
Name	Role	Signature	Date
	Centre Director		
	Project Manager		
	Lead Developer		
	Designer		


— End of Document —
