import HomeIconMenu from '@/components/HomeIconMenu';
import styled from 'styled-components';
function Board() {
	return (
		<>
			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} selectedMenu="board" />
			</SideMenuWrapper>
			<Wrapper>
				<h1>게시판</h1>
			</Wrapper>
		</>
	);
}
export default Board;

const SideMenuWrapper = styled.div`
	width: 101px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	flex-shrink: 0;
	display: none;
	background: ${({ theme }) => theme.colors.grayWhite};
	@media (min-width: 768px) {
		display: block;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 768px) {
		padding-left: 100px;
	}
`;
