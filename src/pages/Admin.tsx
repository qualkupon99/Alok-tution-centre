import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Image, Video, LogOut, Check, AlertCircle } from 'lucide-react';
import './Pages.css';

interface VideoItem {
  id: string;
  title: string;
  url: string;
  description: string;
  section: string;
}

interface GalleryItem {
  id: number;
  url: string;
  alt: string;
}

const DEFAULT_GALLERY: GalleryItem[] = [
  { id: 0, url: '/gallery-2.jpg', alt: 'Aalok Tuition Centre Students' },
  { id: 1, url: '/gallery-3.jpg', alt: 'Director Ajay Kumar Sah teaching' },
  { id: 2, url: '/gallery-1.jpg', alt: 'Aalok Tuition Centre Class 8-12 Courses' },
  { id: 3, url: '/gallery-4.jpg', alt: 'Aalok Tuition Centre Logos' },
  { id: 4, url: '/gallery-5.jpg', alt: 'Aalok Tuition Centre CTEVT & BBS Courses' },
  { id: 5, url: '/director.png', alt: 'Director Ajay Kumar Sah' }
];

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

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'gallery' | 'videos'>('gallery');
  
  // Gallery states
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [newImageAlt, setNewImageAlt] = useState('');
  const [newImageBase64, setNewImageBase64] = useState('');
  const [galleryMsg, setGalleryMsg] = useState({ type: '', text: '' });

  // Video states
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [vidTitle, setVidTitle] = useState('');
  const [vidUrl, setVidUrl] = useState('');
  const [vidDesc, setVidDesc] = useState('');
  const [vidSection, setVidSection] = useState('');
  const [customSection, setCustomSection] = useState('');
  const [isCustomSection, setIsCustomSection] = useState(false);
  const [videoMsg, setVideoMsg] = useState({ type: '', text: '' });

  // Load data on mount
  useEffect(() => {
    // Fetch both gallery and videos from DB
    Promise.all([
      fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/gallery').then(res => res.status === 404 ? DEFAULT_GALLERY : res.json()),
      fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/videos').then(res => res.status === 404 ? DEFAULT_VIDEOS : res.json())
    ])
      .then(([galleryData, videosData]) => {
        setGallery(galleryData);
        setVideos(videosData);
      })
      .catch(err => {
        console.error(err);
        setGallery(DEFAULT_GALLERY);
        setVideos(DEFAULT_VIDEOS);
      });

    // Auth status session check
    const sessionAuth = sessionStorage.getItem('atc_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'aalokadmin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('atc_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect admin password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('atc_admin_auth');
    setPassword('');
  };

  // Image Upload File Handler
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageBase64) {
      setGalleryMsg({ type: 'error', text: 'Please select an image file first.' });
      return;
    }

    const newItem: GalleryItem = {
      id: Date.now(),
      url: newImageBase64,
      alt: newImageAlt || 'Aalok Tuition Centre Gallery Image'
    };

    const updatedGallery = [newItem, ...gallery];
    setGallery(updatedGallery);
    
    // Save to kvdb.io
    fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/gallery', {
      method: 'POST',
      body: JSON.stringify(updatedGallery)
    });

    // Reset Form
    setNewImageAlt('');
    setNewImageBase64('');
    // Reset file input
    const fileInput = document.getElementById('image-upload-input') as HTMLInputElement;
    if (fileInput) fileInput.value = '';

    setGalleryMsg({ type: 'success', text: 'Photo added to gallery successfully!' });
    setTimeout(() => setGalleryMsg({ type: '', text: '' }), 3000);
  };

  const handleDeleteImage = (id: number) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedGallery = gallery.filter(img => img.id !== id);
      setGallery(updatedGallery);
      fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/gallery', {
        method: 'POST',
        body: JSON.stringify(updatedGallery)
      });
    }
  };

  // Video Management
  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const finalSection = isCustomSection ? customSection.trim() : vidSection;
    if (!vidTitle || !vidUrl || !finalSection) {
      setVideoMsg({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    const newVideo: VideoItem = {
      id: String(Date.now()),
      title: vidTitle,
      url: vidUrl,
      description: vidDesc,
      section: finalSection
    };

    const updatedVideos = [newVideo, ...videos];
    setVideos(updatedVideos);
    fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/videos', {
      method: 'POST',
      body: JSON.stringify(updatedVideos)
    });

    // Reset Form
    setVidTitle('');
    setVidUrl('');
    setVidDesc('');
    setVidSection('');
    setCustomSection('');
    setIsCustomSection(false);

    setVideoMsg({ type: 'success', text: 'Video lesson added successfully!' });
    setTimeout(() => setVideoMsg({ type: '', text: '' }), 3000);
  };

  const handleDeleteVideo = (id: string) => {
    if (window.confirm('Are you sure you want to delete this video lesson?')) {
      const updatedVideos = videos.filter(v => v.id !== id);
      setVideos(updatedVideos);
      fetch('https://kvdb.io/8vmFqyCPbmJAXsKDEPxvc8/videos', {
        method: 'POST',
        body: JSON.stringify(updatedVideos)
      });
    }
  };

  const uniqueSections = Array.from(new Set(videos.map(v => v.section)));

  if (!isAuthenticated) {
    return (
      <div className="page-container animate-fade-in-up" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7f6' }}>
        <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <img src="/logo.png" alt="ATC Logo" style={{ width: '60px', height: '60px', objectFit: 'contain', background: 'white', borderRadius: '8px', padding: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', margin: '0 auto 1rem' }} />
            <h2 className="text-primary">ATC Admin Portal</h2>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Enter password to access dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="form-group">
              <label>Admin Password</label>
              <input 
                type="password" 
                required 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            
            {authError && (
              <div style={{ color: '#dc3545', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <AlertCircle size={16} /> {authError}
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary" style={{ padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <h1>Admin Dashboard</h1>
          </div>
          <button 
            onClick={handleLogout} 
            className="btn btn-outline" 
            style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem' }}
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>

      <section className="section bg-light" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          
          {/* Tab Selection */}
          <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #ddd', marginBottom: '2.5rem', paddingBottom: '0.5rem' }}>
            <button 
              className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.75rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Image size={18} /> Manage Gallery ({gallery.length})
            </button>
            <button 
              className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.75rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Video size={18} /> Manage Videos ({videos.length})
            </button>
          </div>

          {/* TAB 1: GALLERY MANAGEMENT */}
          {activeTab === 'gallery' && (
            <div className="admin-grid">
              
              {/* Form Add Photo */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="text-primary" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Plus size={20} /> Add Photo</h3>
                
                {galleryMsg.text && (
                  <div style={{ 
                    padding: '0.85rem 1rem', 
                    borderRadius: '4px', 
                    marginBottom: '1.25rem',
                    backgroundColor: galleryMsg.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: galleryMsg.type === 'success' ? '#155724' : '#721c24',
                    fontSize: '0.9rem'
                  }}>
                    {galleryMsg.text}
                  </div>
                )}

                <form onSubmit={handleAddImage} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label>Select Photo File *</label>
                    <input 
                      type="file" 
                      id="image-upload-input"
                      required 
                      accept="image/*"
                      className="form-control" 
                      onChange={handleImageFileChange}
                    />
                  </div>
                  
                  {newImageBase64 && (
                    <div style={{ marginTop: '0.5rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>Image Preview:</label>
                      <img src={newImageBase64} alt="Preview" style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #ddd' }} />
                    </div>
                  )}

                  <div className="form-group">
                    <label>Image Description (Alt Text)</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Classroom mock test, new banner..." 
                      value={newImageAlt}
                      onChange={(e) => setNewImageAlt(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <Check size={18} /> Upload to Gallery
                  </button>
                </form>
              </div>

              {/* Gallery Grid List */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="text-primary" style={{ marginBottom: '1.5rem' }}>Gallery Images</h3>
                
                {gallery.length === 0 ? (
                  <p className="text-muted">No images in gallery. Upload one to get started.</p>
                ) : (
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
                    {gallery.map(img => (
                      <div key={img.id} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', aspectRatio: '4/3' }}>
                        <img src={img.url} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s ease', cursor: 'pointer' }} className="admin-gallery-overlay">
                          <button 
                            onClick={() => handleDeleteImage(img.id)}
                            style={{ background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', padding: '0.5rem', cursor: 'pointer' }}
                            title="Delete Photo"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: VIDEOS (LEARNING) MANAGEMENT */}
          {activeTab === 'videos' && (
            <div className="admin-grid">
              
              {/* Form Add Video */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="text-primary" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Plus size={20} /> Add Video Lesson</h3>
                
                {videoMsg.text && (
                  <div style={{ 
                    padding: '0.85rem 1rem', 
                    borderRadius: '4px', 
                    marginBottom: '1.25rem',
                    backgroundColor: videoMsg.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: videoMsg.type === 'success' ? '#155724' : '#721c24',
                    fontSize: '0.9rem'
                  }}>
                    {videoMsg.text}
                  </div>
                )}

                <form onSubmit={handleAddVideo} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label>Video Title *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control" 
                      placeholder="e.g. Matrix Multiplication Part 1" 
                      value={vidTitle}
                      onChange={(e) => setVidTitle(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>YouTube Link / Video URL *</label>
                    <input 
                      type="url" 
                      required 
                      className="form-control" 
                      placeholder="e.g. https://www.youtube.com/watch?v=..." 
                      value={vidUrl}
                      onChange={(e) => setVidUrl(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>Class Section / Category *</span>
                      <button 
                        type="button" 
                        onClick={() => setIsCustomSection(!isCustomSection)}
                        style={{ border: 'none', background: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}
                      >
                        {isCustomSection ? 'Select Existing Section' : 'Create New Section'}
                      </button>
                    </label>
                    
                    {isCustomSection ? (
                      <input 
                        type="text" 
                        required 
                        className="form-control" 
                        placeholder="e.g. Class 10 Opt. Math" 
                        value={customSection}
                        onChange={(e) => setCustomSection(e.target.value)}
                      />
                    ) : (
                      <select 
                        required 
                        className="form-control" 
                        value={vidSection}
                        onChange={(e) => setVidSection(e.target.value)}
                      >
                        <option value="">-- Select Section --</option>
                        {uniqueSections.map(sec => (
                          <option key={sec} value={sec}>{sec}</option>
                        ))}
                      </select>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Video Description</label>
                    <textarea 
                      rows={3} 
                      className="form-control" 
                      placeholder="Enter a brief summary of what is taught in this video lesson..." 
                      value={vidDesc}
                      onChange={(e) => setVidDesc(e.target.value)}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <Check size={18} /> Add Lesson
                  </button>
                </form>
              </div>

              {/* Videos List */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="text-primary" style={{ marginBottom: '1.5rem' }}>Uploaded Video Lessons</h3>
                
                {videos.length === 0 ? (
                  <p className="text-muted">No video lessons uploaded yet.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {videos.map(vid => (
                      <div 
                        key={vid.id} 
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          padding: '1rem 1.5rem', 
                          border: '1px solid #eee', 
                          borderRadius: '8px',
                          background: '#fafafa'
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', maxWidth: '80%' }}>
                          <span className="course-badge text-accent" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', marginBottom: '0.25rem' }}>{vid.section}</span>
                          <h4 style={{ margin: 0, color: 'var(--text-main)' }}>{vid.title}</h4>
                          <span style={{ fontSize: '0.8rem', color: '#888', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{vid.url}</span>
                        </div>
                        <button 
                          onClick={() => handleDeleteVideo(vid.id)}
                          style={{ background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          title="Delete Video"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </section>
      
      {/* Small Inline CSS helper for overlays */}
      <style>{`
        .admin-gallery-overlay:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Admin;
