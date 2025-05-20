import styled from 'styled-components';

import HamburgerIcon from '@/assets/icons/hamburger.svg?react';
import Alrert from '@/assets/icons/alrert.svg?react';
import Search from '@/assets/icons/search.svg?react';
import ChevronLeftPink from '@/assets/icons/chevronLeftPink.svg?react';

function Hamburger({ title, back }) {
	return (
		<Container>
			<ButtonArea>
				{back ? (
					<ChevronLeftPink alt="뒤로가기" height={15} />
				) : (
					<HamburgerIcon alt="햄버거바" height={15} />
				)}
				{title && <Title>{title}</Title>}
				<Right>
					<Alrert alt="알림" />
					<Search alt="검색" />
				</Right>
			</ButtonArea>
		</Container>
	);
}

export default Hamburger;

const Container = styled.div`
	height: 120px;
	background: ${({ theme }) => theme.colors.ivoryBg};

	position: relative;
	padding: 0 20px;
`;

const ButtonArea = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	right: 0;

	display: flex;
	justify-content: space-between;

	align-items: center;
`;
const Title = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayMain};
`;
const Right = styled.div`
	display: flex;
	gap: 12px;
`;
