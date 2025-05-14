
import React, { useState } from 'react';
import PosterInfo from '../components/PosterInfo';
import ActionButton from '../components/ActionButton';
import { FormSection, SectionTitle } from '../styles/commonStyles';
import {
  Input,
  Label,
  DatePickerContainer,
  DateInput,
  ArrowIcon,
  DropdownList,
  DropdownItem,
  TimeSelectionContainer,
  TimeButton,
  PersonSelectionContainer,
  PersonInput,
} from '../styles/formStyles';
import SelectorIcon from '../components/icons/SelectorIcon.svg';

const Step1 = ({ 
  ticketing: { 
    dateOptions,
    date,
    availableTimes, 
    time, 
    people, 
    eventInfo, 
    nextActive, 
    setDate, 
    setTime, 
    setPeople, 
    goToNextStep 
  } 
}) => {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showPersonDropdown, setShowPersonDropdown] = useState(false);
  const toggleDateDropdown = () => setShowDateDropdown((prev) => !prev);
  const togglePersonDropdown = () => setShowPersonDropdown((prev) => !prev);
  const peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <PosterInfo eventInfo={eventInfo} />
      
      <FormSection>
        <SectionTitle>관람일/ 회차 선택</SectionTitle>
        
        <Input>
          <Label>공연 날짜</Label>
          <DatePickerContainer>
            <DateInput>
              {date}
              <ArrowIcon src={SelectorIcon} alt="▼" onClick={toggleDateDropdown}/>
            </DateInput>
            {showDateDropdown && (
              <DropdownList>
                {dateOptions.map((option) => (
                  <DropdownItem
                    key={option.date}
                    onClick={() => {
                      setDate(option.date);
                      setTime(null);
                      setShowDateDropdown(false);
                    }}
                  >
                    {option.date}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </DatePickerContainer>
        </Input>
        
        <Input>
          <Label>공연 시간</Label>
          <TimeSelectionContainer>
            {availableTimes.map((t) => (
              <TimeButton
                key={t}
                className={time === t ? 'selected' : ''}
                onClick={() => setTime(t)}
              >
                {t}
              </TimeButton>
            ))}
          </TimeSelectionContainer>
        </Input>
        
        <Input>
          <Label>인원</Label>
          <PersonSelectionContainer>
            <PersonInput>
              {people || '선택'}
              <ArrowIcon src={SelectorIcon} alt="▼" onClick={togglePersonDropdown}/>
            </PersonInput>
            {showPersonDropdown && (
              <DropdownList>
                {peopleOptions.map((num) => (
                  <DropdownItem
                    key={num}
                    onClick={() => {
                      setPeople(num);
                      setShowPersonDropdown(false);
                    }}
                  >
                    {num}명
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </PersonSelectionContainer>
        </Input>
      </FormSection>
      
      <ActionButton isActive={nextActive} onClick={goToNextStep}>
        다음
      </ActionButton>
    </>
  );
};

export default Step1;