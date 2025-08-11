import styled from 'styled-components';

import ChevronLeft from '@/assets/icons/chevronLeft.svg?react';
import ChevronDown from '@/assets/icons/chevronDown.svg?react';

import location from '@/assets/icons/location.svg?react';
import time from '@/assets/icons/time.svg?react';
import price from '@/assets/icons/price.svg?react';

import Gallery from '../..//Detail/InfoArea/Gallery';

import Staff from '@/components/Detail/Staff';
import CastCardCheck from '@/components/Admin/CastCardCheck';
import AddCastCard from '@/components/Admin/AddCastCard';

import sampleImg from '@/assets/mock/images/실종.png';
import poster from '@/assets/mock/images/실종.png';
import posterPath from '@/assets/mock/images/실종_정보.png';
import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';
import profile from '@/assets/mock/images/프로필.png';
import { useNavigate, useParams } from 'react-router-dom';

function AdminPlayReview() {
	const mockGenre = [
		{ label: '극중극' },
		{ label: '드라마' },
		{ label: '구덩이' },
	];
	const mockInfo = [
		{
			icon: location,
			rows: [
				{
					value: '홍익대학교 학생회관 3층 소극장',
					valueType: 'default',
				},
			],
		},
		{
			icon: time,
			rows: [
				{
					values: [
						{
							value: '2025.10.03 (목) ~ 2025.10.05 (토)',
							valueType: 'default',
						},
						{ value: '60분', valueType: 'highlight' },
					],
				},
				{ value: '10.03 (목) 17:00', valueType: 'deem' },
				{ value: '10.04 (금) 17:00', valueType: 'deem' },
				{ value: '10.05 (토) 17:00', valueType: 'deem' },
			],
		},
		{
			icon: price,
			rows: [
				{
					label: '일반예매',
					value: '10,000원',
					labelType: 'deem',
					valueType: 'default',
				},
				{
					label: '홍대생',
					value: '7,000원',
					labelType: 'deem',
					valueType: 'default',
				},
			],
		},
	];
	const imageList = [
		{ src: image1, text: '실종' },
		{ src: image2, text: '카포네 트릴로지' },
		{ src: image3, text: '실종' },
		{ src: image4, text: '실종' },
		{ src: image5, text: '킬링시저' },
	];
	const playInfo = {
		title: '실종',
		results: {
			overview: `1998년 가을, 
                ‘아무 국가기관'의 업무 보조를 하게 된 학생
                모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.`,
			reservation: '공연 시작 3시간 전까지 예매 가능',
			notify: `예매시에 공연 관리자가 안내하는 입금계좌로 입금하시고, 공연 관리자의 입금 확인을 통해 티켓 예매 확인을 받을 수
                    있습니다. 공연 관리자가 입금을 확인해야 하므로 티켓 확인까지 시간이 걸릴 수 있습니다.`,
			place: '서울특별시 마포구 와우산로 94 홍익대학교 학생회관 3층 소극장',
			posterPath: posterPath,
		},
	};
	const mockdata = [
		{
			path: profile,
			id: 1,
			name: '이지후',
			role: '7급',
		},
		{
			path: profile,
			id: 2,
			name: '권혁진',
			role: '5급',
		},
		{
			path: profile,
			id: 3,
			name: '이승재',
			role: '6급',
		},
		{
			path: profile,
			id: 4,
			name: '임유빈',
			role: '학생1',
		},
	];
	const staffData = [
		{
			role: '원작',
			name: '최문애',
		},
		{
			role: '연출/ 각색',
			name: '서준서',
		},
		{
			role: '조연출',
			name: '권혁진, 이보미',
		},
	];

    const { playId } = useParams();
    console.log(playId)
	const navigate = useNavigate();
	const goRegister = () => {
		navigate(`/admin/plays/${playId}/register`);
	};

	return (
		<Container>
			<Summary>
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
			</Summary>

			<Info>
				<h3 className="title">실종</h3>
				<WebContent>
					<WebLeft>
						<WebInfo>
							<img
								src={poster}
								height={220}
								alt="포스터 이미지"
								className="poster"
							/>

							<InfoList>
								{mockInfo.map((section, idx) => (
									<InfoBlock key={idx}>
										<IconWrapper>
											<img src={section.icon} height={24} alt="icon" />
										</IconWrapper>

										<InfoContent>
											{section.rows.map((row, rIdx) => (
												<Row key={rIdx}>
													{row.label && (
														<StyledText
															className={
																row.labelType ?? row.vaslueType ?? 'default'
															}
														>
															{row.label}
														</StyledText>
													)}

													{Array.isArray(row.values) ? (
														row.values.map((item, i) => (
															<StyledText
																key={i}
																className={item.valueType ?? 'default'}
																style={
																	i === 0 ? { marginRight: 'auto' } : undefined
																}
															>
																{item.value}
															</StyledText>
														))
													) : (
														<StyledText className={row.valueType ?? 'default'}>
															{row.value}
														</StyledText>
													)}
												</Row>
											))}
										</InfoContent>
									</InfoBlock>
								))}
							</InfoList>
						</WebInfo>

						<ContentArea>
							<SubArea>
								<Title>공연 정보</Title>
								<SubTitle>공연시간 정보</SubTitle>
								<Text>{playInfo?.results.reservation} </Text>
								<SubTitle>공지사항</SubTitle>
								<Text>{playInfo?.results.notify} </Text>
								<img
									src={playInfo?.results.posterPath}
									alt="포스터 이미지"
									className="posterImg"
								/>
								<SubTitle>공연장 정보</SubTitle>
								<Text>{playInfo?.results.place}</Text>
								<div className="Map" />
							</SubArea>

							<SubArea>
								<Title>캐스팅 정보</Title>
								<SubTitle>출연</SubTitle>
								<Cast>
									{mockdata.map((data) => (
										<CastCardCheck
											key={data.id}
											path={data.path}
											name={data.name}
											role={data.role}
										/>
									))}
									<AddCastCard />
								</Cast>
								<SubTitle>감독 및 스태프</SubTitle>
								{staffData.map((data) => (
									<Staff name={data.name} role={data.role} />
								))}
							</SubArea>

							<SubArea>
								<Title>사진첩</Title>
								<Gallery data={imageList} />
							</SubArea>
						</ContentArea>
					</WebLeft>

					<BookBtn onClick={goRegister}>등록/반려하러 가기</BookBtn>
				</WebContent>
			</Info>
		</Container>
	);
}

export default AdminPlayReview;

const Container = styled.div`
	width: 100vw;
`;

const Summary = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;

	padding: 100px 100px 0px 160px;
	background:
		linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%),
		url(${sampleImg}) lightgray 0px -202.429px;
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
`;
const Content = styled.div``;
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

const Info = styled.div`
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
const InfoList = styled.div`
	margin-top: 20px;

	width: 100%;
	background: ${({ theme }) => theme.colors.pink100};
	padding: 16px 20px;

	@media (min-width: 768px) {
		margin-top: 0px;
	}
`;
const InfoBlock = styled.div`
	display: flex;
	gap: 32px;
	margin-bottom: 20px;
`;
const IconWrapper = styled.div`
	height: 24px;
	width: 24px;

	img {
		width: 100%;
	}
`;

const InfoContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;
const StyledText = styled.span`
	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.medium};

	&.default {
		color: ${({ theme }) => theme.colors.gray900};
	}
	&.highlight {
		color: ${({ theme }) => theme.colors.pink500};
	}
	&.deem {
		color: ${({ theme }) => theme.colors.gray500};
	}
`;

const ContentArea = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
	.posterImg {
		width: 500px;
		border-radius: 10px;
	}
`;

const SubArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	.Map {
		background-color: ${({ theme }) => theme.colors.gray200};
		width: 816px;
		height: 332px;
	}
`;
const Cast = styled.div`
	display: flex;
	gap: 32px;
	flex-wrap: wrap;
`;
const BookBtn = styled.button`
	padding: 4px 12px;
	width: 300px;
	height: 40px;

	background: ${({ theme }) => theme.colors.pink600};

	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayWhite};
`;
const Title = styled.div`
	padding-bottom: 12px;
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink600};
	border-bottom: 1px solid #e6e6e6;
`;
const SubTitle = styled.p`
	//margin-bottom: 10px;
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayMain};
`;
const Text = styled.p`
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};
`;
