import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Committees from './pages/Committees';
import CallForPapers from './pages/CallForPapers';
import Speakers from './pages/Speakers';
import Submissions from './pages/Submissions';
import Registration from './pages/Registration';

import Program from './pages/Program';
import History from './pages/History';
import Contact from './pages/Contact';
import './index.css';

/* ─── Global mouse-following glow ─── */
function CursorGlow() {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      // Smooth interpolation for the large glow
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      
      // Smooth interpolation for the outer ring (faster than glow)
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${target.current.x}px`;
        trailRef.current.style.top = `${target.current.y}px`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Large soft glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(139,92,246,0.04) 30%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          marginLeft: '-300px', marginTop: '-300px',
          willChange: 'transform',
          mixBlendMode: 'screen',
        }}
      />
      {/* Following outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '40px', height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(56,189,248,0.5)',
          boxShadow: '0 0 15px rgba(56,189,248,0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          marginLeft: '-20px', marginTop: '-20px',
          willChange: 'transform',
        }}
      />
      {/* Small bright dot */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          width: '8px', height: '8px',
          borderRadius: '50%',
          background: '#38bdf8',
          boxShadow: '0 0 10px #38bdf8, 0 0 20px #818cf8, 0 0 30px #e879f9',
          pointerEvents: 'none',
          zIndex: 10000,
          marginLeft: '-4px', marginTop: '-4px',
          transition: 'left 0.02s linear, top 0.02s linear',
          willChange: 'left, top',
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
      <CursorGlow />
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/registration" element={<Registration />} />

            <Route path="/program" element={<Program />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
