import TopBar from '@/components/TopBar';
import Poster from '@/assets/images/test-poster2.png';
import styled from 'styled-components';
import HeartFull from '@/assets/icons/heart-full.svg?react';
import TopBarWeb from '@/components/TopBarWeb';
import useCustomFetch from '@/utils/hooks/useAxios';

import TheaterCard from '@/components/TheaterCard';
function LikedTheater() {
	// const theaters = [
	// 	{
	// 		id: 1,
	// 		imgSrc: Poster,
	// 		name: '홍익극연구회',
	// 		isLiked: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		imgSrc: Poster,
	// 		name: '홍익극연구회',
	// 		isLiked: true,
	// 	},
	// 	{
	// 		id: 3,
	// 		imgSrc: Poster,
	// 		name: '홍익극연구회',
	// 		isLiked: true,
	// 	},
	// 	{
	// 		id: 4,
	// 		imgSrc: Poster,
	// 		name: '홍익극연구회',
	// 		isLiked: true,
	// 	},
	// 	{
	// 		id: 5,
	// 		imgSrc: Poster,
	// 		name: '홍익극연구회',
	// 		isLiked: true,
	// 	},
	// 	{
	// 		id: 6,
	// 		imgSrc: Poster,
	// 		name: '홍익극연구회',
	// 		isLiked: true,
	// 	},
	// ];

	const {
		data,
		// loading, error
	} = useCustomFetch('/member-like/likes');
	console.log('좋아요한 극단', data?.result);

	return (
		<LikedTheaterWrapper>
			<div className="only-mobile">
				<TopBar>좋아요한 극단</TopBar>
			</div>
			<div className="only-web-flex">
				<TopBarWeb>좋아요한 극단</TopBarWeb>
			</div>
			<Wrapper>
				<CardWrapper>
					{data?.result?.map((theater) => (
						<TheaterCard data={theater} />
					))}
				</CardWrapper>
			</Wrapper>
		</LikedTheaterWrapper>
	);
}
export default LikedTheater;

const LikedTheaterWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	@media (min-width: 768px) {
		padding: 100px 0px 0px 70px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const Wrapper = styled.div`
	display: flex;

	@media (min-width: 768px) {
		padding: 30px 0px 0px 110px;
	}
	@media (max-width: 768px) {
		padding: 28px 20px;
	}
	flex-direction: column;
`;
const CardWrapper = styled.div`
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
