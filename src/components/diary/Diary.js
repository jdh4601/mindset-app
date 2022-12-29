import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import './Diary.css';
import { useNavigate } from 'react-router-dom';

const Diary = () => {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate('/');
  };

  return (
    <>
      <div className="container">
        <GrLinkPrevious size={30} onClick={moveToHome} />
        <h1 className="title">Diary</h1>
      </div>
    </>
  );
};

export default Diary;
