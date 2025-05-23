import styled from 'styled-components';
import HomeIconMenu from '../../components/HomeIconMenu';
import Hr from '../../components/Hr';
import Ranking from '../../components/Ranking';
import ChevronRight from '@/assets/icons/ChevronRight.svg?react';
import BoardPreviewCardList from '../../components/BoardPreviewCardList';
import BoardPreviewList from '../../components/BoardPreviewList';
import BoardPreviewCardWeb from '../../components/BoardPreviewCardWeb';
import SearchBar from '../../components/SearchBar';
import HomeBannerCarouselWeb from '../../components/HomeBannerCarouselWeb';

/* 코드 가독성 이슈로 추후 리팩토링 해야할듯 */
function Home() {
	return (
		<HomeWrapper>
			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} />
			</SideMenuWrapper>
			<MainContent>
				<Wrapper>
					<div
						className="only-web"
						style={{ marginBottom: '40px', maxWidth: '1180px' }}
					>
						<SearchBar />
					</div>
					<h1>오늘 마감인 공연</h1>
					<div className="only-web">
						<HomeBannerCarouselWeb />
					</div>
					<div className="only-mobile">
						<HomeIconMenu />
					</div>
				</Wrapper>
				<div className="only-mobile">
					<Hr />
				</div>
				<Wrapper style={{ paddingRight: '0px' }}>
					<h1>
						<span className="only-web-inline">✨</span>소극장 공연 랭킹
					</h1>
					<Ranking />
					<div style={{ paddingRight: '20px' }}>
						<button className="light only-mobile" style={{ marginTop: '26px' }}>
							소극장 공연 보러가기
						</button>
					</div>
				</Wrapper>
				<Wrapper style={{ paddingRight: '0px' }}>
					<h1 className="only-mobile">게시판</h1>
					<Bar>
						<h1 style={{ fontSize: '14px', marginBottom: '12px' }}>
							🔥지금 HOT 게시판
						</h1>
						<ChevronRight />
					</Bar>
					<div className="only-mobile">
						<BoardPreviewCardList />
					</div>
					<div className="only-web" style={{ paddingRight: '60px' }}>
						<BoardPreviewCardWeb />
					</div>
					<div style={{ paddingRight: '20px' }}>
						<BoardPreviewList />
					</div>
					<div style={{ paddingRight: '20px', marginTop: '28px' }}>
						<button className="light only-mobile">게시판 보러가기</button>
					</div>
				</Wrapper>
			</MainContent>
		</HomeWrapper>
	);
}
export default Home;

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const SideMenuWrapper = styled.div`
	width: 101px;
	flex-shrink: 0;
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;

const MainContent = styled.div`
	flex-grow: 1;
	min-width: 0; /* 이거 중요! 줄어들 수 있게 해야 overflow 안 남 */
`;
const Wrapper = styled.div`
	padding: 28px 20px;
	@media (min-width: 768px) {
		padding: 60px;
		padding-bottom: 0px;
	}
	h1 {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.48px;
		margin-bottom: 24px;
		@media (min-width: 768px) {
			font-size: ${({ theme }) => theme.font.fontSize.headline20} !important;
		}
	}
	button {
		display: flex;
		width: 100%;
		height: 36px;
		padding: 8px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		flex-shrink: 0;
	}
	.light {
		color: ${({ theme }) => theme.colors.pink600};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.42px;
		border-radius: 3px;
		border: 1px solid ${({ theme }) => theme.colors.pink200};
		background: ${({ theme }) => theme.colors.pink200};
	}
`;
const Bar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 24px;
	margin-bottom: 8px;
	padding-right: 20px;
	@media (min-width: 768px) {
		justify-content: flex-start;
		gap: 20px;
		margin-bottom: 20px;
	}
`;
