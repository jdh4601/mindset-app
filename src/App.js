import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import CalmingSound from './components/calm/CalmingSound';
import Diary from './components/diary/Diary';
import TipsForSleep from './components/tips/TipsForSleep';
import DailyMood from './components/mood/DailyMood';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sleep" element={<CalmingSound />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/tips" element={<TipsForSleep />} />
          <Route path="/dailymood" element={<DailyMood />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
