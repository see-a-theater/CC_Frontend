import { useState } from "react";
import styled from "styled-components";

function Carousel(props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<Container>
			<ImageArea>
				<img src={props?.data[currentIndex].src} alt={props?.data[currentIndex]?.text} />
			</ImageArea>

			<DotWrapper>
				{props?.data.map((_, index) => (
					<Dot
						key={index}
						$isActive={index === currentIndex}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</DotWrapper>
		</Container>
	);
}

export default Carousel;


const Container = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;
	position: relative;
`;

const ImageArea = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 12px;
	overflow: hidden;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;


const DotWrapper = styled.div`
	position: absolute;
	bottom: 12px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 6px;
`;

const Dot = styled.div`
	width: 4px;
	height: 4px;
	border-radius: 50%;
	cursor: pointer;
	background-color: ${({ $isActive, theme }) =>
		$isActive ? theme.colors.pink500 : theme.colors.gray300};
`;
