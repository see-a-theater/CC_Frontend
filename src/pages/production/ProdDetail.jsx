import Hamburger from '@/components/Hamburger';
import styled from 'styled-components';

function ProdDetail() {
	const mockData = [
		{
			production: '홍익극연구회',
			theatre: '실종',
			date: '2025.04.25~2025.04.28',
			location: '홍익대학교 학생회관 3층 소극장',
			message: `홍익극연구회 20회 공연 <실종>을 무사히 마쳤습니다~!
                    3일동안 수고한 우리 배우분들과 스텝분들에게 감사인사를 🙏
                    어쩌구 저쩌구 자축~~~~~`,
		},
	];

	return (
		<Container>
			<Hamburger back={true} title={mockData[0].production} />

			<Content>
				<div className="photo" />

				<TextArea>
					<h3 className="title">{mockData[0].theatre}</h3>
					<p className="subInfo">{mockData[0].date}</p>
					<p className="subInfo">{mockData[0].location}</p>
					<Hr />
					<p className="message">{mockData[0].message}</p>
				</TextArea>
			</Content>
			<Hr />
			<MorePic>
				<p className="galleryTitle">
					'{mockData[0].production}'의 사진첩 더보기
				</p>
			</MorePic>
		</Container>
	);
}

export default ProdDetail;

const Container = styled.div`
	padding: 0 20px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	.photo {
		background: ${({ theme }) => theme.colors.gray400};
		width: 100%;
		aspect-ratio: 1;
		border-radius: 10px;
	}
	margin-bottom: 40px;
`;
const TextArea = styled.div`
	.title {
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};

		margin-bottom: 14px;
	}
	.subInfo {
		font-size: ${({ theme }) => theme.font.fontSize.body12};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.gray500};

		margin-bottom: 14px;
	}
	.message {
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};

		margin-top: 16px;
	}
`;
const Hr = styled.div`
	border-bottom: solid ${({ theme }) => theme.colors.pink200} 1px;
`;

const MorePic = styled.div`
	padding-top: 24px;
    
	.galleryTitle {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
