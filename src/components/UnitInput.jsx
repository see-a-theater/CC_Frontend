import Calendar from './Calendar.jsx';
import CalendarIcon from '../assets/icons/Calendar.svg';
import styled from 'styled-components';
import { useState } from 'react';

function UnitInput({ placeholder, unit }) {
	return (
		<Input>
			<input type="text" placeholder={placeholder} />
			<div>{unit}</div>
		</Input>
	);
}
export default UnitInput;

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
		width: 90%;
		padding: 12px 8px;
		align-items: center;
		gap: 12px;
		flex-shrink: 0;
		border-radius: 3px;
		border: none;
		background: var(--color-gray-200, #f8f8f8);
		color: #000000;
		font-family: 'NanumSquare Neo OTF';
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
	div {
		color: var(--color-gray-maintext, #000);
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		letter-spacing: -0.42px;
		margin-right: 8px;
		@media (min-width: 768px) {
			margin-right: 12px;
			font-size: ${({ theme }) => theme.font.fontSize.title16};
		}
	}
`;
