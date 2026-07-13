import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { confData } from '../data/conferenceData';
import useSEO from '../hooks/useSEO';

/* ── Countdown to submission deadline: 15 Oct 2026 ── */
function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      over: false,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

/* ── Country codes ── */
const COUNTRY_CODES = [
  { code: '+91', short: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+1', short: 'US', flag: '🇺🇸', name: 'USA' },
  { code: '+1', short: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: '+44', short: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+61', short: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+64', short: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
  { code: '+55', short: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: '+49', short: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', short: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+39', short: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', short: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: '+31', short: 'NL', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+46', short: 'SE', flag: '🇸🇪', name: 'Sweden' },
  { code: '+47', short: 'NO', flag: '🇳🇴', name: 'Norway' },
  { code: '+45', short: 'DK', flag: '🇩🇰', name: 'Denmark' },
  { code: '+358', short: 'FI', flag: '🇫🇮', name: 'Finland' },
  { code: '+7', short: 'RU', flag: '🇷🇺', name: 'Russia' },
  { code: '+86', short: 'CN', flag: '🇨🇳', name: 'China' },
  { code: '+81', short: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', short: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: '+60', short: 'MY', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+65', short: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: '+66', short: 'TH', flag: '🇹🇭', name: 'Thailand' },
  { code: '+62', short: 'ID', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+63', short: 'PH', flag: '🇵🇭', name: 'Philippines' },
  { code: '+84', short: 'VN', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+92', short: 'PK', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+880', short: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
  { code: '+94', short: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+977', short: 'NP', flag: '🇳🇵', name: 'Nepal' },
  { code: '+93', short: 'AF', flag: '🇦🇫', name: 'Afghanistan' },
  { code: '+98', short: 'IR', flag: '🇮🇷', name: 'Iran' },
  { code: '+964', short: 'IQ', flag: '🇮🇶', name: 'Iraq' },
  { code: '+966', short: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+971', short: 'AE', flag: '🇦🇪', name: 'UAE' },
  { code: '+972', short: 'IL', flag: '🇮🇱', name: 'Israel' },
  { code: '+90', short: 'TR', flag: '🇹🇷', name: 'Turkey' },
  { code: '+20', short: 'EG', flag: '🇪🇬', name: 'Egypt' },
  { code: '+27', short: 'ZA', flag: '🇿🇦', name: 'South Africa' },
  { code: '+234', short: 'NG', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+254', short: 'KE', flag: '🇰🇪', name: 'Kenya' },
  { code: '+52', short: 'MX', flag: '🇲🇽', name: 'Mexico' },
  { code: '+54', short: 'AR', flag: '🇦🇷', name: 'Argentina' },
  { code: '+56', short: 'CL', flag: '🇨🇱', name: 'Chile' },
  { code: '+57', short: 'CO', flag: '🇨🇴', name: 'Colombia' },
  { code: '+51', short: 'PE', flag: '🇵🇪', name: 'Peru' },
  { code: '+58', short: 'VE', flag: '🇻🇪', name: 'Venezuela' },
  { code: '+351', short: 'PT', flag: '🇵🇹', name: 'Portugal' },
  { code: '+48', short: 'PL', flag: '🇵🇱', name: 'Poland' },
  { code: '+380', short: 'UA', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+30', short: 'GR', flag: '🇬🇷', name: 'Greece' },
  { code: '+36', short: 'HU', flag: '🇭🇺', name: 'Hungary' },
  { code: '+420', short: 'CZ', flag: '🇨🇿', name: 'Czech Republic' },
  { code: '+40', short: 'RO', flag: '🇷🇴', name: 'Romania' },
  { code: '+32', short: 'BE', flag: '🇧🇪', name: 'Belgium' },
  { code: '+41', short: 'CH', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+43', short: 'AT', flag: '🇦🇹', name: 'Austria' },
];

/* ── Blank author template ── */
const blankAuthor = () => ({ name: '', affiliation: '', countryCode: '+91', countryShort: 'IN', phone: '', email: '', research: '', corresponding: false });

/* ── Custom phone-code picker ── */
function PhoneCodePicker({ value, onChange, disabled }) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const wrapRef = React.useRef();

  const selected = COUNTRY_CODES.find(c => c.short === value) || COUNTRY_CODES[0];

  const filtered = COUNTRY_CODES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.short.toLowerCase().includes(search.toLowerCase()) ||
    c.code.includes(search)
  );

  // Close on outside click
  React.useEffect(() => {
    const handler = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={wrapRef} style={{ position: 'relative', flexShrink: 0 }}>
      {/* Trigger button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => { if (!disabled) { setOpen(o => !o); setSearch(''); } }}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          height: '100%', minHeight: '38px', padding: '0 8px 0 10px',
          border: '1px solid #d0d0d0', borderRight: 'none',
          borderRadius: '6px 0 0 6px',
          background: open ? '#fdf4f4' : '#fafafa',
          cursor: disabled ? 'not-allowed' : 'pointer',
          fontFamily: 'inherit', fontSize: '0.88rem', color: '#1a1a1a',
          whiteSpace: 'nowrap', outline: 'none',
          transition: 'border-color 0.2s, background 0.2s',
          borderColor: open ? '#8B1A1A' : '#d0d0d0',
        }}
      >
        <span style={{ color: '#1a1a1a', fontWeight: 600 }}>{selected.short} {selected.code}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#888" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', marginLeft: '2px' }}>
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0,
          width: 260, background: '#fff', borderRadius: 8,
          border: '1px solid #e0e0e0', boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
          zIndex: 9999, overflow: 'hidden',
        }}>
          {/* Search */}
          <div style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0' }}>
            <input
              type="text"
              autoFocus
              placeholder="Search country…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '6px 10px', border: '1px solid #d0d0d0',
                borderRadius: 6, fontSize: '0.85rem', fontFamily: 'inherit',
                outline: 'none', boxSizing: 'border-box', color: '#1a1a1a',
              }}
            />
          </div>
          {/* List */}
          <div style={{ maxHeight: 240, overflowY: 'auto' }}>
            {filtered.length === 0 ? (
              <div style={{ padding: '12px', textAlign: 'center', fontSize: '0.82rem', color: '#aaa' }}>No results</div>
            ) : filtered.map((c, i) => (
              <div
                key={i}
                onClick={() => { onChange(c.short, c.code); setOpen(false); setSearch(''); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 12px', cursor: 'pointer', fontSize: '0.88rem',
                  background: c.short === value ? 'rgba(139,26,26,0.07)' : 'transparent',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,26,26,0.06)'}
                onMouseLeave={e => e.currentTarget.style.background = c.short === value ? 'rgba(139,26,26,0.07)' : 'transparent'}
              >
                <span style={{ fontWeight: 700, color: '#555', minWidth: 28, fontSize: '0.8rem' }}>{c.short}</span>
                <span style={{ flex: 1, color: '#1a1a1a' }}>{c.name}</span>
                <span style={{ color: '#8B1A1A', fontWeight: 700, fontSize: '0.85rem' }}>{c.code}</span>
                {c.short === value && <span style={{ color: '#8B1A1A', fontSize: '0.75rem' }}>✓</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const TRACKS = [
  'Track 1: Artificial Intelligence, Machine Learning, and Generative AI',
  'Track 2: Data Science, Natural Language Processing, and Intelligent Analytics',
  'Track 3: Edge Computing, Cloud Computing, IoT, and Smart Systems',
  'Track 4: Computer Vision, Emerging Technologies, and Intelligent Applications',
];

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

/* ── File upload helper ── */
async function uploadFile(file, path, onProgress) {
  const storageRef = ref(storage, path);
  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file);
    task.on('state_changed',
      snap => onProgress && onProgress(Math.round(snap.bytesTransferred / snap.totalBytes * 100)),
      reject,
      async () => { resolve(await getDownloadURL(task.snapshot.ref)); }
    );
  });
}

export default function SubmitPaper() {
  useSEO(
    'Submit Paper – ICICCT 2027',
    'Submit your research paper to ICICCT 2027 – International Conference on Intelligent Communications and Computing Technologies at SXCCE, Nagercoil.'
  );

  const countdown = useCountdown('2026-10-15T23:59:59');

  /* ── State ── */
  const [authors, setAuthors] = useState([{ ...blankAuthor(), corresponding: true }]);
  const [paper, setPaper] = useState({ title: '', abstract: '', keywords: '', track: '' });
  const [pdfFile, setPdfFile] = useState(null);
  const [wordFile, setWordFile] = useState(null);
  const [pdfProg, setPdfProg] = useState(0);
  const [wordProg, setWordProg] = useState(0);
  const [aiDecl, setAiDecl] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | uploading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const pdfRef = useRef();
  const wordRef = useRef();

  /* ── Author helpers ── */
  const updateAuthor = (idx, field, val) =>
    setAuthors(prev => prev.map((a, i) => i === idx ? { ...a, [field]: val } : a));

  const setCorresponding = (idx) =>
    setAuthors(prev => prev.map((a, i) => ({ ...a, corresponding: i === idx })));

  const addAuthor = () => setAuthors(prev => [...prev, blankAuthor()]);
  const removeAuthor = (idx) => setAuthors(prev => prev.filter((_, i) => i !== idx));

  /* ── File validation ── */
  const validateFile = (file, type) => {
    if (!file) return null;
    if (type === 'pdf' && file.type !== 'application/pdf') return 'Please select a PDF file.';
    if (type === 'word' && !file.name.match(/\.(doc|docx)$/i)) return 'Please select a Word (.doc/.docx) file.';
    if (file.size > MAX_FILE_BYTES) return `File must be under 10 MB (selected: ${(file.size / 1024 / 1024).toFixed(1)} MB).`;
    return null;
  };

  const handlePdfChange = (e) => {
    const f = e.target.files[0];
    const err = validateFile(f, 'pdf');
    if (err) { setErrorMsg(err); setStatus('error'); setPdfFile(null); return; }
    setPdfFile(f); setErrorMsg(''); setStatus('idle');
  };

  const handleWordChange = (e) => {
    const f = e.target.files[0];
    const err = validateFile(f, 'word');
    if (err) { setErrorMsg(err); setStatus('error'); setWordFile(null); return; }
    setWordFile(f); setErrorMsg(''); setStatus('idle');
  };

  /* ── Submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic validation
    if (!pdfFile) { setErrorMsg('Please upload your paper as a PDF file.'); setStatus('error'); return; }
    if (!wordFile) { setErrorMsg('Please upload your paper as a Word file.'); setStatus('error'); return; }
    if (!aiDecl) { setErrorMsg('Please acknowledge the AI declaration before submitting.'); setStatus('error'); return; }
    if (!paper.track) { setErrorMsg('Please select a track for your paper.'); setStatus('error'); return; }

    const corrAuthor = authors.find(a => a.corresponding) || authors[0];
    if (!corrAuthor.email) { setErrorMsg('The corresponding author must have a valid email.'); setStatus('error'); return; }

    setStatus('uploading');
    try {
      const ts = Date.now();
      const safeTitle = paper.title.replace(/[^a-z0-9]/gi, '_').slice(0, 40);

      // Upload PDF
      const pdfUrl = await uploadFile(
        pdfFile,
        `submissions/${ts}_${safeTitle}.pdf`,
        setPdfProg
      );

      // Upload Word
      const wordUrl = await uploadFile(
        wordFile,
        `submissions/${ts}_${safeTitle}.docx`,
        setWordProg
      );

      // Save to Firestore
      await addDoc(collection(db, 'paper_submissions'), {
        title: paper.title.trim(),
        abstract: paper.abstract.trim(),
        keywords: paper.keywords.trim(),
        track: paper.track,
        authors: authors.map(a => ({ ...a, fullPhone: `${a.countryCode} ${a.phone}`.trim() })),
        authorName: `${corrAuthor.name}`,
        email: corrAuthor.email,
        affiliation: corrAuthor.affiliation,
        pdfUrl,
        wordUrl,
        status: 'pending',
        submittedAt: serverTimestamp(),
      });

      setStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Submission failed. Please try again or contact us.');
      setStatus('error');
    }
  };

  const isBusy = status === 'uploading';

  if (status === 'success') {
    return (
      <div style={{ minHeight: '100vh', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: '3rem 2.5rem', maxWidth: 520, width: '100%', textAlign: 'center', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>✅</div>
          <h2 style={{ color: '#1a1a1a', fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', marginBottom: '0.75rem' }}>Submission Received!</h2>
          <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
            Thank you for submitting your paper to <strong>ICICCT 2027</strong>.
            You will receive a confirmation and status update at your registered email address.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/submissions" style={{ display: 'inline-block', padding: '0.75rem 1.75rem', background: '#8B1A1A', color: '#fff', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Back to Submissions
            </Link>
            <Link to="/" style={{ display: 'inline-block', padding: '0.75rem 1.75rem', border: '2px solid #8B1A1A', color: '#8B1A1A', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: 'Outfit, sans-serif' }}>
      <style>{`
        .sp-card { background: #fff; border: 1px solid #e8e8e8; border-radius: 10px; box-shadow: 0 2px 14px rgba(0,0,0,0.06); margin-bottom: 1.5rem; overflow: hidden; }
        .sp-card-header { background: #8B1A1A; padding: 0.9rem 1.5rem; display: flex; align-items: center; gap: 0.6rem; }
        .sp-card-header h2 { color: #fff; margin: 0; font-size: 1.1rem; font-weight: 700; }
        .sp-card-body { padding: 1.75rem; }
        .sp-field { display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
        .sp-field label { font-size: 0.88rem; font-weight: 600; color: #3d3d3d; text-align: right; }
        .sp-field label .req { color: #c00; margin-left: 2px; }
        .sp-input {
          width: 100%; padding: 0.6rem 0.9rem; border: 1px solid #d0d0d0; border-radius: 6px;
          font-size: 0.92rem; font-family: inherit; color: #1a1a1a; background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s; outline: none; box-sizing: border-box;
        }
        .sp-input:focus { border-color: #8B1A1A; box-shadow: 0 0 0 3px rgba(139,26,26,0.1); }
        .sp-input:disabled { background: #f8f8f8; opacity: 0.7; }
        .sp-textarea { resize: vertical; min-height: 110px; }
        .sp-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%23555' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; padding-right: 2rem; }
        .sp-file-btn {
          display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.55rem 1.2rem;
          border: 1.5px solid #d0d0d0; border-radius: 6px; font-size: 0.88rem; font-weight: 600;
          cursor: pointer; background: #fafafa; color: #333; transition: all 0.2s; font-family: inherit;
        }
        .sp-file-btn:hover { border-color: #8B1A1A; color: #8B1A1A; background: rgba(139,26,26,0.04); }
        .sp-file-btn.selected { border-color: #2e7d32; color: #2e7d32; background: rgba(46,125,50,0.06); }
        .sp-file-btn.required-err { border-color: #c62828; color: #c62828; background: rgba(198,40,40,0.06); }
        .sp-progress { height: 4px; border-radius: 4px; background: #e8e8e8; margin-top: 6px; overflow: hidden; }
        .sp-progress-inner { height: 100%; background: linear-gradient(90deg, #8B1A1A, #c0392b); transition: width 0.3s; border-radius: 4px; }
        .sp-add-author-btn {
          width: 100%; border: 1.5px dashed #c0c0c0; border-radius: 8px; padding: 0.75rem;
          font-size: 0.9rem; font-weight: 600; color: #555; background: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-family: inherit;
          transition: border-color 0.2s, color 0.2s;
        }
        .sp-add-author-btn:hover { border-color: #8B1A1A; color: #8B1A1A; }
        .sp-author-block { border: 1px solid #ebebeb; border-radius: 8px; padding: 1.25rem; margin-bottom: 1rem; position: relative; background: #fafafa; }
        .sp-author-label { font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #8B1A1A; margin-bottom: 1rem; }
        .sp-corr-row { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; }
        .sp-corr-row input[type="checkbox"] { accent-color: #8B1A1A; width: 15px; height: 15px; cursor: pointer; }
        .sp-corr-row label { font-size: 0.85rem; color: #444; cursor: pointer; }
        .sp-remove-btn { position: absolute; top: 10px; right: 12px; background: none; border: none; color: #aaa; font-size: 1.1rem; cursor: pointer; line-height: 1; padding: 4px 6px; border-radius: 4px; }
        .sp-remove-btn:hover { color: #c62828; background: rgba(198,40,40,0.08); }
        .sp-submit-btn {
          display: block; width: 100%; padding: 1rem; background: #8B1A1A; color: #fff; border: none;
          border-radius: 8px; font-size: 1.05rem; font-weight: 800; cursor: pointer; font-family: inherit;
          letter-spacing: 0.04em; transition: background 0.2s, transform 0.2s;
        }
        .sp-submit-btn:hover:not(:disabled) { background: #6b1313; transform: translateY(-1px); }
        .sp-submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .sp-alert { border-radius: 8px; padding: 0.85rem 1rem; margin-bottom: 1.25rem; font-weight: 600; font-size: 0.9rem; display: flex; align-items: flex-start; gap: 0.5rem; }
        .sp-alert-error { background: #fdecea; border: 1px solid #ef9a9a; color: #c62828; }
        .sp-info-list { list-style: disc; padding-left: 1.5rem; margin: 0; }
        .sp-info-list li { font-size: 0.88rem; color: #555; line-height: 1.7; }
        .sp-info-list li a { color: #8B1A1A; font-weight: 700; }
        .sp-countdown { display: flex; gap: 0.5rem; align-items: center; font-size: 0.92rem; color: #444; flex-wrap: wrap; }
        .sp-countdown b { color: #8B1A1A; }
        .sp-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .sp-banner { background: #8B1A1A; color: #fff; padding: 1.25rem 1.75rem; border-radius: 10px; margin-bottom: 1.5rem; }
        .sp-banner h1 { font-size: 1.4rem; font-weight: 800; margin-bottom: 0.25rem; color: #fff; }
        .sp-banner p { font-size: 0.9rem; color: rgba(255,255,255,0.82); margin: 0; }
        .sp-decl-row { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: #fffbf0; border: 1px solid #ffe0a0; border-radius: 8px; margin-bottom: 1.25rem; }
        .sp-decl-row input[type="checkbox"] { accent-color: #8B1A1A; width: 16px; height: 16px; margin-top: 2px; flex-shrink: 0; cursor: pointer; }
        .sp-decl-row label { font-size: 0.88rem; color: #444; line-height: 1.6; cursor: pointer; }
        .sp-decl-row label a { color: #8B1A1A; font-weight: 700; }
        .sp-phone-wrap { display: flex; gap: 0; align-items: stretch; width: 100%; }
        .sp-phone-code {
          flex-shrink: 0; width: 170px; padding: 0.6rem 0.7rem;
          border: 1px solid #d0d0d0; border-right: none; border-radius: 6px 0 0 6px;
          font-size: 0.85rem; font-family: inherit; color: #1a1a1a; background: #fafafa;
          outline: none; cursor: pointer; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24'%3E%3Cpath fill='%23555' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 8px center; padding-right: 24px;
          transition: border-color 0.2s;
        }
        .sp-phone-code:focus { border-color: #8B1A1A; outline: none; }
        .sp-phone-code:disabled { opacity: 0.7; }
        .sp-phone-num { border-radius: 0 6px 6px 0 !important; flex: 1; min-width: 0; }
        .sp-phone-wrap:focus-within .sp-phone-code { border-color: #8B1A1A; }
        @media (max-width: 640px) {
          .sp-field { grid-template-columns: 1fr; }
          .sp-field label { text-align: left; }
          .sp-grid2 { grid-template-columns: 1fr; }
          .sp-phone-code { width: 130px; font-size: 0.78rem; }
        }
      `}</style>

      {/* ── Top Navigation Bar ── */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e8e8e8', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg,#8B1A1A,#c0392b)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1rem' }}>C</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1a1a1a', letterSpacing: '-0.01em' }}>ICICCT 2027</div>
            <div style={{ fontSize: '0.7rem', color: '#888', lineHeight: 1 }}>Paper Submission System</div>
          </div>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/submissions" style={{ fontSize: '0.88rem', color: '#555', textDecoration: 'none', fontWeight: 600 }}>Guidelines</Link>
          <Link to="/submit-paper" style={{ fontSize: '0.88rem', color: '#8B1A1A', textDecoration: 'none', fontWeight: 700, borderBottom: '2px solid #8B1A1A', paddingBottom: '2px' }}>Submission</Link>
          <Link to="/important-dates" style={{ fontSize: '0.88rem', color: '#555', textDecoration: 'none', fontWeight: 600 }}>Dates</Link>
        </nav>
      </header>

      {/* ── Body ── */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '2rem 1rem 4rem' }}>

        {/* Banner */}
        <div className="sp-banner">
          <h1>📄 Paper Submission</h1>
          <p>{confData.fullName} ({confData.name})</p>
        </div>

        {/* Countdown + info row */}
        <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 10, padding: '1rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: '0.25rem' }}>Submission Deadline</div>
            <div className="sp-countdown">
              {countdown.over
                ? <span style={{ color: '#c62828', fontWeight: 700 }}>Deadline has passed</span>
                : <><b>{countdown.days}</b> Days&nbsp; <b>{countdown.hours}</b> Hours&nbsp; <b>{countdown.minutes}</b> Min&nbsp; <b>{countdown.seconds}</b> Sec</>
              }
            </div>
          </div>
          <div style={{ fontSize: '0.82rem', color: '#555' }}>
            Required fields are marked with <span style={{ color: '#c00', fontWeight: 700 }}>*</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>

          {/* ── AUTHOR INFORMATION ── */}
          <div className="sp-card">
            <div className="sp-card-header">
              <span>👤</span>
              <h2>Author Information</h2>
            </div>
            <div className="sp-card-body">
              <p style={{ fontSize: '0.88rem', color: '#555', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                Please fill in all information in the order of authors listed in the paper to ensure accuracy in acceptance notifications.
                You can designate one author as the <strong>corresponding author</strong>, who will receive email notifications from the system.
              </p>
              <ul className="sp-info-list" style={{ marginBottom: '1.25rem' }}>
                <li>Email addresses are for communication purposes and will not be displayed publicly.</li>
                <li>The paper should include annotations for the corresponding author, including their email information.</li>
              </ul>

              {authors.map((author, idx) => (
                <div className="sp-author-block" key={idx}>
                  <div className="sp-author-label">Author {idx + 1}</div>
                  {idx > 0 && (
                    <button type="button" className="sp-remove-btn" onClick={() => removeAuthor(idx)} title="Remove author">✕</button>
                  )}

                  <div className="sp-grid2">
                    <div className="sp-field" style={{ gridColumn: 'span 2' }}>
                      <label>Name<span className="req">*</span></label>
                      <input className="sp-input" type="text" placeholder="Full name as on paper" value={author.name} onChange={e => updateAuthor(idx, 'name', e.target.value)} required disabled={isBusy} />
                    </div>
                    <div className="sp-field" style={{ gridColumn: 'span 2' }}>
                      <label>Affiliation<span className="req">*</span></label>
                      <input className="sp-input" type="text" placeholder="University / Institution name" value={author.affiliation} onChange={e => updateAuthor(idx, 'affiliation', e.target.value)} required disabled={isBusy} />
                    </div>
                    <div className="sp-field" style={{ gridColumn: 'span 2' }}>
                      <label>Phone<span className="req">*</span></label>
                      <div className="sp-phone-wrap">
                        <PhoneCodePicker
                          value={author.countryShort || 'IN'}
                          onChange={(short, code) => {
                            setAuthors(prev => prev.map((a, i) =>
                              i === idx ? { ...a, countryShort: short, countryCode: code } : a
                            ));
                          }}
                          disabled={isBusy}
                        />
                        <input
                          className="sp-input sp-phone-num"
                          type="tel"
                          placeholder="XXXXX XXXXX"
                          value={author.phone}
                          onChange={e => updateAuthor(idx, 'phone', e.target.value)}
                          required
                          disabled={isBusy}
                        />
                      </div>
                    </div>
                    <div className="sp-field" style={{ gridColumn: 'span 2' }}>
                      <label>Email<span className="req">*</span></label>
                      <input className="sp-input" type="email" placeholder="author@university.edu" value={author.email} onChange={e => updateAuthor(idx, 'email', e.target.value)} required disabled={isBusy} />
                    </div>
                    <div className="sp-field" style={{ gridColumn: 'span 2' }}>
                      <label>Research Field</label>
                      <input className="sp-input" type="text" placeholder="e.g., Artificial Intelligence" value={author.research} onChange={e => updateAuthor(idx, 'research', e.target.value)} disabled={isBusy} />
                    </div>
                  </div>

                  <div className="sp-corr-row">
                    <input
                      type="checkbox"
                      id={`corr-${idx}`}
                      checked={author.corresponding}
                      onChange={() => setCorresponding(idx)}
                      disabled={isBusy}
                    />
                    <label htmlFor={`corr-${idx}`}>Corresponding author (receives all email notifications)</label>
                  </div>
                </div>
              ))}

              <button type="button" className="sp-add-author-btn" onClick={addAuthor} disabled={isBusy}>
                <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>⊕</span> Click here to add more authors
              </button>
            </div>
          </div>

          {/* ── PAPER INFO ── */}
          <div className="sp-card">
            <div className="sp-card-header">
              <span>📝</span>
              <h2>Paper Info</h2>
            </div>
            <div className="sp-card-body">
              <p style={{ fontSize: '0.88rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                The title and abstract should be entered as plain text; they should not contain HTML elements.
                Type a list of keywords, one per line. You should specify at least <strong>three keywords</strong>.
              </p>

              <div className="sp-field">
                <label>Track<span className="req">*</span></label>
                <select className="sp-input sp-select" value={paper.track} onChange={e => setPaper(p => ({ ...p, track: e.target.value }))} required disabled={isBusy}>
                  <option value="">— Select a track —</option>
                  {TRACKS.map((t, i) => <option key={i} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="sp-field">
                <label>Title<span className="req">*</span></label>
                <input className="sp-input" type="text" placeholder="Full paper title" value={paper.title} onChange={e => setPaper(p => ({ ...p, title: e.target.value }))} required disabled={isBusy} />
              </div>

              <div className="sp-field" style={{ alignItems: 'flex-start' }}>
                <label style={{ paddingTop: '0.6rem' }}>Abstract<span className="req">*</span></label>
                <textarea className="sp-input sp-textarea" placeholder="Enter your abstract (plain text only, no HTML)" value={paper.abstract} onChange={e => setPaper(p => ({ ...p, abstract: e.target.value }))} required disabled={isBusy} />
              </div>

              <div className="sp-field" style={{ alignItems: 'flex-start' }}>
                <label style={{ paddingTop: '0.6rem' }}>Keywords<span className="req">*</span></label>
                <textarea className="sp-input" style={{ minHeight: 80, resize: 'vertical' }} placeholder={"Deep Learning\nIoT\nEdge Computing\n(one keyword per line, minimum 3)"} value={paper.keywords} onChange={e => setPaper(p => ({ ...p, keywords: e.target.value }))} required disabled={isBusy} />
              </div>
            </div>
          </div>

          {/* ── FILES ── */}
          <div className="sp-card">
            <div className="sp-card-header">
              <span>📎</span>
              <h2>Files</h2>
            </div>
            <div className="sp-card-body">
              <ul className="sp-info-list" style={{ marginBottom: '1.5rem' }}>
                <li>The paper should include annotations for the corresponding author, including their email information.</li>
                <li>The paper should contain author information, email addresses, institutional affiliations, and "Keywords", wherein the content in any included figures is clear and recognizable.</li>
                <li>The paper content should be complete, with titles aligning with the research content.</li>
                <li>Maximum file size: <strong>10 MB</strong> per file.</li>
              </ul>

              {/* PDF Upload */}
              <div className="sp-field" style={{ alignItems: 'flex-start' }}>
                <label style={{ paddingTop: '0.5rem' }}>Paper PDF<span className="req">*</span></label>
                <div>
                  <input type="file" accept=".pdf" ref={pdfRef} style={{ display: 'none' }} onChange={handlePdfChange} disabled={isBusy} />
                  <button
                    type="button"
                    className={`sp-file-btn ${pdfFile ? 'selected' : ''}`}
                    onClick={() => pdfRef.current?.click()}
                    disabled={isBusy}
                  >
                    <span>📄</span>
                    {pdfFile ? `✓ ${pdfFile.name} (${(pdfFile.size / 1024 / 1024).toFixed(1)} MB)` : 'Upload PDF file (Required)'}
                  </button>
                  {isBusy && pdfFile && (
                    <div className="sp-progress" style={{ width: 300, marginTop: 8 }}>
                      <div className="sp-progress-inner" style={{ width: `${pdfProg}%` }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Word Upload */}
              <div className="sp-field" style={{ alignItems: 'flex-start', marginTop: '0.75rem' }}>
                <label style={{ paddingTop: '0.5rem' }}>Paper Word<span className="req">*</span></label>
                <div>
                  <input type="file" accept=".doc,.docx" ref={wordRef} style={{ display: 'none' }} onChange={handleWordChange} disabled={isBusy} />
                  <button
                    type="button"
                    className={`sp-file-btn ${wordFile ? 'selected' : ''}`}
                    onClick={() => wordRef.current?.click()}
                    disabled={isBusy}
                  >
                    <span>📘</span>
                    {wordFile ? `✓ ${wordFile.name} (${(wordFile.size / 1024 / 1024).toFixed(1)} MB)` : 'Upload Word file (Required)'}
                  </button>
                  {isBusy && wordFile && (
                    <div className="sp-progress" style={{ width: 300, marginTop: 8 }}>
                      <div className="sp-progress-inner" style={{ width: `${wordProg}%` }} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── AI DECLARATION ── */}
          <div className="sp-decl-row">
            <input
              type="checkbox"
              id="ai-decl"
              checked={aiDecl}
              onChange={e => setAiDecl(e.target.checked)}
              disabled={isBusy}
            />
            <label htmlFor="ai-decl">
              I have read and am aware of the announcement of the{' '}
              <a href="/submissions#ai-guidelines" target="_blank" rel="noopener noreferrer">
                'Declaration of Generative AI in Scientific Writing'
              </a>
              . I confirm that no AI-generated content has been used as-is in this paper, and I take full responsibility for all content in this submission.
            </label>
          </div>

          {/* Error message */}
          {(status === 'error') && (
            <div className="sp-alert sp-alert-error">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Submit */}
          <button type="submit" className="sp-submit-btn" disabled={isBusy}>
            {isBusy
              ? `Uploading… PDF ${pdfProg}%  |  Word ${wordProg}%`
              : '✉ Submit Paper'}
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#aaa', marginTop: '1rem' }}>
            By submitting, you agree to the{' '}
            <Link to="/submissions#editorial-policy" style={{ color: '#8B1A1A' }}>editorial policy</Link>
            {' '}of ICICCT 2027. Files are securely stored and only accessible to the organizing committee.
          </p>
        </form>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #e8e8e8', background: '#fff', padding: '1rem', textAlign: 'center', fontSize: '0.78rem', color: '#aaa' }}>
        Copyright © ICICCT 2027 | St. Xavier's Catholic College of Engineering, Nagercoil
      </div>
    </div>
  );
}
