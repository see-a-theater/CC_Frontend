import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  const today = new Date();
  const oneYearLater = new Date(today);
  oneYearLater.setFullYear(today.getFullYear() + 1);

  return (
    <StyledCalendarWrapper>
      <Calendar 
      onChange={onChange} 
      value={value}  
      prev2Label={null}
      next2Label={null}
      formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
      minDate={today}
      maxDate={oneYearLater}
      minDetail="year"    // 👉 월까지만 허용 (연도 클릭해도 decade 뷰로 안 넘어감)
    />
    </StyledCalendarWrapper>
  );
}

export default MyCalendar;

export const StyledCalendarWrapper = styled.div`
.react-calendar {
  width: 350px;
  max-width: 100%;
  background: white;
  border: 1px solid #dee2e6;
  font-family: 'Arial', 'Helvetica', sans-serif;
  line-height: 1.125em;
}

.react-calendar--doubleView {
  width: 700px;
}

.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}

.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}

.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.react-calendar button {
  margin: 0;
  border: 0;
  outline: transparent;
}

.react-calendar button:enabled:hover {
  cursor: pointer;
}

.react-calendar__navigation {
  display: flex;
  height: 44px;
  margin-bottom: 1em;
}

.react-calendar__navigation button {
  min-width: 44px;
  background: transparent;
}

.react-calendar__navigation button:disabled {
  background-color: transparent;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: transparent;
}

.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font: inherit;
  font-size: 0.75em;
  font-weight: bold;
}

.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  font-size: 0.75em;
  font-weight: bold;
}

.react-calendar__month-view__days__day--weekend {
  color: ${({ theme }) => theme.colors.grayMain};
}

.react-calendar__month-view__days__day--neighboringMonth,
.react-calendar__decade-view__years__year--neighboringDecade,
.react-calendar__century-view__decades__decade--neighboringCentury {
  color:  ${({ theme }) => theme.colors.gray400};
}

.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}

.react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: transparent;
  text-align: center;
  font: inherit;
  font-size: 0.833em;
}

.react-calendar__tile:disabled {
  background-color: transparent;
  color: #ababab;
}

.react-calendar__month-view__days__day--neighboringMonth:disabled,
.react-calendar__decade-view__years__year--neighboringDecade:disabled,
.react-calendar__century-view__decades__decade--neighboringCentury:disabled {
  color: transparent;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: transparent;
}

.react-calendar__tile--now {
  background: transparent;
}

.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: transparent;
}

.react-calendar__tile--hasActive {
  background: transparent;
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: transparent;
}




.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: transparent;
  
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: ${({ theme }) => theme.colors.pink600};
}
  .react-calendar__tile--active {
  background: ${({ theme }) => theme.colors.pink600};
  color: white;
}


`