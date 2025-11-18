
import React, { useState } from 'react';
import PosterInfo from '@/pages/ticketingpage/components/PosterInfo';
import ActionButton from '@/pages/ticketingpage/components/ActionButton';
import { FormSection, SectionTitle, EventTitle, EventVenue, EventPeriod, EventInfo, EventLink } from '@/pages/ticketingpage/styles/commonStyles';
import {
  Input,
  Label,
  DatePickerContainer,
  DateInput,
  ArrowIcon,
  DropdownList,
  DropdownItem,
  PersonSelectionContainer,
  PersonInput
} from '@/pages/ticketingpage/styles/formStyles';
import SelectorIcon from '@/pages/ticketingpage/components/icons/SelectorIcon.svg';
import ShowMore from '@/pages/ticketingpage/components/icons/ShowMore.svg';
import useResponsive from '@/pages/ticketingpage/hooks/useResponsive';

const Step1 = ({ 
  ticketing: { 
    dateTimeOptions,
    dateTime,
    people, 
    eventInfo, 
    nextActive, 
    setDateTime,
    setPeople, 
    goToNextStep,
    loading,
    error 
  } 
}) => {
  const [showDateTimeDropdown, setShowDateTimeDropdown] = useState(false);
  const [showPersonDropdown, setShowPersonDropdown] = useState(false);
  
  const toggleDateTimeDropdown = () => setShowDateTimeDropdown((prev) => !prev);
  const togglePersonDropdown = () => setShowPersonDropdown((prev) => !prev);
  const peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const isPC = useResponsive();

  // 날짜/시간 선택 핸들러
  const handleDateTimeSelect = (roundId) => {
    setDateTime(roundId);
    setShowDateTimeDropdown(false);
  };

  // 인원 선택 핸들러
  const handlePersonSelect = (num) => {
    setPeople(num);
    setShowPersonDropdown(false);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <p>공연 정보를 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: '#F67676' }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <PosterInfo eventInfo={eventInfo} />
      
      <FormSection>
        {!isPC && (
          <SectionTitle>관람일/ 회차 선택</SectionTitle>
        )}
        {isPC && (
          <>
            <EventInfo>
              <EventTitle>{eventInfo.title}</EventTitle>
              <EventLink src={ShowMore} alt=">" />
            </EventInfo>
            <EventVenue>{eventInfo.venue}</EventVenue>
            <EventPeriod>{eventInfo.period}</EventPeriod>
          </>
        )}
        
        {/* 공연 날짜/시간 통합 선택 */}
        <Input>
          <Label>공연 날짜</Label>
          <DatePickerContainer>
            <DateInput>
              {dateTime || '선택'}
              <ArrowIcon src={SelectorIcon} alt="▼" onClick={toggleDateTimeDropdown}/>
            </DateInput>
            {showDateTimeDropdown && (
              <DropdownList>
                {dateTimeOptions.length > 0 ? (
                  dateTimeOptions.map((option) => (
                    <DropdownItem
                      key={option.value}
                      onClick={() => handleDateTimeSelect(option.value)}
                    >
                      {option.display}
                    </DropdownItem>
                  ))
                ) : (
                  <DropdownItem>
                    회차 정보가 없습니다
                  </DropdownItem>
                )}
              </DropdownList>
            )}
          </DatePickerContainer>
        </Input>
        
        <Input>
          <Label>인원</Label>
          <PersonSelectionContainer>
            <PersonInput>
              {people ? `${people}명` : '선택'}
              <ArrowIcon src={SelectorIcon} alt="▼" onClick={togglePersonDropdown}/>
            </PersonInput>
            {showPersonDropdown && (
              <DropdownList>
                {peopleOptions.map((num) => (
                  <DropdownItem
                    key={num}
                    onClick={() => handlePersonSelect(num)}
                  >
                    {num}명
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </PersonSelectionContainer>
        </Input>
        {isPC && (
          <ActionButton isActive={nextActive} onClick={goToNextStep}>
          예약하기
          </ActionButton>
        )}
      </FormSection>
      
      {!isPC && (
        <ActionButton isActive={nextActive} onClick={goToNextStep} className="bottom">
        다음
        </ActionButton>
      )}
    </>
  );
};

export default Step1;