import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const IMG = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-right: 25px;
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px;
`;

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ImageSlide = () => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = 2;

  const images = [img1, img2, img3];

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SlideContainer ref={slideRef}>
        {images.map((image, i) => (
          <IMG src={image} key={i} />
        ))}
      </SlideContainer>
      <BtnContainer>
        <Button onClick={prevSlide}>Prev</Button>
        <Button onClick={nextSlide}>Next</Button>
      </BtnContainer>
    </Container>
  );
};

export default ImageSlide;
