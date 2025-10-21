// src/AnimatedSection.jsx
import React from 'react';
import useScrollReveal from './useScrollReveal';

const AnimatedSection = ({ id, children, className = '', threshold = 0.2, animationType = 'fade-in-up' }) => {
  const [ref, isVisible] = useScrollReveal({ threshold });

  // Base classes for animation control
  const baseClasses = 'transition-all duration-700 ease-out';
  let animationClasses = 'opacity-0 transform';

  if (isVisible) {
    animationClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';
  } else {
    // Determine initial invisible state based on animation type
    switch (animationType) {
      case 'fade-in-left':
        animationClasses += ' -translate-x-10';
        break;
      case 'fade-in-right':
        animationClasses += ' translate-x-10';
        break;
      case 'zoom-in':
        animationClasses += ' scale-90';
        break;
      case 'fade-in-up':
      default:
        animationClasses += ' translate-y-10';
        break;
    }
  }

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 ${className} ${baseClasses} ${animationClasses}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;