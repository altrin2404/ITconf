import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));
const Committees = lazy(() => import('./pages/Committees'));
const CallForPapers = lazy(() => import('./pages/CallForPapers'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Submissions  = lazy(() => import('./pages/Submissions'));
const SubmitPaper  = lazy(() => import('./pages/SubmitPaper'));
const Registration = lazy(() => import('./pages/Registration'));
const Program = lazy(() => import('./pages/Program'));
const Contact = lazy(() => import('./pages/Contact'));
const ImportantDates = lazy(() => import('./pages/ImportantDates'));
const Proceedings = lazy(() => import('./pages/Proceedings'));
const Journal = lazy(() => import('./pages/Journal'));
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
      // Smoother, slightly lazier spring physics for a more elegant follow
      ring.x += (mouse.x - ring.x) * 0.2;
      ring.y += (mouse.y - ring.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(${hovering ? 0 : 1})`;
        dotRef.current.style.opacity = hovering ? '0' : '1';
      }
      
      if (ringRef.current) {
        // Professional hover effect: scales up slightly, border softens, subtle blur & fill
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) scale(${hovering ? 1.5 : 1})`;
        ringRef.current.style.borderWidth = hovering ? '0px' : '1.5px';
        ringRef.current.style.background = hovering ? '#fff' : 'transparent';
        ringRef.current.style.opacity = hovering ? '0.2' : '1';
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
          width: '24px', height: '24px',
          marginLeft: '-12px', marginTop: '-12px',
          border: '1.5px solid #fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'difference',
          willChange: 'transform, background, border-width, opacity',
          transition: 'background 0.3s ease, border-width 0.3s ease, opacity 0.3s ease'
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
          background: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          willChange: 'transform, opacity',
          transition: 'opacity 0.2s ease'
        }}
      />
    </>
  );
}

/* ─── Scroll to top on navigation ─── */
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const PageLoader = () => (
  <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .default-spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #8B1A1A;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
      }
    `}</style>
    <div className="default-spinner"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorFlow />
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"                element={<Home />} />
              <Route path="/committees"      element={<Committees />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/speakers"        element={<Speakers />} />
              <Route path="/submissions"     element={<Submissions />} />
              <Route path="/submit-paper"   element={<SubmitPaper />} />
              <Route path="/registration"    element={<Registration />} />
              <Route path="/important-dates" element={<ImportantDates />} />
              <Route path="/program"         element={<Program />} />
              <Route path="/publication/proceedings" element={<Proceedings />} />
              <Route path="/publication/journal" element={<Journal />} />
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
