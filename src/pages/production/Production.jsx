import styled from 'styled-components';
import { useState } from 'react';

import Hamburger from '@/components/Hamburger';
import Masonry from '@/components/Masonry';
import ProdPlayCard from '@/components/ProdPlayCard';

import image1 from '@/assets/mock/images/image1.png';
import image2 from '@/assets/mock/images/image2.png';
import image3 from '@/assets/mock/images/image3.png';
import image4 from '@/assets/mock/images/image4.png';
import image5 from '@/assets/mock/images/image5.png';
import poster from '@/assets/mock/images/실종.png';
import Heart from '@/assets/icons/Heart.svg?react';
import Ticket from '@/assets/icons/Ticket.svg?react';
import Gallery from '@/assets/icons/Gallery.svg?react';
import { useNavigate } from 'react-router-dom';

function Production() {
	const imageList = [
		{ src: image1, text: '실종' },
		{ src: image2, text: '카포네 트릴로지' },
		{ src: image3, text: '실종' },
		{ src: image4, text: '실종' },
		{ src: image5, text: '킬링시저' },
	];
	const playList = [
		{
			title: '실종',
			src: poster,
			location: '홍익대학교 학생회관 3층 소극장',
			activeNow: true,
		},
		{
			title: '실종',
			src: poster,
			location: '홍익대학교 학생회관 3층 소극장',
			activeNow: false,
		},
		{
			title: '실종',
			src: poster,
			location: '홍익대학교 학생회관 3층 소극장',
			activeNow: false,
		},
		{
			title: '실종',
			src: poster,
			location: '홍익대학교 학생회관 3층 소극장',
			activeNow: false,
		},
	];



	const token = 'producer';
	localStorage.setItem('token', token);

	const [activeTab, setActiveTab] = useState('plays');
	const navigate = useNavigate();
	const navigateToDetail = () => {
		navigate('/production/1');
	};
	const navigateToUpload =() => {
		navigate('/production/upload_photo')
	}

	return (
		<Container>
			<Hamburger back={true} />

			<Theatre>
				<h3 className="production" onClick={navigateToDetail}>
					홍익극연구회
				</h3>
				<Heart />
			</Theatre>
			<TabBar>
				<TabItem
					className={activeTab === 'plays' ? 'active' : ''}
					onClick={() => setActiveTab('plays')}
				>
					연극
				</TabItem>
				<TabItem
					className={activeTab === 'gallery' ? 'active' : ''}
					onClick={() => setActiveTab('gallery')}
				>
					사진첩
				</TabItem>
			</TabBar>

			<ContentArea>
				{activeTab === 'plays' && (
					<>
						<SubText>{playList.length}개의 연극</SubText>
						{token && (
							<FixedProdButton>
								<ProdButton>
									<Ticket height={28} />
									<p>공연등록</p>
								</ProdButton>
							</FixedProdButton>
						)}
						<CardArea>
							{playList?.map((data) => (
								<ProdPlayCard data={data} />
							))}
						</CardArea>
					</>
				)}
				{activeTab === 'gallery' && (
					<>
						<SubText>{imageList.length}개의 사진첩</SubText>
						{token && (
							<FixedProdButton>
								<ProdButton onClick={navigateToUpload}>
									<Gallery height={28} />
									<p>사진등록</p>
								</ProdButton>
							</FixedProdButton>
						)}
						<Masonry imageData={imageList} />
					</>
				)}
			</ContentArea>
		</Container>
	);
}

export default Production;

const Container = styled.div`
	padding: 0 20px;
`;

const Theatre = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;

	.production {
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
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
	padding: 16px 0;

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
const SubText = styled.div`
	margin-bottom: 24px;

	font-size: ${({ theme }) => theme.font.fontSize.body10};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.gray400};
`;

const CardArea = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 19px;
`;
const ContentArea = styled.div`
	padding: 20px 0;
	width: 100%;
`;

const FixedProdButton = styled.div`
	position: fixed;
	bottom: 170px;
	right: 22px;
	z-index: 100;
`;

const ProdButton = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;

	padding: 8px 12px;
	border-radius: 30px;

	background: ${({ theme }) => theme.colors.pink500};
	width: fit-content;

	p {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayWhite};
	}
`;
