
import React from 'react';
import ActionButton from '../components/ActionButton';
import { SuccessMessage } from '../styles/commonStyles';

const Step3 = ({ ticketing: { viewReservation } }) => {
  return (
    <SuccessMessage>
      <p>예매 완료!</p>
      <ActionButton isActive={true} onClick={viewReservation} className="bottom">
        예약현황 보러가기
      </ActionButton>
    </SuccessMessage>
  );
};

export default Step3;