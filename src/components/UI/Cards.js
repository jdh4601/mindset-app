import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 150px;
  height: 125px;
  border-radius: 20px;
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

  ${({ color }) =>
    color === 'green' &&
    `
      background-image: linear-gradient(to right, #13DEA0, #06B782);
    `}
`;

const ContentName = styled.p`
  font-size: 22px;
  color: white;
`;

const Cards = ({ name, color }) => {
  return (
    <StyledContainer color={color}>
      <ContentName>{name}</ContentName>
    </StyledContainer>
  );
};

export default Cards;
