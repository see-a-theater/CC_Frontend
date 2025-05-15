import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';

import styled from 'styled-components';

function Gallery() {
	const imageList = [
		{ src: image1, text: '실종' },
		{ src: image2, text: '카포네 트릴로지' },
		{ src: image3, text: '실종' },
		{ src: image4, text: '실종' },
		{ src: image5, text: '킬링시저' },
	];

	return (
		<Container>
			<ImageArea>
				{imageList.map((data, idx) => (
					<Item key={idx}>
						<img src={data?.src} alt="공연사진" className="pic" />
						<p>{data?.text}</p>
					</Item>
				))}
			</ImageArea>
		</Container>
	);
}

export default Gallery;

const Container = styled.div`
	width: 100%;
`;

const ImageArea = styled.div`
	column-width: 176px;
	column-gap: 11px;
`;

const Item = styled.div`
	break-inside: avoid;
	margin-bottom: 8px;
	display: inline-block;
	width: 100%;

	.pic {
		width: 100%;
		height: auto;
		border-radius: 3px;
		object-fit: unset;
		display: block;
	}
	p {
		margin-top: 2px;
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		color: ${({ theme }) => theme.colors.gray700};
	}
`;
