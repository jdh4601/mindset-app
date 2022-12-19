import React from 'react';
import './Quotes.css';
import { ImQuotesLeft } from 'react-icons/im';
const Quotes = () => {
  return (
    <>
      <div className="quotes-container">
        <div className="text-align">
          <ImQuotesLeft size={20} className="icon1" />
          <p className="sub-text">Daily Quote</p>
        </div>
        <div className="align-box">
          <h1 className="main-text">"Quotes..."</h1>
        </div>
      </div>
    </>
  );
};

export default Quotes;
