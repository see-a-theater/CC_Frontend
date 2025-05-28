import styled from 'styled-components';
import { useState } from 'react';

import Hamburger from '@/components/Hamburger';
import PlayCard from '@/components/Detail/PlayCard';
import NowShowing from '@/components/Detail/NowShowing';
import Ticket from '@/assets/icons/Ticket.svg?react';

function Playlist() {
	const sampleList = [1, 2, 3, 4, 5];
	const [current, setCurrent] = useState(0);

	const token = 'producer';
	localStorage.setItem('token', token);

	return (
		<Container>
			<Hamburger />
			<Today>
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
			</Today>

			<Now>
				<h3 className="onGoing"> 현재 진행중 </h3>
				<MappingArea>
					<NowShowing />
					<NowShowing />
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
		</Container>
	);
}

export default Playlist;

const Container = styled.div`
	width: 100%;
	padding: 20px;
	overflow: hidden;
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
