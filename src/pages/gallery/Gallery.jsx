import Masonry from '@/components/Masonry';
import MasonryWeb from '@/components/MasonryWeb';
import Hamburger from '@/components/Hamburger';
import SearchBar from '@/components/SearchBar';
import HomeIconMenu from '@/components/HomeIconMenu';

import useCustomFetch from '@/utils/hooks/useAxios';

import styled from 'styled-components';

function Gallery() {
	const token = 'producer';
	localStorage.setItem('token', token);
	

	const { data: picData, error, loading } = useCustomFetch(`/photoAlbums`);

	console.log('error:', error);
	console.log('loading:', loading);
	console.log('data:', picData);

	return (
		<>
			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} selectedMenu="gallery" />
			</SideMenuWrapper>
			<Mobile>
				<Hamburger title={'사진첩'} />
				<Masonry imageData={picData?.result} />
			</Mobile>

			<Web>
				<SideMenuWrapper>
					<HomeIconMenu isWeb={true} />
				</SideMenuWrapper>
				<Container>
					<SearchBar />
					<TitleArea>
						<h3>사진첩</h3>
						<Button>사진 등록</Button>
					</TitleArea>

					<MasonryWeb imageData={picData?.result} />
				</Container>
			</Web>
		</>
	);
}
export default Gallery;

const SideMenuWrapper = styled.div`
	width: 101px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	flex-shrink: 0;
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;

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

const Container = styled.div`
	width: 100%;
	padding: 60px 100px 100px 60px;
	margin-left: 100px;
	display: flex;
	flex-direction: column;
	gap: 40px;

	h3 {
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
const TitleArea = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Button = styled.button`
	display: flex;
	align-items: center;

	padding: 5px 12px;
	border-radius: 3px;

	background: ${({ theme }) => theme.colors.pink500};
	width: fit-content;

	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayWhite};
`;
