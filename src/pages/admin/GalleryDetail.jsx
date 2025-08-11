import { useState } from 'react';
import styled from 'styled-components';

import Search from '@/assets/icons/searchBlack.svg?react';
import SearchBg from '@/assets/icons/searchBlackBg.svg?react';
import Image from '@/assets/mock/images/image1.png';

function GalleryDetail() {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<Container>
			<Content>
				<GallData>
					<Title>사진첩 관리</Title>
					<div className="serachNadd">
						<SearchInput>
							<input
								type="text"
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value);
								}}
								placeholder="검색어를 입력하세요"
							/>
							<Search width={15} />
						</SearchInput>
						<Button>사진첩 내리기</Button>
					</div>

					<p className="uploader">게시글 작성자: Seethe</p>
					<div className="gallery-content">
						<img src={Image} alt="갤러리 이미지" />
						<p>
							홍익극연구회 20회 공연 '실종'을 무사히 마쳤습니다~! 3일동안 수고한
							우리 배우분들과 스텝분들에게 감사인사를 🙏 어쩌구 저쩌구 자축~~~~~
							700px 넘어가면 단락 넘어가도록 해주세요
						</p>
					</div>
				</GallData>
			</Content>
		</Container>
	);
}

export default GalleryDetail;

const Container = styled.div`
	width: 100vw;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
`;
const GallData = styled.div`
	width: 100%;
	padding: 0px 120px 50px 50px;

	display: flex;
	flex-direction: column;

	.serachNadd {
		display: flex;
		justify-content: space-between;
		margin-bottom: 70px;
	}
	.uploader {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
		color: ${({ theme }) => theme.colors.grayMain};
		margin-bottom: 32px;
	}
	.gallery-content {
		img {
			height: 320px;
			border-radius: 5px;
			margin-bottom: 28px;
		}
		p {
			max-width: 700px;
		}
		border: 1px solid #929292;
		padding: 24px 28px;
	}
`;

const Title = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;
const SearchInput = styled.div`
	display: flex;
	align-items: center;
	padding: 0 10px;
	background: #fff;
	width: 360px;
	height: 32px;
	border-radius: 7px;
	border: 1px solid #000;

	input {
		width: 100%;
		border: none;
		outline: none;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;

const Button = styled.button`
	padding: 8px 20px;
	border-radius: 3px;
	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.normal};
	color: ${({ theme }) => theme.colors.grayWhite};
	background-color: ${({ theme }) => theme.colors.pink600};
`;
