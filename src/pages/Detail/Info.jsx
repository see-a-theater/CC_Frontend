import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCustomFetch from '@/utils/hooks/useAxios';

import Location from '@/assets/icons/location.svg?react';
import Time from '@/assets/icons/time.svg?react';
import Price from '@/assets/icons/price.svg?react';

import ChevronLeftPink from '@/assets/icons/chevronLeftPink.svg?react';

import sampleImg from '@/assets/mock/images/실종.png';
import profile from '@/assets/mock/images/프로필.png';

import Cast from './InfoArea/Cast';
import Perform from './InfoArea/Perform';
import Gallery from './InfoArea/Gallery';

function Info() {
	const { playId } = useParams();
	const mockData = {
		isSuccess: true,
		code: '200',
		message: 'OK',
		result: {
			amateurShowId: 0,
			name: '실종',
			place: '홍익대학교 학생회관 3층 소극장',
			schedule: '2025.10.03 (목) ~ 2025.10.05 (토)',
			runtime: '60분',
			account: '123456789',
			contact: '010-1111-2222',
			hashtag: '극중극, 드라마, 구덩이',
			summary:
				"1998년 가을, ‘아무 국가기관'의 업무 보조를 하게 된 학생 모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.",
			posterImageUrl: sampleImg,
			notice: {
				content: 'string',
				noticeImageUrl: 'string',
				timeInfo: 'string',
			},
			casting: [
				{
					actorName: '이지후',
					castingName: '7급',
					castingImageUrl: profile,
				},
				{
					actorName: '권혁진',
					castingName: '5급',
					castingImageUrl: profile,
				},
				{
					actorName: '이승재',
					castingName: '6급',
					castingImageUrl: profile,
				},
				{
					actorName: '임유빈',
					castingName: '학생1',
					castingImageUrl: profile,
				},
			],
			staff: [
				{
					position: '원작',
					staffName: '최문애',
				},
				{
					position: '연출/각색',
					staffName: '서준서',
				},
				{
					position: '조연출',
					staffName: '권혁진, 이보미',
				},
			],
			rounds: [
				{
					roundNumber: 0,
					performanceDateTime: '10.03 (목) 17:00',
					totalTicket: 0,
				},
				{
					roundNumber: 1,
					performanceDateTime: '10.04 (금) 17:00',
					totalTicket: 0,
				},
				{
					roundNumber: 2,
					performanceDateTime: '10.05 (토) 17:00',
					totalTicket: 0,
				},
			],
			tickets: [
				{
					discountName: '일반예매',
					price: 10000,
				},
				{
					discountName: '홍대생',
					price: 7000,
				},
			],
		},
	};
	const mockGenre = [
		{ label: '극중극' },
		{ label: '드라마' },
		{ label: '구덩이' },
	];
	const displayGenre = mockData?.result.hashtag
		? mockData?.result.hashtag.split(', ').map((tag) => ({ label: tag }))
		: mockGenre;

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

	const [activeTab, setActiveTab] = useState('perform');

	return (
		<Container>
			<Mobile>
				<Top>
					<ChevronLeftPink height={15} alt="이전" className="back" />
					<p className="title">{mockData?.result.name}</p>
				</Top>
				<img
					src={mockData?.result.posterImageUrl}
					height={220}
					alt="포스터 이미지"
					className="poster"
				/>
				<h3 className="title">{mockData?.result.name}</h3>
				<TagList>
					{displayGenre.map((genre, index) => (
						<Tag key={index}>{genre.label}</Tag>
					))}
				</TagList>

				<InfoList>
					<InfoBlock>
						<IconWrapper>
							<Location height={24} />
						</IconWrapper>

						<p className="blackTxt">{mockData?.result.place}</p>
					</InfoBlock>
					<InfoBlock>
						<IconWrapper>
							<Time height={24} />
						</IconWrapper>

						<div className="gap10">
							<div>
								<span className="blackTxt">{mockData?.result.schedule}</span>
								<span className="pinkTxt">{mockData?.result.runtime}</span>
							</div>

							<div className="gap8">
								{mockData?.result.rounds.map((data) => (
									<p className="grayTxt">
										{data.roundNumber}회차 {data.performanceDateTime}
									</p>
								))}
							</div>
						</div>
					</InfoBlock>
					<InfoBlock>
						<IconWrapper>
							<Price height={24} />
						</IconWrapper>

						<div className="gap10">
							{mockData?.result.tickets.map((data) => (
								<div className="ticket">
									<p className="grayTxt discountName">{data.discountName}</p>
									<p className="blackTxt">{data.price}</p>
								</div>
							))}
						</div>
					</InfoBlock>
				</InfoList>

				<TabBar>
					<TabItem
						className={activeTab === 'perform' ? 'active' : ''}
						onClick={() => setActiveTab('perform')}
					>
						공연정보
					</TabItem>
					<TabItem
						className={activeTab === 'cast' ? 'active' : ''}
						onClick={() => setActiveTab('cast')}
					>
						캐스팅
					</TabItem>
					<TabItem
						className={activeTab === 'gallery' ? 'active' : ''}
						onClick={() => setActiveTab('gallery')}
					>
						사진첩
					</TabItem>
				</TabBar>

				<ContentArea>
					{activeTab === 'perform' && <Perform data={mockData}/>}
					{activeTab === 'cast' && <Cast data={mockData}/>}
					{activeTab === 'gallery' && <Gallery data={mockData}/>}
				</ContentArea>

				<BookBtn>예매하러 가기</BookBtn>
			</Mobile>

			<Web>
				<h3 className="title">{mockData?.result.name}</h3>
				<WebContent>
					<WebLeft>
						<WebInfo>
							<img
								src={mockData?.result.posterImageUrl}
								height={220}
								alt="포스터 이미지"
								className="poster"
							/>

							<InfoList>
								<InfoBlock>
									<IconWrapper>
										<Location height={24} />
									</IconWrapper>

									<p className="blackTxt">{mockData?.result.place}</p>
								</InfoBlock>
								<InfoBlock>
									<IconWrapper>
										<Time height={24} />
									</IconWrapper>

									<div className="gap10">
										<div>
											<span className="blackTxt">
												{mockData?.result.schedule}
											</span>
											<span className="pinkTxt">
												{mockData?.result.runtime}
											</span>
										</div>
										<div className="gap12">
											{mockData?.result.rounds.map((data) => (
												<p className="grayTxt">
													{data.roundNumber}회차 {data.performanceDateTime}
												</p>
											))}
										</div>
									</div>
								</InfoBlock>
								<InfoBlock>
									<IconWrapper>
										<Price height={24} />
									</IconWrapper>

									<div className="gap12">
										{mockData?.result.tickets.map((data) => (
											<div className="ticket">
												<p className="grayTxt discountName">
													{data.discountName}
												</p>
												<p className="blackTxt">{data.price}</p>
											</div>
										))}
									</div>
								</InfoBlock>
							</InfoList>
						</WebInfo>

						<TabBar>
							<TabItem
								className={activeTab === 'perform' ? 'active' : ''}
								onClick={() => setActiveTab('perform')}
							>
								공연정보
							</TabItem>
							<TabItem
								className={activeTab === 'cast' ? 'active' : ''}
								onClick={() => setActiveTab('cast')}
							>
								캐스팅
							</TabItem>
							<TabItem
								className={activeTab === 'gallery' ? 'active' : ''}
								onClick={() => setActiveTab('gallery')}
							>
								사진첩
							</TabItem>
						</TabBar>

						<ContentArea>
							{activeTab === 'perform' && <Perform data={mockData} />}
							{activeTab === 'cast' && <Cast data={mockData} />}
							{activeTab === 'gallery' && <Gallery data={mockData} />}
						</ContentArea>
					</WebLeft>

					<BookBtn>예매하러 가기</BookBtn>
				</WebContent>
			</Web>
		</Container>
	);
}

export default Info;

const Container = styled.div`
	background: ${({ theme }) => theme.colors.ivoryBg};
`;
const Mobile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 20px;
	.poster {
		border-radius: 3px;
	}
	h3 {
		margin-top: 20px;
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
		font-weight: ${({ theme }) => theme.font.fontWeight.ExtraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

const Top = styled.div`
	position: relative;
	width: 100%;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;

	.back {
		position: absolute;
		left: 0;
	}
	.title {
		font-size: ${({ theme }) => theme.font.fontSize.body16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
const TagList = styled.div`
	margin-top: 14px;

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
	color: ${({ theme }) => theme.colors.gray400};
`;

const InfoList = styled.div`
	margin-top: 20px;
	width: 100%;
	background: ${({ theme }) => theme.colors.pink100};
	padding: 20px;

	display: flex;
	flex-direction: column;
	gap: 32px;

	.blackTxt {
		color: ${({ theme }) => theme.colors.grayMain};
	}
	.pinkTxt {
		color: ${({ theme }) => theme.colors.pink600};
		margin-left: 8px;
	}
	.grayTxt {
		color: ${({ theme }) => theme.colors.gray400};
	}
	.discountName {
		min-width: 80px;
	}
	.gap8 {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.gap10 {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.gap12 {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	@media (min-width: 768px) {
		margin-top: 0px;
	}
`;

const InfoBlock = styled.div`
	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.normal};

	display: flex;
	gap: 32px;

	.ticket {
		display: flex;
	}

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	}
`;

const IconWrapper = styled.div`
	height: 24px;
	width: 24px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const TabBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 30px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.pink400};

	position: sticky;
	top: 0;
	background: ${({ theme }) => theme.colors.ivoryBg};
	z-index: 10;
`;

const TabItem = styled.button`
	flex: 1;
	padding: 12px 0;
	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink400};
	border: none;
	background: transparent;
	position: relative;
	cursor: pointer;

	&.active {
		color: ${({ theme }) => theme.colors.pink600};

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 20%;
			width: 60%;
			height: 2px;
			background: ${({ theme }) => theme.colors.pink600};
			border-radius: 1px;
		}
	}
`;

const ContentArea = styled.div`
	padding: 20px 0;
	width: 100%;
`;
const BookBtn = styled.button`
	width: 100%;
	padding: 20px 100px;
	border-radius: 10px;

	background: ${({ theme }) => theme.colors.pink600};

	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayWhite};

	@media (min-width: 768px) {
		padding: 4px 12px;
		width: 300px;
		height: 40px;
	}
`;
const Web = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 40px 100px 0px 160px;

		.poster {
			border-radius: 3px;
		}
		h3 {
			font-size: ${({ theme }) => theme.font.fontSize.headline36};
			font-weight: ${({ theme }) => theme.font.fontWeight.ExtraBold};
			color: ${({ theme }) => theme.colors.grayMain};
			margin-bottom: 28px;
		}
	}
`;
const WebContent = styled.div`
	display: flex;
	gap: 65px;
`;
const WebLeft = styled.div`
	width: 839px;
`;
const WebInfo = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 40px;
`;
