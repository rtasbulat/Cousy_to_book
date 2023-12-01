import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Предполагается, что здесь будет ваш файл стилей для карусели

const Carousel = () => {
  const images = [
    'https://via.placeholder.com/300/0000FF/808080?text=Image+1',
    'https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+2',
    'https://via.placeholder.com/300/00FF00/000000?text=Image+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000); // Интервал смены изображений в миллисекундах (в данном случае, каждые 3 секунды)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImage ? 'slide active' : 'slide'}
        />
      ))}
    </div>
  );
};

export default Carousel;
