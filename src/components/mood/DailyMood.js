import React from 'react';
import './DailyMood.css';

const DailyMood = () => {
  const onClickHandler = e => {
    e.preventDefaut();
  };

  return (
    <div>
      <div className="emotion-container">
        <div onClick={onClickHandler} className="emotion" value="smile">
          😃
        </div>
        <div onClick={onClickHandler} className="emotion" value="happy">
          😄
        </div>
        <div onClick={onClickHandler} className="emotion" value="soso">
          🙂
        </div>
        <div onClick={onClickHandler} className="emotion" value="sad">
          🥲
        </div>
        <div onClick={onClickHandler} className="emotion" value="depression">
          😣
        </div>
      </div>
    </div>
  );
};

export default DailyMood;
