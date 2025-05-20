import styled from 'styled-components';
import { useState } from 'react';

import location from '@/assets/icons/location.svg';
import time from '@/assets/icons/time.svg';
import price from '@/assets/icons/price.svg';

import ChevronLeftPink from '@/assets/icons/chevronLeftPink.svg?react';

import poster from '@/assets/mock/images/실종.png';

import Cast from './InfoArea/Cast';
import Perform from './InfoArea/Perform';
import Gallery from './InfoArea/Gallery';

function Info() {
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
	const mockGenre = [
		{ label: '극중극' },
		{ label: '드라마' },
		{ label: '구덩이' },
	];

	const [activeTab, setActiveTab] = useState('perform');

	return (
		<Container>
			<Top>
				<ChevronLeftPink height={15} alt="이전" className="back" />
				<p className="title">실종</p>
			</Top>
			<img src={poster} height={220} alt="포스터 이미지" className="poster" />
			<h3 className="title">실종</h3>
			<TagList>
				{mockGenre.map((genre, index) => (
					<Tag key={index}>{genre.label}</Tag>
				))}
			</TagList>

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
											className={row.labelType ?? row.vaslueType ?? 'default'}
										>
											{row.label}
										</StyledText>
									)}

									{Array.isArray(row.values) ? (
										row.values.map((item, i) => (
											<StyledText
												key={i}
												className={item.valueType ?? 'default'}
												style={i === 0 ? { marginRight: 'auto' } : undefined}
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
				{activeTab === 'perform' && <Perform />}
				{activeTab === 'cast' && <Cast />}
				{activeTab === 'gallery' && <Gallery />}
			</ContentArea>

			<BookBtn>예매하러 가기</BookBtn>
		</Container>
	);
}

export default Info;

const Container = styled.div`
	background: ${({ theme }) => theme.colors.ivoryBg};
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.poster {
		border-radius: 3px;
	}
	h3 {
		margin-top: 20px;
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
		font-weight: ${({ theme }) => theme.font.fontWeight.ExtraBold};
		color: ${({ theme }) => theme.colors.grayMain};
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
	padding: 16px 20px;
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
	padding: 20px 128px;
	border-radius: 10px;

	background: ${({ theme }) => theme.colors.pink600};

	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayWhite};
`;
