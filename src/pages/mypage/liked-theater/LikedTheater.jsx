import TopBar from '../../../components/TopBar';
import Poster from '../../../assets/images/test-poster2.png';
import styled from 'styled-components';
import HeartFull from '@/assets/icons/heart-full.svg?react';
function LikedTheater() {
	const theaters = [
		{
			id: 1,
			imgSrc: Poster,
			name: '홍익극연구회',
			isLiked: true,
		},
		{
			id: 2,
			imgSrc: Poster,
			name: '홍익극연구회',
			isLiked: true,
		},
		{
			id: 3,
			imgSrc: Poster,
			name: '홍익극연구회',
			isLiked: true,
		},
		{
			id: 4,
			imgSrc: Poster,
			name: '홍익극연구회',
			isLiked: true,
		},
		{
			id: 5,
			imgSrc: Poster,
			name: '홍익극연구회',
			isLiked: true,
		},
		{
			id: 6,
			imgSrc: Poster,
			name: '홍익극연구회',
			isLiked: true,
		},
	];
	return (
		<>
			<TopBar>좋아요한 극단</TopBar>
			<Wrapper>
				<CardWrapper>
					{theaters.map((theater) => (
						<Card>
							<img src={theater.imgSrc} />
							<div>
								<p>{theater.name}</p>
								<HeartFull />
							</div>
						</Card>
					))}
				</CardWrapper>
			</Wrapper>
		</>
	);
}
export default LikedTheater;

const Wrapper = styled.div`
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const CardWrapper = styled.div`
	padding: 28px 20px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;
const Card = styled.div`
	img {
		width: 172px;
		height: 240px;
		border-radius: 3px;
		object-fit: cover;
	}
	& > div {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 8px;
	}
`;
