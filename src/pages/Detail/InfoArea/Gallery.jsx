import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';

import styled from 'styled-components';
import useCustomFetch from '@/utils/hooks/useAxios';

import Masonry from '@/components/Masonry';

function Gallery(props) {
	{
		/* 추후 memberId 받아와서 사진 정보 받아오는 걸로 수정 */
	}
	{
		/* 
			const {
				data: picData,
				error,
				loading,
			} = useCustomFetch(`/photoAlbums/member/${memberId}`);
			 
			console.log('error:', error);
			console.log('loading:', loading);
			console.log('data:', picData);
		*/
	}

	const mockData = {
		isSuccess: true,
		code: '200',
		message: 'OK',
		result: [
			{
				photoAlbumId: 1,
				amateurShowName: '실종',
				place: '홍익극연구회',
				imageUrl: image1,
			},
			{
				photoAlbumId: 2,
				amateurShowName: '카포네 트릴로지',
				place: '홍익극연구회',
				imageUrl: image2,
			},
			{
				photoAlbumId: 3,
				amateurShowName: '실종',
				place: '홍익극연구회',
				imageUrl: image3,
			},
			{
				photoAlbumId: 4,
				amateurShowName: '실종',
				place: '홍익극연구회',
				imageUrl: image4,
			},
			{
				photoAlbumId: 5,
				amateurShowName: '킬링시저',
				place: '홍익극연구회',
				imageUrl: image5,
			},
		],
	};

	return (
		<Container>
			<Masonry data={mockData} />
		</Container>
	);
}

export default Gallery;

const Container = styled.div`
	width: 100%;
`;
