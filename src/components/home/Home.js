import React from 'react';
import Quotes from '../quote/Quotes';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaLeaf } from 'react-icons/fa';
import Cards from '../UI/Cards';
import TabNavigation from '../UI/TabNavigation';
import DailyMood from '../mood/DailyMood';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const viewCalendar = () => {
    navigate('/calendar');
  };

  return (
    <div className="home">
      <div className="header-container">
        <h1 className="title">
          <FaLeaf size={34} />
          <p>Mindset</p>
        </h1>
        <BiSearchAlt2 size={30} className="search" />
      </div>
      <div className="align-box">
        <p className="main-text">✅ 오늘의 미션</p>
        <Quotes />
      </div>
      <div className="align-box">
        <div className="card-container">
          <div className="text-align">
            <p className="main-text">🙂 오늘의 기분</p>
            <p onClick={viewCalendar} className="subtext">
              전체보기
            </p>
          </div>
          <DailyMood />
        </div>
        <div className="card-container">
          <div className="text-align">
            <p className="main-text">🙏 감사 일기</p>
          </div>
          <Cards color="pink" />
        </div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default Home;
