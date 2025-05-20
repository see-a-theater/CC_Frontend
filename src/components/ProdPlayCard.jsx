import styled from 'styled-components';

function ProdPlayCard({ data }) {
	const isEnded = !data.activeNow;

	return (
		<Container>
			<PosterCard imageUrl={data.src} isEnded={isEnded}>
				{isEnded && <Tag>공연종료</Tag>}
			</PosterCard>
			<Title>{data.title}</Title>
			<Location>{data.location}</Location>
		</Container>
	);
}

export default ProdPlayCard;

const Container = styled.div`
	margin-bottom: 19px;
`;

const PosterCard = styled.div`
	position: relative;
	width: 172px;
	height: 240px;
	margin-bottom: 8px;
	padding: 20px;

	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	border-radius: 3px;
	overflow: hidden;

	&::before {
		content: '';
		display: ${({ isEnded }) => (isEnded ? 'block' : 'none')};
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 40%;
		background: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 31.73%);
		z-index: 0;
	}
`;

const Tag = styled.div`
	position: relative;
	z-index: 1;
	display: inline-block;

	padding: 4px 8px;
	border-radius: 3px;

	background: ${({ theme }) => theme.colors.gray200};
	font-size: ${({ theme }) => theme.font.fontSize.body12};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.gray400};
`;

const Title = styled.h3`
	margin-bottom: 10px;

	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayMain};
`;

const Location = styled.p`
	font-size: ${({ theme }) => theme.font.fontSize.body12};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.gray400};
`;
