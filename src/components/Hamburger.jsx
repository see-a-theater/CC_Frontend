import styled from 'styled-components';

import HamburgerIcon from '@/assets/icons/hamburger.svg?react';
import Alrert from '@/assets/icons/alrert.svg?react';
import Search from '@/assets/icons/search.svg?react';
import Logo from '@/assets/icons/logo.svg?react';
import FullScreenMenu from './FullScreenMenu';
import { useState } from 'react';

/* 햄버거에 FullScreenMenu 연결 시 레이아웃 문제가 생겨 
해당 컴포넌트의 아이콘 간격 조정했습니다. */

function Hamburger({ hasLogo }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			{!isMenuOpen && (
				<Container>
					<ButtonArea>
						{hasLogo ? (
							<Logo />
						) : (
							<HamburgerIcon
								alt="햄버거바"
								height={15}
								onClick={() => setIsMenuOpen(true)}
							/>
						)}
						<Right>
							<Alrert alt="알림" />
							<Search alt="검색" />
						</Right>
					</ButtonArea>
				</Container>
			)}
			{isMenuOpen && <FullScreenMenu onClose={() => setIsMenuOpen(false)} />}
		</>
	);
}

export default Hamburger;

const Container = styled.div`
	height: 120px;
	background: ${({ theme }) => theme.colors.ivoryBg};

	position: relative;
	padding: 0px 20px;
`;

const ButtonArea = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px; /*0 -> 20px로 변경*/
	right: 20px; /* 0 -> 20px로 변경*/

	display: flex;
	justify-content: space-between;

	align-items: center;
`;
const Right = styled.div`
	display: flex;
	gap: 12px;
`;
