
import React from 'react';
import { PosterContainer, Poster, EventTitle, EventVenue } from '@/pages/ticketingpage/styles/commonStyles';
import useResponsive from '@/pages/ticketingpage/hooks/useResponsive';

const PosterInfo = ({ eventInfo }) => {
  const { title, venue, posterUrl } = eventInfo;
  const isPC = useResponsive();

  return (
    <PosterContainer>
      {posterUrl ? (
        <Poster src={posterUrl} alt={`${title} 포스터`} />
      ) : (
        <Poster as="div" style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          포스터 로딩 중...
        </Poster>
      )}
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