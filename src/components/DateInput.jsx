import Calendar from './Calendar.jsx';
import CalendarIcon from '@/assets/icons/Calendar.svg';
import styled from 'styled-components';
import { useState } from 'react';
import TimePicker from '@/TimePicker.jsx';

function DateInput({ value, onChange }) {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

	const toggleCalendar = () => {
		if (isCalendarOpen || isTimePickerOpen) {
			setIsCalendarOpen(false);
			setIsTimePickerOpen(false);
		} else {
			setIsCalendarOpen(true);
		}
	};

	const handleNextClick = () => {
		setIsCalendarOpen(false);
		setIsTimePickerOpen(true);
	};

	const handlePrevClick = () => {
		setIsCalendarOpen(true);
		setIsTimePickerOpen(false);
	};

	const handleCompleteClick = (newDate) => {
		setIsTimePickerOpen(false);
		if (onChange) onChange(newDate);
	};

	function formatKoreanDateTime(date) {
		if (!date) return '';
		const d = new Date(date);
		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');

		let hours = d.getHours();
		const minutes = String(d.getMinutes()).padStart(2, '0');

		const meridiem = hours >= 12 ? '오후' : '오전';
		hours = hours % 12 || 12;

		return `${year}.${month}.${day} ${meridiem} ${hours}시 ${minutes}분`;
	}

	return (
		<Wrapper>
			<Input>
				<input
					type="text"
					value={formatKoreanDateTime(value)}
					readOnly
					placeholder="날짜와 시간을 선택해주세요"
				/>
				<img src={CalendarIcon} alt="calendar" onClick={toggleCalendar} />
			</Input>

			{isCalendarOpen && (
				<Area>
					<Div>
						<Calendar date={value} setDate={onChange} />
						<Bottom>
							<button className="primary" onClick={handleNextClick}>
								다음
							</button>
						</Bottom>
					</Div>
				</Area>
			)}

			{isTimePickerOpen && (
				<Area>
					<Div>
						<TimePicker date={value} setDate={onChange} />
						<Bottom>
							<button className="secondary" onClick={handlePrevClick}>
								이전
							</button>
							<button
								className="primary"
								onClick={() => handleCompleteClick(value)}
							>
								완료
							</button>
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
		@media (min-width: 768px) {
		}
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
		background: var(--color-gray-200, #f8f8f8);
		color: #000000;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: 18px; /* 138.462% */
		letter-spacing: -0.39px;
		@media (min-width: 768px) {
			padding: 20px 12px;
			height: 58px;
			font-size: ${({ theme }) => theme.font.fontSize.title16};
		}
		&::placeholder {
			color: var(--color-gray-400, #929292); /* placeholder만 회색 */
		}
		&:focus {
			outline: none; /* 포커스 시 테두리 없애기 */
			box-shadow: none; /* 포커스 시 그림자 없애기 */
		}
	}
`;

const Wrapper = styled.div``;
const Area = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 28px;
	gap: 16px;
	height: 364px;
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	gap: 10px;
	button {
		flex: 1; /* 각 버튼이 부모 너비의 동일한 비율을 차지하게 설정 */
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

const TimePickerWrapper = styled.div``;

const Div = styled.div`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
