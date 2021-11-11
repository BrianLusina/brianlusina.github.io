import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to Top Component
 * This handles smooth transition of pages from bottom to top on each page change.
 * */
export default function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}