import styled from 'styled-components';
import Search from '@/assets/icons/searchGrey.svg?react';

function SearchBar() {
	return (
		<Wrapper>
			<IconWrapper>
				<Search height={24} />
			</IconWrapper>
			<Bar placeholder="보고 싶은 연극이나 공연진을 입력하세요." />
		</Wrapper>
	);
}

export default SearchBar;

const Wrapper = styled.div`
	position: relative;
	width: 100%;
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 12px;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
`;

const Bar = styled.input`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.gray200};
	height: 40px;
	padding: 8px 20px 8px 40px;
	border-radius: 5px;
	border: none;
	font-size: ${({ theme }) => theme.font.fontSize.body13};
	color: ${({ theme }) => theme.colors.gray800};
`;
