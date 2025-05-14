
import React from 'react';
import { PosterContainer, Poster, EventTitle, EventVenue } from '../styles/commonStyles';
import PosterImg from './icons/PosterImg.svg';

const PosterInfo = ({ eventInfo }) => {
  const { title, venue, posterUrl } = eventInfo;
  
  return (
    <PosterContainer>
      <Poster src={posterUrl || PosterImg} alt={`${title} 포스터`} />
      <EventTitle>{title}</EventTitle>
      <EventVenue>{venue}</EventVenue>
    </PosterContainer>
  );
};

export default PosterInfo;