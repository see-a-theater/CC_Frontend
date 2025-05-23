import styled from 'styled-components';

import HamburgerIcon from '@/assets/icons/hamburger.svg?react';
import Alrert from '@/assets/icons/alrert.svg?react';
import Search from '@/assets/icons/search.svg?react';
import Logo from '@/assets/icons/logo.svg?react';
function Hamburger({ hasLogo }) {
	return (
		<Container>
			<ButtonArea>
				{hasLogo ? <Logo /> : <HamburgerIcon alt="햄버거바" height={15} />}

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
const Right = styled.div`
	display: flex;
	gap: 12px;
`;
