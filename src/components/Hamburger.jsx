import styled from 'styled-components';

import hamburger from '@/assets/icons/hamburger.svg';
import alrert from '@/assets/icons/alrert.svg';
import search from '@/assets/icons/search.svg';

function Hamburger() {
	return (
		<Container>
			<ButtonArea>
				<img src={hamburger} alt="햄버거바" height={15} />
				<Right>
					<img src={alrert} alt="알림" />
					<img src={search} alt="검색" />
				</Right>
			</ButtonArea>
		</Container>
	);
}

export default Hamburger;

const Container = styled.div`
	height: 120px;
	background: ${({ theme }) => theme.colors.ivoryBg};

	position: relative; // 중요!
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
