import React from 'react';
import styled from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';
import './Card.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 380px;
  height: 220px;
  margin-bottom: 30px;
  border-radius: 20px;
  border-style: none;
  ${({ color }) =>
    color === 'blue' &&
    `
      background-image: linear-gradient(to right, #441dfc, #4e81eb);
    `}

  ${({ color }) =>
    color === 'pink' &&
    `
      background-image: linear-gradient(to right, #FC67A7, #F6815B);
    `}

  ${({ color }) =>
    color === 'yellow' &&
    `
      background-image: linear-gradient(to right, #FFD541, #F0B31A);
    `}
`;

const Cards = ({ color, moveTo }) => {
  const navigate = useNavigate();

  const moveToDiary = () => {
    navigate('/diary');
  };

  return (
    <StyledContainer color={color} onClick={moveTo}>
      <p className="sub-title">어제의 다짐</p>
      <div className="text-container">
        <p className="text">1. 하루를 활기차게 시작하기</p>
        <p className="text">2. 기분 좋은 산책 하기</p>
      </div>
      <div className="align-box">
        <Button
          onClick={moveToDiary}
          className="nextBtn"
          variant="outline-light"
        >
          감사 일기 쓰기
          <BsChevronRight size={30} />
        </Button>{' '}
      </div>
    </StyledContainer>
  );
};

export default Cards;
