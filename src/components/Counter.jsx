import styled from 'styled-components';
import { useState } from 'react';
import Minus from '../assets/icons/Minus.svg';
import Plus from '../assets/icons/Plus.svg';
function Counter({ size, count, setCount }) {
	const handleDecrease = () => {
		if (count > 1) setCount(count - 1);
	};

	const handleIncrease = () => {
		setCount(count + 1);
		console.log(count);
	};

	return (
		<Wrapper size={size}>
			<img src={Minus} onClick={handleDecrease} style={{ cursor: 'pointer' }} />
			<div>{count}</div>
			<img src={Plus} onClick={handleIncrease} style={{ cursor: 'pointer' }} />
		</Wrapper>
	);
}
export default Counter;

const Wrapper = styled.div`
	background: ${({ theme }) => theme.colors.gray200};
	width: ${(props) => (props.size ? props.size : '180px')};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	@media (min-width: 768px) {
		padding: 12px 20px;
		width: ${(props) => (props.size ? props.size : '240px')};
	}
	img {
		width: 24px;
	}
`;
