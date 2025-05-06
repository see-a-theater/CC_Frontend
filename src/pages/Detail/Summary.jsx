import styled from 'styled-components';

import sampleImg from '@/assets/mock/images/실종.png';
import chevronLeft from '@/assets/icons/chevronLeft.svg';
import chevronDown from '@/assets/icons/chevronDown.svg';

function Summary() {
	const mockGenre = [
		{ label: '극중극' },
		{ label: '드라마' },
		{ label: '구덩이' },
	];

	return (
		<Content>
			<Top>
				<img src={chevronLeft} height={15} alt="뒤로가기기" />
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
				‘아무 국가기관'의 업무 보조를 하게 된 학생 모두가 동일한 것을 추구하는
				사회에서 학생은 적응하지 못한다.
			</p>
			<img src={chevronDown} height={7} alt="스크롤" className="chevronDown" />
		</Content>
	);
}

export default Summary;

const Top = styled.div`
	padding-top: 44px;
	height: 87px;
	display: flex;
	align-items: center;
`;
const Content = styled.div`
	padding: 0 20px 0 20px;

	width: 100vw;
	height: 100vh;
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
`;

const TagList = styled.div`
	margin-top: 20px;

	display: flex;
	gap: 8px;
`;
const Tag = styled.div`
	display: inline-block;
	padding: 4px 12px;
	border: solid 1px ${({ theme }) => theme.colors.gray300};
	border-radius: 13px;

	font-size: ${({ theme }) => theme.font.fontSize.body12};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayWhite};
`;
