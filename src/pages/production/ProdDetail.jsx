import Hamburger from '@/components/Hamburger';
import Carousel from '@/components/Carousel';

import styled from 'styled-components';

import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';

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
	const imageList = [
		{ src: image1, text: '실종', theatre: '홍익극연구회' },
		{ src: image2, text: '카포네 트릴로지', theatre: '홍익극연구회' },
		{ src: image3, text: '실종', theatre: '홍익극연구회' },
		{ src: image4, text: '실종', theatre: '홍익극연구회' },
		{ src: image5, text: '킬링시저', theatre: '설렘' },
	];

	return (
		<Container>
			<Hamburger back={true} title={mockData[0].production} />

			<Content>
				<Carousel data={imageList} />

				<TextArea>
					<h3 className="title">{mockData[0].theatre}</h3>
					<p className="subInfo">{mockData[0].date}</p>
					<p className="subInfo">{mockData[0].location}</p>
					<Hr />
					<p className="message">{mockData[0].message}</p>
				</TextArea>
			</Content>
			<Divide />
			<MorePic>
				<p className="galleryTitle">
					'{mockData[0].production}'의 사진첩 더보기
				</p>
				<ImgList>
					{imageList?.map((data) => (
						<ImgCard>
							<img src={data.src} alt={data.text} />
							<p>{data.text}</p>
						</ImgCard>
					))}
				</ImgList>
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
const Divide = styled.div`
	border-bottom: solid ${({ theme }) => theme.colors.pink200} 4px;
	width: 100vw;
	margin-left: calc(-50vw + 50%);
`;
const MorePic = styled.div`
	padding-top: 24px;

	.galleryTitle {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};

		margin-bottom: 18px;
	}
`;
const ImgList = styled.div`
	display: flex;
	gap: 12px;
	overflow-x: auto;
	overflow-y: hidden;

	&::-webkit-scrollbar {
		display: none;
	}
`;
const ImgCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	img {
		width: 128px;
		flex-shrink: 0;
		aspect-ratio: 1/1;
		border-radius: 3px;
		object-fit: cover;
	}
	p {
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
