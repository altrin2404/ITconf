import { useEffect } from 'react';

/**
 * Custom hook to register reveal animations on elements marked with [data-reveal].
 * Animates elements dynamically as they scroll into view.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
