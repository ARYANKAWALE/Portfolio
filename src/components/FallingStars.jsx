import React, { useEffect, useRef } from 'react';
import './FallingStars.css';

const FallingStars = ({ starCount = 8 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars
    container.innerHTML = '';

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'falling-star';
      
      // Random starting position (wider range for diagonal effect)
      const startX = Math.random() * 150;
      
      // Random animation duration between 4-10 seconds
      const duration = Math.random() * 6 + 4;
      
      // Random delay for staggered effect
      const delay = Math.random() * 8;
      
      // Random length for stars (longer stars)
      const length = Math.random() * 25 + 15; // 15-40px length
      const width = Math.random() * 2 + 2; // 2-4px width
      
      // Random opacity
      const opacity = Math.random() * 0.4 + 0.6;
      
      star.style.cssText = `
        left: ${startX}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        height: ${length}px;
        width: ${width}px;
        opacity: ${opacity};
      `;
      
      container.appendChild(star);
    }
  }, [starCount]);

  return (
    <div 
      ref={containerRef}
      className="falling-stars-container"
      aria-hidden="true"
    />
  );
};

export default FallingStars;
