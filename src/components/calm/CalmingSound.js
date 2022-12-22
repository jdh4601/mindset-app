import React from 'react';
import ImageSlide from '../UI/ImageSlide';
import './CalmingSound.css';
import { MdArrowBack, MdHeadset } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { RiMovie2Line } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';

const CalmingSound = () => {
  return (
    <div className="container">
      <section className="header-icons">
        <MdArrowBack size={30} className="icon" />
        <AiFillHeart size={30} className="icon" />
      </section>
      <section className="header">
        <h1 className="title">Calming Sound</h1>
        <p className="text">Best practice meditations</p>
      </section>
      <ImageSlide />
      <section className="bottom-icons">
        <div className="icon-box">
          <MdHeadset size={30} />
        </div>
        <div className="icon-box">
          <RiMovie2Line size={30} />
        </div>
      </section>
      <section className="text-box">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          odio non! Debitis nobis est tempora adipisci fugiat harum assumenda
          iure enim error laudantium eum placeat, velit cumque culpa, natus
          iste!
        </p>
      </section>
      <Button variant="primary" className="start-btn">
        Start
      </Button>
    </div>
  );
};

export default CalmingSound;
