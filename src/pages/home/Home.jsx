import styled from 'styled-components';
import HomeIconMenu from '../../components/HomeIconMenu';
import Hr from '../../components/Hr';
import Ranking from '../../components/Ranking';
import ChevronRight from '@/assets/icons/ChevronRight.svg?react';
import BoardPreviewCardList from '../../components/BoardPreviewCardList';
import BoardPreviewList from '../../components/BoardPreviewList';
import BoardPreviewCardWeb from '../../components/BoardPreviewCardWeb';
import SearchBar from '../../components/SearchBar';
import CarouselWeb from '../../components/CarouselWeb';
import CarouselMobile from '../../components/CarouselMobile';
import Hamburger from '../../components/Hamburger';
import Poster from '../../assets/images/test-poster2.png';
import useCustomFetch from '@/utils/hooks/useAxios';
import { useEffect } from 'react';
/* 코드 가독성 이슈로 추후 리팩토링 해야할듯 */
const banners = [
	{
		id: 1,
		imgSrc: Poster, // 이미지 경로 (필요하면 각각 다른 이미지도 넣으세요)
		title: '실종',
		location: '홍익대학교 학생회관 3층 소극장',
		date: '2024.10.03 (목) 19:00',
	},
	{
		id: 2,
		imgSrc: Poster,
		title: '공연2',
		location: '장소2',
		date: '2024.11.15 (금) 20:00',
	},
	{
		id: 3,
		imgSrc: Poster,
		title: '공연3',
		location: '장소3',
		date: '2024.12.01 (일) 18:30',
	},
];

function Home() {
	localStorage.setItem(
		'accessToken',
		import.meta.env.VITE_REACT_APP_ACCESS_TOKEN,
	);
	const {
		data: dataClosing,
		loading: loadingClosing,
		error: errorClosing,
	} = useCustomFetch('/amateurs/closing');

	const {
		data: dataRanking,
		loading: loadingRanking,
		error: errorRanking,
	} = useCustomFetch('/amateurs/ranking');

	const {
		data: dataHotBoard,
		loading: loadingHotBoard,
		error: errorHotBoard,
	} = useCustomFetch('/boards/hot');

	const {
		data: dataBoard,
		loading: loadingBoard,
		error: errorBoard,
	} = useCustomFetch('/boards?boardType=NORMAL&page=0&size=5');

	console.log(dataClosing?.result);
	return (
		<HomeWrapper>
			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} />
			</SideMenuWrapper>
			<MainContent>
				<div className="only-mobile">
					<Hamburger hasLogo={true} />
				</div>
				<Wrapper>
					<div
						className="only-web"
						style={{ marginBottom: '40px', maxWidth: '1180px' }}
					>
						<SearchBar />
					</div>
					<h1>오늘 마감인 공연</h1>
					<div className="only-web">
						<CarouselWeb banners={dataClosing?.result} />
					</div>
					<div className="only-mobile">
						<CarouselMobile banners={dataClosing?.result} />
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
					<Ranking data={dataRanking?.result} />
					<div style={{ paddingRight: '20px' }}>
						<button className="light only-mobile" style={{ marginTop: '26px' }}>
							소극장 공연 보러가기
						</button>
					</div>
				</Wrapper>
				{/*게시판 섹선*/}
				<Wrapper style={{ paddingRight: '0px' }}>
					<h1 className="only-mobile">게시판</h1>
					<Bar>
						<h1 style={{ fontSize: '14px', marginBottom: '12px' }}>
							🔥지금 HOT 게시판
						</h1>
						<ChevronRight />
					</Bar>
					<div className="only-mobile">
						<BoardPreviewCardList data={dataHotBoard?.content} />
					</div>
					<div className="only-web" style={{ paddingRight: '60px' }}>
						<BoardPreviewCardWeb data={dataHotBoard?.content} />
					</div>
					v 게시글 전체조회 필요 (현재는 일반/홍보 각각만 가능)
					<div style={{ paddingRight: '20px' }}>
						<BoardPreviewList data={dataBoard?.content} />
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

const MainContent = styled.div`
	flex-grow: 1;
	min-width: 0;
	@media (min-width: 768px) {
		padding-left: 100px;
	}
`;
const Wrapper = styled.div`
	padding: 28px 20px 12px 20px;
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
		}import { Hamburger } from '@/components/Hamburger';

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
