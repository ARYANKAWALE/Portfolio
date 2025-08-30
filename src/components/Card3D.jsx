import { useState, useRef } from 'react';
import './Card3D.css';

const Card3D = ({ 
  children, 
  className = '', 
  intensity = 8, 
  scale = 1.02,
  glowColor = 'rgba(37, 99, 235, 0.2)',
  perspective = 1000 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotX = -(mouseY / rect.height) * intensity;
    const rotY = (mouseX / rect.width) * intensity;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={`card-3d-container ${className}`}
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={cardRef}
        className={`card-3d ${isHovered ? 'hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? scale : 1})`,
          '--glow-color': glowColor,
        }}
      >
        <div className="card-3d-content">
          {children}
        </div>
        
        {/* Glow effect */}
        <div className="card-3d-glow"></div>
        
        {/* Shine effect */}
        <div 
          className="card-3d-shine"
          style={{
            background: `linear-gradient(${rotateY * 2 + 45}deg, 
              transparent 30%, 
              rgba(255, 255, 255, 0.1) 50%, 
              transparent 70%)`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card3D;
