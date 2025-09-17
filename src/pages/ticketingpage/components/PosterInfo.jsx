
import React from 'react';
import { PosterContainer, Poster, EventTitle, EventVenue } from '@/pages/ticketingpage/styles/commonStyles';
import useResponsive from '@/pages/ticketingpage/hooks/useResponsive';

const PosterInfo = ({ eventInfo }) => {
  const { title, venue, posterUrl } = eventInfo;
  const isPC = useResponsive();

  return (
    <PosterContainer>
      <Poster src={posterUrl} alt={`${title} 포스터`} />
      {!isPC && (
        <>
        <EventTitle>{title}</EventTitle>
        <EventVenue>{venue}</EventVenue>
        </>
      )}
    </PosterContainer>
  );
};

export default PosterInfo;