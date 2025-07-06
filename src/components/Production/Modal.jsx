import styled from 'styled-components';
import { useState } from 'react';

function Modal() {
	const [inputValue, setInputValue] = useState('');

	return (
		<Backdrop>
			<ModalBox>
				<Top>
					<h3>공연 이름 입력</h3>
					<p>다음</p>
				</Top>

				<Input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
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

	background: ${({ theme }) => theme.colors.gray200};
	padding: 28px 20px;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	gap: 12px;
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
const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
`;
