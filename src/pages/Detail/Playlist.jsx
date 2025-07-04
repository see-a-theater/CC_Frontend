import styled from 'styled-components';
import { useState } from 'react';

import Hamburger from '@/components/Hamburger';
import PlayCard from '@/components/Detail/PlayCard';
import NowShowing from '@/components/Detail/NowShowing';
import WebPlayCard from '@/components/Detail/WebPlayCard';
import WebListCard from '@/components/Detail/WebListCard';
import Ticket from '@/assets/icons/Ticket.svg?react';
import SearchBar from '@/components/SearchBar';
import HomeIconMenu from '@/components/HomeIconMenu';

import useCustomFetch from '@/utils/hooks/useAxios';

import SamplePoster from '@/assets/mock/images/실종.png';

function Playlist() {
	const sampleList = [1, 2, 3, 4, 5];
	const mockList = [
		{
			src: SamplePoster,
			title: '실종',
			place: '홍익대학교 학생회관 3층 소극장',
			date: '2024.10.03 (목) 19:00 ~ 2024.10.05(토) 14:00',
			id: 1,
		},
		{
			src: SamplePoster,
			title: '실종',
			place: '홍익대학교 학생회관 3층 소극장',
			date: '2024.10.03 (목) 19:00 ~ 2024.10.05(토) 14:00',
			id: 2,
		},
		{
			src: SamplePoster,
			title: '실종',
			place: '홍익대학교 학생회관 3층 소극장',
			date: '2024.10.03 (목) 19:00 ~ 2024.10.05(토) 14:00',
			id: 3,
		},
	];
	const [current, setCurrent] = useState(0);

	const token = 'producer';
	localStorage.setItem('token', token);

	const { data: todayData, error, loading } = useCustomFetch(`/amateurs/today`);

	console.log('error:', error);
	console.log('loading:', loading);
	console.log('data:', todayData);
	// 아직 api에 데이터가 없어 mock으로 대체

	return (
		<Container>
			<Web>
				<SideMenuWrapper>
					<HomeIconMenu isWeb={true} />
				</SideMenuWrapper>
				<WebContent>
					<SearchBar />
					<WebHot>
						<h3 className="Todays">요즘 🔥HOT한 소극장 연극</h3>
						<CardWrapper>
							{mockList.map((data) => (
								<WebPlayCard data={data} key={data.id} />
							))}
						</CardWrapper>
					</WebHot>
					<WebOnGoing>
						<h3>현재 진행중인 소극장 연극</h3>
						<BoxWrapper>
							{mockList.map((data) => (
								<WebListCard data={data} key={data.id} />
							))}
						</BoxWrapper>
					</WebOnGoing>
				</WebContent>
			</Web>

			<Mobile>
				<TopWrap>
					<Hamburger />
				</TopWrap>

				<Today>
					<MobileCarousel>
						<h3 className="Todays">오늘 진행하는 소극장 공연</h3>

						<CarouselWrapper>
							<CarouselTrack $current={current}>
								{sampleList.map((item, idx) => (
									<Slide key={idx}>
										<PlayCard />
									</Slide>
								))}
							</CarouselTrack>
						</CarouselWrapper>

						<IndicatorWrapper>
							{sampleList.map((_, idx) => (
								<Dot
									key={idx}
									className={idx === current ? 'active' : ''}
									onClick={() => setCurrent(idx)}
								/>
							))}
						</IndicatorWrapper>
					</MobileCarousel>
				</Today>
				<Now>
					<h3 className="onGoing"> 현재 진행중 </h3>
					<MappingArea>
						{mockList.map((data) => (
							<NowShowing data={data} key={data.id} />
						))}
					</MappingArea>
				</Now>
				{token && (
					<FixedProdButton>
						<ProdButton>
							<Ticket height={28} />
							<p>공연등록</p>
						</ProdButton>
					</FixedProdButton>
				)}
			</Mobile>
		</Container>
	);
}

export default Playlist;

const Container = styled.div`
	width: 100%;
	padding: 20px;
	overflow: hidden;

	@media (min-width: 768px) {
		display: flex;
		padding: 0;
	}
`;
const Web = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		width: 100%;
	}
`;
const WebContent = styled.div`
	display: flex;
	padding: 60px 100px 100px 60px;
	margin-left: 100px;
	flex-direction: column;
	gap: 40px;

	h3 {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		margin-bottom: 40px;
	}
`;
const WebHot = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;

		.Todays {
		}
	}
`;
const WebOnGoing = styled.div``;
const BoxWrapper = styled.div`
	display: flex;
	gap: 80px;
`;
const SideMenuWrapper = styled.div`
	width: 101px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	flex-shrink: 0;
	display: none;
	background-color: white;
	@media (min-width: 768px) {
		display: block;
	}
`;

const Mobile = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		display: none;
	}
`;

const TopWrap = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;

const Today = styled.div`
	margin-bottom: 40px;

	.Todays {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		margin-bottom: 20px;
	}
`;

const CardWrapper = styled.div`
	display: flex;
	gap: 32px;
`;
const CarouselWrapper = styled.div`
	width: 100%;
	overflow: hidden;
`;

const CarouselTrack = styled.div`
	display: flex;
	transition: transform 0.4s ease-in-out;
	transform: translateX(${({ $current }) => `-${$current * 100}%`});
`;

const Slide = styled.div`
	flex: 0 0 100%;
`;

const IndicatorWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 8px;
	margin-top: 16px;
`;
const MobileCarousel = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;

const Dot = styled.div`
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: ${({ theme }) => theme.colors.gray300};
	cursor: pointer;

	&.active {
		background: ${({ theme }) => theme.colors.pink600};
	}
`;

const Now = styled.div`
	.onGoing {
		margin-bottom: 24px;
	}
`;

const MappingArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
const FixedProdButton = styled.div`
	position: fixed;
	bottom: 170px;
	right: 22px;
	z-index: 100;
`;

const ProdButton = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;

	padding: 8px 12px;
	border-radius: 30px;

	background: ${({ theme }) => theme.colors.pink500};
	width: fit-content;

	p {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayWhite};
	}
`;
