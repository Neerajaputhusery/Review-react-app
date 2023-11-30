import React, { useState } from 'react';
import { UserData } from '../../StaticData/UserData';


import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = UserData[index];


  const nextPerson = () => {
    setIndex((prevIndex) => (prevIndex + 1) % UserData.length);
  };

  const prevPerson = () => {
    setIndex((prevIndex) => (prevIndex - 1 + UserData.length) % UserData.length);
  };

  const randomPerson = () => {
    const newIndex = Math.floor(Math.random() * UserData.length);
    setIndex(newIndex);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;