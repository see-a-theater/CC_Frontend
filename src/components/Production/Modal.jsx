import styled from 'styled-components';
import CalendarPeriod from '@/components/CalendarPeriod';

import { useState } from 'react';

function Modal({ onClose, onSubmit }) {
	const [inputValue, setInputValue] = useState('');
	const [step, setStep] = useState('input');

	const handleNext = () => {
		setStep('calendar');
	};

	const handleDateChange = (range) => {
		setTimeout(() => {
			if (!inputValue || !range?.[0] || !range?.[1]) return;
			onSubmit(inputValue, range);
			onClose();
		}, 100);
	};

	return (
		<Backdrop>
			<ModalBox step={step}>
				{step === 'input' ? (
					<>
						<Top>
							<h3>공연 이름 입력</h3>
							<Button onClick={handleNext}>다음</Button>
						</Top>

						<Input
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="공연 이름을 입력하세요"
						/>
					</>
				) : (
					<>
						<CalendarPeriod onChange={handleDateChange} />
					</>
				)}
			</ModalBox>
		</Backdrop>
	);
}

export default Modal;

const Backdrop = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;

	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalBox = styled.div`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	background: ${({ step, theme }) =>
		step === 'calendar' ? theme.colors.grayWhite : theme.colors.gray200};

	padding: ${({ step }) => (step === 'calendar' ? '0' : '28px 20px')};
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	h3 {
		font-size: ${({ theme }) => theme.font.fontSize.body16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
const Input = styled.input`
	height: 52px;
	padding: 12px 20px;
	align-self: stretch;
	border-radius: 10px;
	border: none;
	background: ${({ theme }) => theme.colors.grayWhite};
`;
const Button = styled.p`
	cursor: pointer;
	color: #007bff;
	user-select: none;

	&:hover {
		text-decoration: underline;
	}
`;
