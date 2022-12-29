import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrLinkPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import TabNavigation from '../UI/TabNavigation';
import './DiaryList.css';

const DiaryList = () => {
  const [diaryRecords, setDiaryRecords] = useState([]);

  const navigate = useNavigate();

  const moveToDiary = () => {
    navigate('/diary');
  };

  const getUserData = async () => {
    const res = await axios.get(
      'https://healthcare-real-yftbd.run.goorm.io/api/Post/'
    );
    const data = await res.data;
    setDiaryRecords(data);
    console.log(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="record-container">
        <div className="record-header">
          <GrLinkPrevious className="prev" size={30} onClick={moveToDiary} />
        </div>
        <h1 className="record-title">기록</h1>
        {diaryRecords.map(records => (
          <li className="list">
            <p className="date-text">{records.create_date.substr(0, 10)}</p>
            <div className="content-data">
              <p className="content-text">{records.content1}</p>
              <p className="content-text">{records.content2}</p>
              <p className="content-text">{records.content3}</p>
            </div>
          </li>
        ))}
        <TabNavigation />
      </div>
    </>
  );
};

export default DiaryList;
