import React, { useState, useEffect } from 'react';
import { Play, BookOpen, Video, Trash2, FolderPlus } from 'lucide-react';
import './Pages.css';

interface VideoItem {
  id: string;
  title: string;
  url: string;
  description: string;
  section: string;
}

const DEFAULT_VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Arithmetic Progression (AP) - Concept & Formulas',
    url: 'https://www.youtube.com/watch?v=xz2W6h8HskM',
    description: 'Learn the basic concepts of Arithmetic Progression, finding the nth term, and sum of n terms for Class 10 Optional Mathematics.',
    section: 'Class 10 Opt. Math'
  },
  {
    id: '2',
    title: 'Limits & Continuity - Part 1',
    url: 'https://www.youtube.com/watch?v=3d6Ds2k2jF4',
    description: 'Introduction to calculus, limits, and continuity for Class 11 & 12 Basic Mathematics.',
    section: 'Class 11 & 12 Basic Math'
  },
  {
    id: '3',
    title: 'CTEVT Diploma Math - Matrix & Determinants',
    url: 'https://www.youtube.com/watch?v=yR7q4z3Hk1Q',
    description: 'Detailed explanation of matrices, operations, and determinants for CTEVT Diploma Engineering students.',
    section: 'CTEVT Diploma Math'
  }
];

const Learning = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/videos')
      .then(res => {
        if (res.status === 404) {
          fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/videos', {
            method: 'POST',
            body: JSON.stringify(DEFAULT_VIDEOS)
          });
          return DEFAULT_VIDEOS;
        }
        return res.json();
      })
      .then(data => {
        setVideos(data);
        if (data.length > 0) setSelectedVideo(data[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setVideos(DEFAULT_VIDEOS);
        if (DEFAULT_VIDEOS.length > 0) setSelectedVideo(DEFAULT_VIDEOS[0]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid var(--primary)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const getEmbedUrl = (url: string) => {
    let videoId = '';
    // YouTube matchers
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // fallback
  };

  // Get unique sections
  const sections = ['All', ...Array.from(new Set(videos.map(v => v.section)))];

  const filteredVideos = activeSection === 'All' 
    ? videos 
    : videos.filter(v => v.section === activeSection);

  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>Learning Portal</h1>
          <p>Access high-quality mathematics video lessons and tutorials curated by Mr. Ajay Kumar Sah.</p>
        </div>
      </div>

      <section className="section bg-light" style={{ padding: '3rem 0' }}>
        <div className="container">
          {videos.length === 0 ? (
            <div className="text-center card" style={{ padding: '3rem' }}>
              <Video size={48} className="text-muted" style={{ margin: '0 auto 1rem' }} />
              <h3>No Video Lessons Available Yet</h3>
              <p className="text-muted">Content is currently being uploaded. Please check back later or contact administration.</p>
            </div>
          ) : (
            <div className="learning-grid">
              
              {/* Sidebar: Sections */}
              <div className="card" style={{ padding: '1.5rem', position: 'sticky', top: '100px' }}>
                <h3 className="text-primary" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                  <BookOpen size={20} /> Class Sections
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                  {sections.map(sec => (
                    <li key={sec}>
                      <button
                        onClick={() => {
                          setActiveSection(sec);
                          const filtered = sec === 'All' ? videos : videos.filter(v => v.section === sec);
                          if (filtered.length > 0) setSelectedVideo(filtered[0]);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          border: 'none',
                          background: activeSection === sec ? 'var(--primary)' : 'transparent',
                          color: activeSection === sec ? 'white' : 'var(--text-main)',
                          fontWeight: activeSection === sec ? 600 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          fontSize: '0.95rem'
                        }}
                        className="section-tab-btn"
                      >
                        {sec}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Player & Video List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Active Video Player */}
                {selectedVideo && (
                  <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000' }}>
                      <iframe
                        src={getEmbedUrl(selectedVideo.url)}
                        title={selectedVideo.title}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <span className="course-badge text-accent" style={{ marginBottom: '0.75rem' }}>{selectedVideo.section}</span>
                      <h2 className="text-primary" style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>{selectedVideo.title}</h2>
                      <p className="text-muted" style={{ lineHeight: '1.6' }}>{selectedVideo.description}</p>
                    </div>
                  </div>
                )}

                {/* Other Videos List */}
                <div>
                  <h3 className="text-primary" style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                    Videos in {activeSection === 'All' ? 'All Sections' : activeSection}
                  </h3>
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {filteredVideos.map(vid => (
                      <div 
                        key={vid.id} 
                        className={`card course-card ${selectedVideo?.id === vid.id ? 'active-video' : ''}`}
                        onClick={() => setSelectedVideo(vid)}
                        style={{ cursor: 'pointer', border: selectedVideo?.id === vid.id ? '2px solid var(--accent)' : '1px solid transparent' }}
                      >
                        <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#2E5339', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ background: 'var(--accent)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                              <Play size={20} style={{ marginLeft: '2px' }} />
                            </div>
                          </div>
                        </div>
                        <div className="course-card-body" style={{ padding: '1.25rem' }}>
                          <span className="text-accent" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{vid.section}</span>
                          <h4 style={{ margin: '0.5rem 0 0.25rem', fontSize: '1.05rem', color: 'var(--text-main)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {vid.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Learning;
