import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    setVisits((visits) => visits + 1);
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home visits={visits} bannerId="B00888617" />} />
        <Route path="/about" element={<About visits={visits} />} />
        <Route path="/contact" element={<Contact visits={visits} />} />
      </Routes>
    </Router>
  );
};

export default App;
