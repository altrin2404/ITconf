import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));
const Committees = lazy(() => import('./pages/Committees'));
const CallForPapers = lazy(() => import('./pages/CallForPapers'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Submissions = lazy(() => import('./pages/Submissions'));
const Registration = lazy(() => import('./pages/Registration'));
const Program = lazy(() => import('./pages/Program'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const ImportantDates = lazy(() => import('./pages/ImportantDates'));
import './index.css';

/* ─── Premium Flow Cursor ─── */
function CursorFlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const noCursor = document.createElement('style');
    noCursor.textContent = `@media (min-width: 1025px) and (pointer: fine) { *, *::before, *::after { cursor: none !important; } }`;
    document.head.appendChild(noCursor);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hovering = false;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      hovering = !!(el && el.closest('a,button,[role="button"],input,textarea,select,label'));
    };

    window.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      // Ring follows mouse with faster spring physics
      ring.x += (mouse.x - ring.x) * 0.45;
      ring.y += (mouse.y - ring.y) * 0.45;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(${hovering ? 0 : 1})`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) scale(${hovering ? 1.5 : 1})`;
        ringRef.current.style.borderColor = hovering ? 'rgba(139,26,26,0.9)' : 'rgba(139,26,26,0.45)';
        ringRef.current.style.background = hovering ? 'rgba(139,26,26,0.08)' : 'transparent';
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.head.removeChild(noCursor);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        @media (max-width: 1024px), (pointer: coarse) {
          .custom-cursor-element {
            display: none !important;
          }
        }
      `}</style>
      
      {/* Flowing Ring */}
      <div
        ref={ringRef}
        className="custom-cursor-element"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '38px', height: '38px',
          marginLeft: '-19px', marginTop: '-19px',
          border: '1.5px solid rgba(139,26,26,0.45)',
          boxShadow: '0 0 8px rgba(139,26,26,0.15)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform, background, border-color',
          transition: 'background 0.3s, border-color 0.3s'
        }}
      />

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="custom-cursor-element"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '6px', height: '6px',
          marginLeft: '-3px', marginTop: '-3px',
          background: '#8B1A1A',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform'
        }}
      />
    </>
  );
}

/* ─── Scroll to top on navigation ─── */
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorFlow />
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="main-content">
          <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>Loading...</div>}>
            <Routes>
              <Route path="/"                element={<Home />} />
              <Route path="/committees"      element={<Committees />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/speakers"        element={<Speakers />} />
              <Route path="/submissions"     element={<Submissions />} />
              <Route path="/registration"    element={<Registration />} />
              <Route path="/important-dates" element={<ImportantDates />} />
              <Route path="/program"         element={<Program />} />
              <Route path="/faq"             element={<FAQ />} />
              <Route path="/contact"         element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
