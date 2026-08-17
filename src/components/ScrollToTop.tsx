import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/': 'The Elephant Rose Foundation',
  '/about': 'About Us | The Elephant Rose Foundation',
  '/features': 'Features & Focus Areas | The Elephant Rose Foundation',
  '/our-work': 'Our Work & Impact | The Elephant Rose Foundation',
  '/contact': 'Contact Us & Donate | The Elephant Rose Foundation',
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Dynamically update document title based on route
    const title = routeTitles[pathname] || 'The Elephant Rose Foundation';
    document.title = title;

    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}
