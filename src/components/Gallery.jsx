import React from 'react';
import './Gallery.scss';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/images/gallery1.jpg',
      alt: 'Gallery Image 1'
    },
    {
      id: 2,
      src: '/images/gallery2.jpg',
      alt: 'Gallery Image 2'
    },
    {
      id: 3,
      src: '/images/gallery3.jpg',
      alt: 'Gallery Image 3'
    },
    {
      id: 4,
      src: '/images/gallery4.jpg',
      alt: 'Gallery Image 4'
    },
    {
      id: 5,
      src: '/images/gallery5.jpg',
      alt: 'Gallery Image 5'
    },
    {
      id: 6,
      src: '/images/gallery6.jpg',
      alt: 'Gallery Image 6'
    }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;