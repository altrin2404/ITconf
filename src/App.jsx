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
import Publication from './pages/Publication';
import Program from './pages/Program';
import History from './pages/History';
import Contact from './pages/Contact';
import './index.css';

/* ─── Global mouse-following glow ─── */
function CursorGlow() {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
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
      {/* Large soft glow — smoothly trails the mouse */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          marginLeft: '-250px',
          marginTop: '-250px',
          willChange: 'transform',
          mixBlendMode: 'screen',
        }}
      />
      {/* Small bright dot — sticks to the cursor */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'rgba(56,189,248,0.5)',
          boxShadow: '0 0 12px rgba(56,189,248,0.4), 0 0 40px rgba(56,189,248,0.15)',
          pointerEvents: 'none',
          zIndex: 9999,
          marginLeft: '-3px',
          marginTop: '-3px',
          transition: 'left 0.05s linear, top 0.05s linear',
          willChange: 'left, top',
        }}
      />
    </>
  );
}

function App() {
  return (
    <Router>
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
            <Route path="/publication" element={<Publication />} />
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
