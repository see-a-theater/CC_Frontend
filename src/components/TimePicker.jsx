import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
function TimePicker({ date, setDate }) {
	const [meridiem, setMeridiem] = useState('AM'); // 또는 'PM'

	const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

	const [hour, setHour] = useState(null);
	const [minute, setMinute] = useState(null);
	// 시간/분/AMPM이 바뀔 때마다 Date 업데이트
	useEffect(() => {
		if (meridiem === -1 || hour == null || minute == null) return;

		let h24 = hour % 12;
		if (meridiem === 'PM') h24 += 12;
		if (hour === 12 && meridiem === 'AM') h24 = 0;

		const newDate = new Date(date);
		newDate.setHours(h24, minute, 0, 0);
		setDate(newDate);
		console.log(newDate);
	}, [hour, minute, meridiem]); // 상태가 바뀔 때마다 실행
	return (
		<Wrapper>
			<MeridiemSelector>
				<div
					className={meridiem === 'AM' ? 'selected' : ''}
					onClick={() => setMeridiem('AM')}
				>
					오전
				</div>
				<div
					className={meridiem === 'PM' ? 'selected' : ''}
					onClick={() => setMeridiem('PM')}
				>
					오후
				</div>
			</MeridiemSelector>
			<Picker>
				<Unit>시</Unit>
				<Numbers>
					{hours.map((h) => (
						<Number
							key={h}
							className={hour === h ? 'selected' : ''}
							onClick={() => setHour(h)}
						>
							{h}
						</Number>
					))}
				</Numbers>
			</Picker>
			<Picker>
				<Unit>분</Unit>
				<Numbers>
					{minutes.map((m) => (
						<Number
							key={m}
							className={minute === m ? 'selected' : ''}
							onClick={() => setMinute(m)}
						>
							{m}
						</Number>
					))}
				</Numbers>
			</Picker>
		</Wrapper>
	);
}
export default TimePicker;

const Wrapper = styled.div`
	/*border: 1px solid #dee2e6;*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 350px;
	height: 300px;
	padding: 20px 28px;
`;

const Top = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-bottom: 28px;
	div {
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;

const Picker = styled.div`
	display: flex;
	flex-direction: row;
	gap: 28px;
	margin-bottom: 28px;
`;

const Unit = styled.div``;

const Numbers = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr); /* 한 줄에 6개씩 배치 */
	gap: 28px;
`;

const Number = styled.div`
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 2px;
	&.selected {
		background-color: #f67676; /* 핑크색 */
		color: white;
	}
`;
const MeridiemSelector = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-bottom: 16px;
	& > div {
		display: flex;
		flex: 1;
		height: 50px;
		justify-content: center;
		align-items: center;
		color: var(--color-gray-400, #929292);
		font-size: 16px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		letter-spacing: -0.48px;
		&.selected {
			color: #f67676;
		}
	}
`;
