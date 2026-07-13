import { useEffect } from 'react';

/**
 * Custom hook to dynamically update meta descriptions for SEO.
 * @param {string} title - The page title suffix (unused now)
 * @param {string} description - The meta description for search engines
 */
export default function useSEO(title, description) {
  useEffect(() => {
    let metaDesc = document.querySelector('meta[name="description"]');
    let prevDesc = '';
    if (metaDesc) {
      prevDesc = metaDesc.getAttribute('content') || '';
    } else if (description) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }

    if (description && metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    return () => {
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, [description]);
}

