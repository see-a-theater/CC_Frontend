import styled from 'styled-components';

import sampleImg from '@/assets/mock/images/실종.png';

function NowShowing() {
	return (
		<Container>
			<img src={sampleImg} alt="포스터" className="poster" />
			<TextArea>
				<h3 className="Title">실종</h3>
				<p className="Location">홍익대학교 학생회관 3층 소극장</p>
				<p className="Date">2024.10.03 (목) 19:00</p>
			</TextArea>
		</Container>
	);
}

export default NowShowing;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 24px;
	align-items: center;

	.poster {
		width: 114px;
        height: 160px;
        object-fit: cover;
        border-radius: 3px;
	}
`;
const TextArea = styled.div`
	.Title {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};

		margin-bottom: 45px;
	}
	.Location {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};

		margin-bottom: 12px;
	}
	.Date {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	}
`;
