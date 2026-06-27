import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
