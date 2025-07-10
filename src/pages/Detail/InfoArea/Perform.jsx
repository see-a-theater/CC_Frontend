import poster from '@/assets/mock/images/실종_정보.png';
import styled from 'styled-components';

function Perform(props) {
	const mockInfo = [
		{
			title: '줄거리',
			content: `1998년 가을, 
                    ‘아무 국가기관'의 업무 보조를 하게 된 학생
                    모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.`,
		},
		{
			title: '공연시간 정보',
			content: `공연 시작 3시간 전까지 예매 가능`,
		},
		{
			title: '공연장 정보',
			additionalTitle: '상세 주소',
			content: `서울특별시 마포구 와우산로 94
                    홍익대학교 학생회관 3층 소극장`,
		},
		{
			title: '포스터',
			content: poster,
		},
	];

	console.log('show data:', props);

	return (
		<Container>
			{mockInfo.map((content) => (
				<Content>
					{/*props?.result.name*/}
					{/*props?.result.summary*/}
					{/*props?.result.runtime*/}
					{/*props?.result.place*/}
					
					<Title>{content.title}</Title>
					{content.title == '줄거리' && <Summary>{content.content}</Summary>}
					{content.title == '공연시간 정보' && <Text>{content.content}</Text>}
					{content.title == '공연장 정보' && (
						<>
							<Location>
								<div className="textArea">
									<p className="additional">{content.additionalTitle}</p>
									<p>{content.content}</p>
									<p className="copy">복사</p>
								</div>
								<div className="map"></div>
							</Location>
							<WebLocation>
								<p>{content.content}</p>
								<div className="map"></div>
							</WebLocation>
						</>
					)}
					{content.title == '포스터' && (
						<img src={content.content} className="Poster" alt="포스터" />
					)}
					{/*props?.result.posterUmageUrl*/}
				</Content>
			))}
		</Container>
	);
}

export default Perform;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	.Poster {
		width: 80%;
		align-self: center;

		@media (min-width: 768px) {
			width: 400px;
			border-radius: 5px;
		}
	}
`;

const Title = styled.div`
	font-size: ${({ theme }) => theme.font.fontSize.body16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink500};

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.fontSize.body16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
const Summary = styled.div`
	width: 100%;

	background: ${({ theme }) => theme.colors.gray200};
	padding: 12px 20px;
	border-radius: 3px;

	font-size: ${({ theme }) => theme.font.fontSize.body13};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
const Text = styled.div`
	width: 100%;

	font-size: ${({ theme }) => theme.font.fontSize.body13};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
const Location = styled.div`
	.textArea {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		margin-bottom: 20px;
	}
	.additional {
		color: ${({ theme }) => theme.colors.gray400};
	}
	.copy {
		color: ${({ theme }) => theme.colors.pink400};
	}
	.map {
		width: 100%;
		height: 148px;
		background: ${({ theme }) => theme.colors.gray300};
	}
	font-size: ${({ theme }) => theme.font.fontSize.body13};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};

	@media (min-width: 768px) {
		display: none;
	}
`;
const WebLocation = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 20px;

		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
		.map {
			width: 100%;
			height: 148px;
			background: ${({ theme }) => theme.colors.gray300};
		}
	}
`;
