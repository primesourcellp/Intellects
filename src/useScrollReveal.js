// src/useScrollReveal.js
import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Set to true when it enters
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once visible
        if (ref.current) observer.unobserve(ref.current);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

export default useScrollReveal;