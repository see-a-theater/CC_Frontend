import styled from 'styled-components';
import Search from '@/assets/icons/SearchBlack.svg?react';

function SearchBarBlack() {
	return (
		<Wrapper>
			<Bar placeholder="" />
			<IconWrapper>
				<Search height={24} />
			</IconWrapper>
		</Wrapper>
	);
}

export default SearchBarBlack;

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
`;

const Bar = styled.input`
	width: 100%;
	height: 32px;
	flex-shrink: 0;
	border-radius: 7px;
	border: 1px solid #000;
`;
