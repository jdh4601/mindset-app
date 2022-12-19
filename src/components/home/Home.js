import React from 'react';
import Quotes from '../quote/Quotes';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaLeaf } from 'react-icons/fa';
import ToggleButtonGroupUncontrolled from '../UI/ToggleButtonGroupUncontrolled';
import Cards from '../UI/Cards';
import TabNavigation from './TabNavigation';
import './Home.css';

const Home = () => {
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
          <Cards name="Calming Sounds" color="green" />
          <Cards name="Gratitude Journal" color="pink" />
          <Cards name="Daily Mood" color="yellow" />
          <Cards name="Tips For Sleeping" color="blue" />
        </div>
      </div>
      <div className="wrapper">
        <TabNavigation />
      </div>
    </div>
  );
};

export default Home;
