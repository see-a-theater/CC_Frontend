import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';

import styled from 'styled-components';

import Masonry from '@/components/Masonry';

function Gallery(props) {
	const imageList = [
		{ src: image1, text: '실종' },
		{ src: image2, text: '카포네 트릴로지' },
		{ src: image3, text: '실종' },
		{ src: image4, text: '실종' },
		{ src: image5, text: '킬링시저' },
	];
	//console.log('id:', props?.result.amateurShowId);

	return (
		<Container>
			<Masonry imageData={imageList} />
		</Container>
	);
}

export default Gallery;

const Container = styled.div`
	width: 100%;
`;