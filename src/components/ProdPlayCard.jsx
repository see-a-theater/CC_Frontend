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

			<Date>{data.date}</Date>
		</Container>
	);
}

export default ProdPlayCard;

const Container = styled.div`
	margin-bottom: 19px;
	@media (min-width: 768px) {
	}
`;

const PosterCard = styled.div`
	position: relative;
	width: 172px;
	height: 240px;
	margin-bottom: 8px;
	padding: 12px;

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

	@media (min-width: 768px) {
		width: 230px;
		height: 320px;
		border-radius: 5px;
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

	@media (min-width: 768px) {
		margin-bottom: 12px;
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
	}
`;

const Location = styled.p`
	font-size: ${({ theme }) => theme.font.fontSize.body12};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.gray400};

	@media (min-width: 768px) {
		margin-bottom: 8px;
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;

const Date = styled.p`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.gray400};
	}
`;
