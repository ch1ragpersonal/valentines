import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Letter, Passcode, Question, Recap, Timer, Music, Picture } from './components';
import './index.css';

function App() {
  return (
    <Router basename="/valentines">
      <Routes>
        <Route path="/" element={<Passcode />} />
        <Route path="/question" element={<Question />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/recap/music" element={<Music />} />
        <Route path="/recap/pictures" element={<Picture />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
