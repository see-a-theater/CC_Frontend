import Masonry from '@/components/Masonry';
import MasonryWeb from '@/components/MasonryWeb';
import Hamburger from '@/components/Hamburger';
import SearchBar from '@/components/SearchBar';

import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';
import styled from 'styled-components';

function Gallery() {
	const imageList = [
		{ src: image1, text: '실종', theatre: '홍익극연구회' },
		{ src: image2, text: '카포네 트릴로지', theatre: '홍익극연구회' },
		{ src: image3, text: '실종', theatre: '홍익극연구회' },
		{ src: image4, text: '실종', theatre: '홍익극연구회' },
		{ src: image5, text: '킬링시저', theatre: '설렘' },
		{ src: image1, text: '실종', theatre: '홍익극연구회' },
		{ src: image2, text: '카포네 트릴로지', theatre: '홍익극연구회' },
		{ src: image3, text: '실종', theatre: '홍익극연구회' },
		{ src: image4, text: '실종', theatre: '홍익극연구회' },
		{ src: image5, text: '킬링시저', theatre: '설렘' },
	];
	return (
		<>
			<Mobile>
				<Hamburger title={'사진첩'} />
				<Masonry imageData={imageList} />
			</Mobile>

			<Web>
				<SideBar />
				<Container>
					<SearchBar />
					<h3>사진첩</h3>
					<MasonryWeb imageData={imageList} />
				</Container>
			</Web>
		</>
	);
}
export default Gallery;

const Web = styled.div`
	display: none;
	@media (min-width: 768px) {
		width: 100vw;
		display: flex;
	}
`;
const Mobile = styled.div`
	padding: 0px 20px;
	@media (min-width: 768px) {
		display: none;
	}
`;
const SideBar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100px;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.gray200};
	z-index: 100;
`;

const Container = styled.div`
	width: 100%;
	margin-left: 100px;
	padding: 60px 100px;
	display: flex;
	flex-direction: column;
	gap: 40px;

	h3 {
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
