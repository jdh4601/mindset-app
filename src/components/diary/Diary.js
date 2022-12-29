import React, { useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import TabNavigation from '../UI/TabNavigation';
import axios from 'axios';
import './Diary.css';

const Diary = () => {
  const [texts, setTexts] = useState({
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    text5: '',
    text6: '',
  });

  const navigate = useNavigate();
  const moveToHome = () => {
    navigate('/');
  };

  const moveToRecord = () => {
    navigate('/diarylist');
  };

  const submitHandler = async e => {
    setTexts({
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
    });
    e.preventDefault();
    const res = await axios.post(
      'https://healthcare-real-yftbd.run.goorm.io/api/Post/',
      {
        content1: texts.text1,
        content2: texts.text2,
        content3: texts.text3,
        content4: texts.text4,
        content5: texts.text5,
        content6: texts.text6,
      }
    );
    console.log(res.data);
  };

  const onChangeHandler = event => {
    setTexts({ ...texts, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="app-container">
        <div className="header">
          <GrLinkPrevious className="prev" size={30} onClick={moveToHome} />
          <p className="next-text" onClick={moveToRecord}>
            기록 보기
          </p>
        </div>
        <h1 className="title">감사 일기</h1>
        <div className="question-box">
          <p className="question">1. 오늘 있었던 감사한 일은?</p>
          <input
            type="text"
            name="text1"
            value={texts.text1}
            onChange={onChangeHandler}
            className="input-field"
            placeholder="  1. 텍스트를 입력하세요"
          />
          <input
            type="text"
            name="text2"
            value={texts.text2}
            onChange={onChangeHandler}
            className="input-field"
            placeholder="  2. 텍스트를 입력하세요"
          />
        </div>
        <div className="question-box">
          <p className="question">2. 요즘 나의 최대 고민은?</p>
          <input
            type="text"
            name="text3"
            value={texts.text3}
            onChange={onChangeHandler}
            className="input-field"
            placeholder="  1. 텍스트를 입력하세요"
          />
          <input
            type="text"
            name="text4"
            value={texts.text4}
            onChange={onChangeHandler}
            className="input-field"
            placeholder="  2. 텍스트를 입력하세요"
          />
        </div>
        <div className="question-box">
          <p className="question">3. 내일의 다짐 2가지</p>
          <input
            type="text"
            name="text5"
            value={texts.text5}
            onChange={onChangeHandler}
            className="input-field"
            placeholder="  1. 텍스트를 입력하세요"
          />
          <input
            type="text"
            name="text6"
            value={texts.text6}
            onChange={onChangeHandler}
            className="input-field"
            placeholder="  2. 텍스트를 입력하세요"
          />
        </div>
        <Button
          className="submit-btn"
          onClick={submitHandler}
          variant="primary"
          size="lg"
        >
          확인
        </Button>
      </div>
      <TabNavigation />
    </>
  );
};

export default Diary;
