import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import useCustomFetch from '@/utils/hooks/useAxios';

import sampleImg from '@/assets/mock/images/실종.png';
import ChevronLeft from '@/assets/icons/chevronLeft.svg?react';
import ChevronDown from '@/assets/icons/chevronDown.svg?react';

function Summary() {
	const { playId } = useParams();

	const {
		data: playData,
		error,
		loading,
	} = useCustomFetch(`/amateurs/${playId}`);
	// 현재 404, 존재하지 않는 뮤지컬로 뜸 (데이터 없는 것으로 추정)
	// 아직 api에 데이터가 없어 mock으로 대체

	console.log('error:', error);
	console.log('loading:', loading);
	console.log('data:', playData);

	const mockGenre = [
		{ label: '극중극' },
		{ label: '드라마' },
		{ label: '구덩이' },
	];

	return (
		<Container>
			<Mobile>
				<Content>
					<Top>
						<ChevronLeft height={15} alt="뒤로가기" />
					</Top>
					{/*playData?.result.title*/}
					<h1>실종</h1>

					<TagList>
						{mockGenre.map((genre, index) => (
							<Tag key={index}>{genre.label}</Tag>
						))}
						{/*playData?.result.hashtag*/}
					</TagList>

					<p className="summary">
						{/*playData?.result.summary*/}
						1998년 가을,
						<br />
						<br />
						‘아무 국가기관'의 업무 보조를 하게 된 학생 모두가 동일한 것을
						추구하는 사회에서 학생은 적응하지 못한다.
					</p>
					<ChevronDown height={7} alt="스크롤" className="chevronDown" />
				</Content>
			</Mobile>

			<Web>
				<Content>
					<Top>
						<ChevronLeft height={19} alt="뒤로가기" />
					</Top>

					<h1>실종</h1>

					<TagList>
						{mockGenre.map((genre, index) => (
							<Tag key={index}>{genre.label}</Tag>
						))}
					</TagList>

					<p className="summary">
						1998년 가을,
						<br />
						<br />
						‘아무 국가기관'의 업무 보조를 하게 된 학생 모두가 동일한 것을
						추구하는 사회에서 학생은 적응하지 못한다.
					</p>
					<ChevronDown height={28} alt="스크롤" className="chevronDown" />
				</Content>
			</Web>
		</Container>
	);
}

export default Summary;

const Container = styled.div``;
const Mobile = styled.div`
	display: flex;
	padding: 0 20px 0 20px;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.75)), url('${sampleImg}');
	background-size: cover;

	h1 {
		font-size: ${({ theme }) => theme.font.fontSize.headline36};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayWhite};
		margin-top: 6px;
	}
	p {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayWhite};
	}
	.summary {
		margin-top: 32px;
	}
	.chevronDown {
		position: absolute;
		bottom: 44px;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const Content = styled.div`
	width: 100vw;
	height: 100vh;
`;
const Top = styled.div`
	padding-top: 44px;
	height: 87px;
	display: flex;
	align-items: center;
`;
const TagList = styled.div`
	margin-top: 20px;

	display: flex;
	gap: 8px;

	@media (min-width: 768px) {
		display: flex;
		gap: 12px;
	}
`;
const Tag = styled.div`
	display: inline-block;
	padding: 4px 12px;
	border: solid 1px ${({ theme }) => theme.colors.gray300};
	border-radius: 13px;

	font-size: ${({ theme }) => theme.font.fontSize.body12};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayWhite};

	@media (min-width: 768px) {
		padding: 1px 40px;
		border-radius: 3px;
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayWhite};
	}
`;
const Web = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		width: 100%;
		padding: 100px 100px 0px 160px;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.75)), url('${sampleImg}');
		background-size: cover;

		h1 {
			font-size: ${({ theme }) => theme.font.fontSize.headline80};
			font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
			color: ${({ theme }) => theme.colors.grayWhite};
			margin-top: 140px;
		}
		p {
			font-size: ${({ theme }) => theme.font.fontSize.headline20};
			font-weight: ${({ theme }) => theme.font.fontWeight.bold};
			color: ${({ theme }) => theme.colors.grayWhite};
		}
		.summary {
			margin-top: 60px;
		}
		.chevronDown {
			position: absolute;
			bottom: 44px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;
