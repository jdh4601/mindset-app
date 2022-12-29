import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Diary from './components/diary/Diary';
import DailyMood from './components/mood/DailyMood';
import Profile from './components/profile/Profile';
import Statistic from './components/statistic/Statistic';
import Calendar from './components/mood/Calendar';
import DiaryList from './components/diary/DiaryList';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/dailymood" element={<DailyMood />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/diarylist" element={<DiaryList />} />
      </Routes>
    </>
  );
}

export default App;
