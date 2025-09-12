import HomeIconMenu from '@/components/HomeIconMenu';
import styled from 'styled-components';

function SmallTheaterCurrent() {
	return (
		<>
			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} selectedMenu="small-theater" />
			</SideMenuWrapper>
			<Wrapper>
				<h1>소극장</h1>
			</Wrapper>
		</>
	);
}
export default SmallTheaterCurrent;
const SideMenuWrapper = styled.div`
	width: 101px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	flex-shrink: 0;
	display: none;
	background-color: ${({ theme }) => theme.colors.grayWhite};
	@media (min-width: 768px) {
		display: block;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 768px) {
		padding-left: 100px;
	}
`;
