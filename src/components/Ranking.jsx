import styled from 'styled-components';
import Poster from '@/assets/images/test-poster1.png';

/* 터치로 카드넘김 효과 추가 필요*/
function Ranking({ data }) {
	// console.log('Poster path:', Poster);
	const mockData = [
		{
			title: '실종',
			location: '홍익대학교 학생회관 3층 소극장장장장',
			date: '2025.10.13 (목) 17:00',
			img: Poster,
		},
		{
			title: '무대 밖',
			location: '혜화 소극장ABC',
			date: '2025.11.01 (토) 14:00',
			img: Poster,
		},
		{
			title: '그림자놀이',
			location: '신촌 작은극장',
			date: '2025.12.20 (일) 19:30',
			img: Poster,
		},
		{
			title: '그림자놀이',
			location: '신촌 작은극장',
			date: '2025.12.20 (일) 19:30',
			img: Poster,
		},
		{
			title: '그림자놀이',
			location: '신촌 작은극장',
			date: '2025.12.20 (일) 19:30',
			img: Poster,
		},
		{
			title: '그림자놀이',
			location: '신촌 작은극장',
			date: '2025.12.20 (일) 19:30',
			img: Poster,
		},
	];
	return (
		<Wrapper>
			<CardList>
				{data &&
					data.map((item, index) => (
						<Card key={index}>
							<Img background={item.posterImageUrl}>
								<IndexLabel>{index + 1}</IndexLabel>
							</Img>
							<h3>{item.name}</h3>
							<p>{item.place}</p>
							<p className="extra">{item.schedule}</p>
						</Card>
					))}
			</CardList>
		</Wrapper>
	);
}
export default Ranking;

const Wrapper = styled.div``;

const Card = styled.div`
	width: 128px;
	@media (min-width: 768px) {
		width: 200px;
	}
	h3 {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		margin-bottom: 8px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		@media (min-width: 768px) {
			font-size: ${({ theme }) => theme.font.fontSize.title16};
		}
	}
	p {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.body10};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		@media (min-width: 768px) {
			font-size: ${({ theme }) => theme.font.fontSize.body14};
		}
	}
	.extra {
		color: ${({ theme }) => theme.colors.gray400};
	}
`;

const Img = styled.div`
	position: relative;
	width: 128px;
	height: 180px;
	border-radius: 3px;
	background:
		linear-gradient(180deg, rgba(0, 0, 0, 0) 50.58%, rgba(0, 0, 0, 0.5) 100%),
		url(${({ background }) => background}) center/cover no-repeat;
	margin-bottom: 12px;
	@media (min-width: 768px) {
		width: 200px;
		height: 280px;
		border-radius: 5px;
	}
`;
const IndexLabel = styled.div`
	position: absolute;
	bottom: 12px;
	left: 12px;
	color: ${({ theme }) => theme.colors.grayWhite};
	font-size: ${({ theme }) => theme.font.fontSize.headline20};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	@media (min-width: 768px) {
		font-size: 36px;
	}
`;

const CardList = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	overflow-x: auto;
	padding-bottom: 8px; /* 스크롤 안 보이게 여유 */
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE/Edge */
	@media (min-width: 768px) {
		gap: 28px;
	}
	&::-webkit-scrollbar {
		display: none; /* Chrome/Safari */
	}
`;
