import Calendar from './Calendar.jsx';
import CalendarIcon from '../assets/icons/Calendar.svg';
import styled from "styled-components";
import { useState } from 'react';
import TimePicker from './TimePicker.jsx';

function DateInput() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const toggleCalendar = () => {
    if (isCalendarOpen || isTimePickerOpen) {
      // 둘 중 하나라도 열려있으면 둘 다 닫기
      setIsCalendarOpen(false);
      setIsTimePickerOpen(false);
    } else {
      // 둘 다 닫혀있으면 캘린더 열기
      setIsCalendarOpen(true);
    }
  };
  const handleNextClick = () => {
    setIsCalendarOpen(false); // 캘린더 닫기
    setIsTimePickerOpen(true); // 시간 선택기 열기
  };

  const handlePrevClick = () => {
    setIsCalendarOpen(true); // 캘린더 닫기
    setIsTimePickerOpen(false); // 시간 선택기 열기
  };

  const handleCompleteClick = () => {
    setIsTimePickerOpen(false); // 시간 선택기 닫기
    // 여기서 필요한 경우 날짜와 시간 정보를 처리할 수 있습니다.
  };

  return (
    <Wrapper>
      <Input>
        <input type="text" placeholder='날짜와 시간을 선택해주세요'/>
        <img src={CalendarIcon} alt="calendar" onClick={toggleCalendar} />
      </Input>
      {isCalendarOpen && (
        <Area>
          <Div>
            <Calendar />
            <Bottom>
              <button className="primary" onClick={handleNextClick}>다음</button>
            </Bottom>
          </Div>
        </Area>
      )}
      {isTimePickerOpen && (
        <Area>
        <Div>
        <TimePicker />
          <Bottom>
            <button className="secondary" onClick={handlePrevClick}>이전</button>
            <button className="primary" onClick={handleCompleteClick}>완료</button>
          </Bottom>
        </Div>
          
        </Area>
      )}
    </Wrapper>
  );
}
export default DateInput;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.gray200};
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
  img {
    height: 24px;
    margin-right: 8px;
  }
    > input {
      display: flex;
      height: 40px;
      padding: 12px 8px;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
      border-radius: 3px;
      border: none;
      background: var(--color-gray-200, #F8F8F8);
      color: #000000;
      font-family: "NanumSquare Neo OTF";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 138.462% */
      letter-spacing: -0.39px;
      &::placeholder {
        color: var(--color-gray-400, #929292); /* placeholder만 회색 */
      }
        &:focus {
        outline: none; /* 포커스 시 테두리 없애기 */
        box-shadow: none; /* 포커스 시 그림자 없애기 */
      }
    }
`

const Wrapper = styled.div`

`
const Area = styled.div`
  border: 1px solid rgba(222, 226, 230, 0.88);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center; 
  padding: 28px;
  gap: 16px;
  height: 364px;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
    button {
    flex: 1;  /* 각 버튼이 부모 너비의 동일한 비율을 차지하게 설정 */
    height: 36px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 3px;
    border: 0px !important;
  }
  .secondary {
    background: ${({ theme }) => theme.colors.pink200};
    color: ${({ theme }) => theme.colors.pink600};
  }
  .primary {
    background: ${({ theme }) => theme.colors.pink600};
    color: #fff;
  }
`;

const TimePickerWrapper = styled.div`
`

const Div = styled.div`
  max-width: 300px;
`