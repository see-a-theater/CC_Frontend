import HomeIconMenu from '../../components/HomeIconMenu';
import styled from 'styled-components';

function Notification() {
	return (
		<>
			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} selectedMenu="notification" />
			</SideMenuWrapper>
			<Wrapper>
				<h1>알림</h1>
			</Wrapper>
		</>
	);
}
export default Notification;
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
