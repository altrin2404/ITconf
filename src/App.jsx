import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Committees from './pages/Committees';
import CallForPapers from './pages/CallForPapers';
import Speakers from './pages/Speakers';
import ImportantDates from './pages/ImportantDates';
import Submissions from './pages/Submissions';
import Registration from './pages/Registration';
import './App.css'; // Optional, but can be removed if not needed

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/important-dates" element={<ImportantDates />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
