import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "./animated-testimonials.css";

export const AnimatedTestimonials = ({ testimonials, autoPlay = true }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <div className="testimonials-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${isActive(index) ? "active" : ""}`}
              style={{
                transform: `translateX(${(index - active) * 100}%) rotateY(${
                  isActive(index) ? 0 : randomRotateY()
                }deg)`,
                opacity: isActive(index) ? 1 : 0.7,
              }}
            >
              <div className="video-container">
                <video
                  src={testimonial.src}
                  className="testimonial-video"
                  autoPlay={isActive(index)}
                  muted
                  loop
                  playsInline
                  preload={
                    isActive(index) ||
                    index === active + 1 ||
                    index === active - 1
                      ? "auto"
                      : "none"
                  }
                  loading="lazy"
                  style={{ willChange: isActive(index) ? "transform" : "auto" }}
                />
                <div className="video-overlay" />
              </div>
              <div className="testimonial-text">
                <blockquote className="quote">"{testimonial.quote}"</blockquote>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-designation">
                    {testimonial.designation}
                  </div>
                  {testimonial.technologies && (
                    <div className="technologies">
                      {testimonial.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {testimonial.link && (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button
            onClick={handlePrev}
            className="nav-button prev-button"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="nav-button next-button"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`indicator ${isActive(index) ? "active" : ""}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
