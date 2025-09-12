import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

function CalendarPeriod({ onChange }) {
	const [dateRange, setDateRange] = useState([new Date(), new Date()]);

	const handleChange = (range) => {
		setDateRange(range);
		if (onChange) onChange(range);
	};

	const today = new Date();
	const oneYearLater = new Date(today);
	oneYearLater.setFullYear(today.getFullYear() + 1);

	const isSameDay = (d1, d2) =>
		d1.getFullYear() === d2.getFullYear() &&
		d1.getMonth() === d2.getMonth() &&
		d1.getDate() === d2.getDate();

	return (
		<StyledCalendarWrapper>
			<Calendar
				onChange={handleChange}
				value={dateRange}
				selectRange={true}
				prev2Label={null}
				next2Label={null}
				formatDay={(locale, date) =>
					date.toLocaleString('en', { day: 'numeric' })
				}
				minDate={today}
				maxDate={oneYearLater}
				tileClassName={({ date }) => {
					const [start, end] = dateRange;

					if (!start || !end) return '';

					if (isSameDay(date, start)) return 'range-start';
					if (isSameDay(date, end)) return 'range-end';
					if (date > start && date < end) return 'in-range';

					return '';
				}}
			/>
		</StyledCalendarWrapper>
	);
}

export default CalendarPeriod;

export const StyledCalendarWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	.react-calendar {
		background: white;
		border: none;

		font-size: ${({ theme }) => theme.font.fontSize.body16};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
		color: ${({ theme }) => theme.colors.grayMain};

		line-height: 32px;
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
		//font-size: 0.75em;
		//font-weight: bold;
	}

	.react-calendar__month-view__days__day--weekend {
		color: ${({ theme }) => theme.colors.grayMain};
	}

	.react-calendar__month-view__days__day--neighboringMonth,
	.react-calendar__decade-view__years__year--neighboringDecade,
	.react-calendar__century-view__decades__decade--neighboringCentury {
		color: ${({ theme }) => theme.colors.gray400};
	}

	.react-calendar__year-view .react-calendar__tile,
	.react-calendar__decade-view .react-calendar__tile,
	.react-calendar__century-view .react-calendar__tile {
		padding: 2em 0.5em;
	}

	.react-calendar__tile {
		width: 32px;
		height: 32px;
		padding: 0;
		margin: 8px;
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: ${({ theme }) => theme.font.fontSize.body16};
		background: transparent;
		position: relative;
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

	.react-calendar__tile--range {
		background: transparent;
		color: inherit;
	}
	.range-start,
	.range-end,
	.in-range {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	.range-start::before,
	.range-end::before,
	.in-range::before {
		content: '';
		position: absolute;
		width: 24px;
		height: 24px;
		border-radius: 2px;
		z-index: -1;
	}

	.range-start::before,
	.range-end::before {
		background-color: ${({ theme }) => theme.colors.pink600};
	}

	.range-start,
	.range-end {
		color: #fff !important;
	}

	.in-range::before {
		background-color: ${({ theme }) => theme.colors.pink200};
	}

	.in-range {
		color: ${({ theme }) => theme.colors.pink600};
	}

	.react-calendar__tile {
		padding: 6px 4px;
		margin: 1px;
	}
`;
