import Masonry from '@/components/Masonry';
import Hamburger from '@/components/Hamburger';

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
	];
	return (
		<Container>
			<Hamburger title={'사진첩'} />
			<Masonry imageData={imageList} />
		</Container>
	);
}
export default Gallery;

const Container = styled.div`
	padding: 0px 20px;
`;
