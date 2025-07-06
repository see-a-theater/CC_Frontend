import { useState } from 'react';
import styled from 'styled-components';

function PillToggleGroup({ options = [], onSelect }) {
	const [selected, setSelected] = useState(options[0]);

	const handleClick = (option) => {
		setSelected(option);
		onSelect?.(option);
	};

	return (
		<Wrapper>
			{options.map((option) => (
				<Pill
					key={option}
					$selected={selected === option}
					onClick={() => handleClick(option)}
				>
					{option}
				</Pill>
			))}
		</Wrapper>
	);
}
export default PillToggleGroup;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
`;

const Pill = styled.span`
	display: inline-flex;
	padding: 8px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 24px;
	cursor: pointer;
	font-weight: 500;
	background-color: ${({ $selected, theme }) =>
		$selected ? theme.colors.pink600 : theme.colors.gray200};
	color: ${({ $selected, theme }) =>
		$selected ? theme.colors.grayWhite : theme.colors.gray500};
`;
