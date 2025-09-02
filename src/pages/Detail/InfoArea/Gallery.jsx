import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';

import styled from 'styled-components';
import useCustomFetch from '@/utils/hooks/useAxios';

import Masonry from '@/components/Masonry';

function Gallery(props) {
	console.log(props.data.result.memberId);

	const {
		data: picData,
		error,
		loading,
	} = useCustomFetch(`/photoAlbums/member/${props?.data.result.memberId}`);

	console.log('error:', error);
	console.log('loading:', loading);
	console.log('data:', picData);

	return (
		<Container>
			<Masonry imageData={picData} />
		</Container>
	);
}

export default Gallery;

const Container = styled.div`
	width: 100%;
`;
