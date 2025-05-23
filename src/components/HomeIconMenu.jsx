import styled from 'styled-components';
import Movie from '@/assets/icons/Movie.svg?react';
import Board from '@/assets/icons/Board.svg?react';
import Photo from '@/assets/icons/Photo.svg?react';
import Profile from '@/assets/icons/Profile.svg?react';
import Information from '@/assets/icons/information.svg?react';
import Logo from '@/assets/icons/logo.svg?react';
function HomeIconMenu({ isWeb }) {
	return (
		<Wrapper $isWeb={isWeb}>
			<MenuWrapper $isWeb={isWeb}>
				<div className="logo">
					<Logo />
				</div>
				<div>
					<Movie />
					<span>소극장 공연</span>
				</div>
				<div>
					<Board />
					<span>게시판</span>
				</div>
				<div>
					<Photo />
					<span>사진첩</span>
				</div>
				<div>
					<Profile />
					<span>프로필</span>
				</div>
				<div>
					<Information />
					<span>cc</span>
				</div>
			</MenuWrapper>
		</Wrapper>
	);
}
export default HomeIconMenu;

const Wrapper = styled.div`
	height: 100%;
	padding: ${(props) => (props.$isWeb ? '30px' : '0px')};
	padding-top: ${(props) => (props.$isWeb ? '60px' : '0px')};
	border-right: ${(props) => (props.$isWeb ? '1px solid #DDDDDD' : '')};
`;
const MenuWrapper = styled.div`
	display: flex;
	height: ${(props) => (props.$isWeb ? '440px' : '')};
	flex-direction: ${(props) => (props.$isWeb ? 'column' : 'row')};
	justify-content: space-between;
	.logo {
		display: ${(props) => (props.$isWeb ? 'flex' : 'none')};
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 52px;
		width: 52px;
		@media (min-width: 768px) {
			width: 40px;
			height: 40px;
		}
		svg {
			width: 24px; /* 원하는 아이콘 크기 */
			height: 24px;
			object-fit: contain; /* 비율 유지 */
			@media (min-width: 768px) {
				width: 40px;
				height: 40px;
			}
		}

		span {
			color: ${({ theme }) => theme.colors.pink600};
			display: ${(props) => (props.$isWeb ? 'none' : 'block')};
			font-size: ${({ theme }) => theme.font.fontSize.body10};
			font-style: normal;
			font-weight: ${({ theme }) => theme.font.fontWeight.bold};
			line-height: normal;
			letter-spacing: -0.3px;
		}
	}
`;
