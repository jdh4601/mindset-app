import React from 'react';
import './Quotes.css';
import { ImQuotesLeft } from 'react-icons/im';
const Quotes = () => {
  return (
    <>
      <div className="quotes-container">
        <div className="text-align">
          <ImQuotesLeft size={20} className="icon1" />
        </div>
        <div className="align-box">
          <h1 className="main-text">"가벼운 산책 하기"</h1>
        </div>
      </div>
    </>
  );
};

export default Quotes;
