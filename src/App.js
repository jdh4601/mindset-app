import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import CalmingSound from './components/calm/CalmingSound';
import Diary from './components/diary/Diary';
import TipsForSleep from './components/tips/TipsForSleep';
import DailyMood from './components/mood/DailyMood';
import Profile from './components/profile/Profile';
import Statistic from './components/statistic/Statistic';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calmingsound" element={<CalmingSound />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/tipsforsleep" element={<TipsForSleep />} />
        <Route path="/dailymood" element={<DailyMood />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </>
  );
}

export default App;
