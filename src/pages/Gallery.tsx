import React, { useState, useEffect } from 'react';
import './Pages.css';
import { X } from 'lucide-react';

const DEFAULT_GALLERY = [
  { id: 0, url: '/gallery-2.jpg', alt: 'Aalok Tuition Centre Students' },
  { id: 1, url: '/gallery-3.jpg', alt: 'Director Ajay Kumar Sah teaching' },
  { id: 2, url: '/gallery-1.jpg', alt: 'Aalok Tuition Centre Class 8-12 Courses' },
  { id: 3, url: '/gallery-4.jpg', alt: 'Aalok Tuition Centre Logos' },
  { id: 4, url: '/gallery-5.jpg', alt: 'Aalok Tuition Centre CTEVT & BBS Courses' },
  { id: 5, url: '/director.png', alt: 'Director Ajay Kumar Sah' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<typeof DEFAULT_GALLERY>(DEFAULT_GALLERY);

  useEffect(() => {
    const stored = localStorage.getItem('atc_gallery_images');
    if (stored) {
      try {
        setImages(JSON.parse(stored));
      } catch (e) {
        setImages(DEFAULT_GALLERY);
      }
    } else {
      localStorage.setItem('atc_gallery_images', JSON.stringify(DEFAULT_GALLERY));
      setImages(DEFAULT_GALLERY);
    }
  }, []);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="page-container animate-fade-in-up">
      <div className="page-header bg-primary">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Glimpses of life, learning, and celebrations at Aalok Tuition Centre.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img) => (
              <div 
                key={img.id} 
                className="gallery-item"
                onClick={() => openLightbox(img.id)}
              >
                <img src={img.url} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} color="white" />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images.find(img => img.id === selectedImage)?.url} alt="Expanded view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
