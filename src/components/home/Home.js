import React from 'react';
import Quotes from '../quote/Quotes';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaLeaf } from 'react-icons/fa';
import ToggleButtonGroupUncontrolled from '../UI/ToggleButtonGroupUncontrolled';
import Cards from '../UI/Cards';
import TabNavigation from '../UI/TabNavigation';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const moveToCalmingSound = () => {
    navigate('/calmingsound');
  };

  const moveToDiary = () => {
    navigate('/diary');
  };

  const moveToDailymood = () => {
    navigate('/dailymood');
  };

  const moveToTipsforsleep = () => {
    navigate('/tipsforsleep');
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
      <ToggleButtonGroupUncontrolled />
      <Quotes />
      <p className="subtext">Recent</p>
      <div className="align-box">
        <div className="card-container">
          <Cards
            name="Calming Sounds"
            color="green"
            moveTo={moveToCalmingSound}
          />
          <Cards name="Gratitude Journal" color="pink" moveTo={moveToDiary} />
          <Cards name="Daily Mood" color="yellow" moveTo={moveToDailymood} />
          <Cards
            name="Tips For Sleeping"
            color="blue"
            moveTo={moveToTipsforsleep}
          />
        </div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default Home;
