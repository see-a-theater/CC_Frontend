import styled from 'styled-components';
import sampleImg from '@/assets/mock/images/실종.png';

function PlayCard() {
	return (
		<Container>
			<Text>
				<h3 className="Title"> 실종 </h3>
				<p className="Location">홍익대학교 학생회관 3층 소극장</p>
				<p className="Date">2024.10.03 (목) 19:00</p>
			</Text>
		</Container>
	);
}

export default PlayCard;

const Container = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;
	border-radius: 10px;
	padding: 28px;

	position: relative;

	background:
		linear-gradient(180deg, rgba(0, 0, 0, 0) 25.94%, rgba(0, 0, 0, 0.6) 77.94%),
		url('${sampleImg}');
	background-size: cover;
`;
const Text = styled.div`
	position: absolute;
	left: 28px;
	bottom: 28px;
	color: ${({ theme }) => theme.colors.grayWhite};

	.Title {
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};

        margin-bottom: 28px;
	}
	.Location {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};

        margin-bottom: 8px;
	}
	.Date {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	}
`;
