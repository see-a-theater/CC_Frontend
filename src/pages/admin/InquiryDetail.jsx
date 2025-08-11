import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import SimpleTable from '@/components/Admin/SimpleTable';

import Search from '@/assets/icons/searchBlack.svg?react';


function InquiryDetail() {
	const inquiry_data = [
		{
			name: '이름',
			number: '전화번호',
			email: 'E-mail',
			date: '문의작성일',
			situation: '진행도',
			id: 0,
		},
		{
			name: '전시연',
			number: '010-1234-5678',
			email: ' junsiyeon123654@gmail.com',
			date: '2024.01.18 / 14:00',
			situation: '미완료',
			id: 1,
		},
	];
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	const [searchTerm, setSearchTerm] = useState('');

	return (
		<Container>
			<SectionTitle>문의</SectionTitle>
			<FilterArea>
				<SearchInput>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Search width={15} />
				</SearchInput>
			</FilterArea>

			<Title onClick={goBack}>{'<'} 일대일 문의</Title>
			<ContentArea>
				<SimpleTable data={inquiry_data} />
				<div>
					<p className="boxtitle">문의 내용</p>
					<Box>
						<p className="inquiryTitle">
							제목: 2매 구매했는데 표는 어떻게 가져가나요?
						</p>
						<p>
							실종 티켓을 2매 구매했습니다. 2매는 표를 어떻게 가져가야 하나요?
							2025 2월 1일 14시 공연 티켓입니다. 실종 티켓을 2매 구매했습니다.
							2매는 표를 어떻게 가져가야 하나요? 2025 2월 1일 14시 공연
							티켓입니다.
						</p>
					</Box>
				</div>

				<div>
					<p>답변</p>
					<Box>
						<p>
							1일 전에 카카오톡으로 다른 예매창들과 같게 예매번호와 바코드를
							전달드립니다.
						</p>
					</Box>
				</div>
			</ContentArea>
		</Container>
	);
}

export default InquiryDetail;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px; 120px; 100px 50px;
`;
const ContentArea = styled.div`
	width: 100%;
	display: flex;
	gap: 26px;
	justify-content: center;
	flex-direction: column;

	.boxtitle {
		color: #424242;
		font-family: Pretendard;
		font-size: 16px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		margin-bottom: 5px;
	}
`;
const Title = styled.h2`
	color: #000;
	text-align: left;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	margin-bottom: 16px;
`;
const Box = styled.div`
	width: 100%;
	min-height: 198px;

	padding: 10px 14px;

	display: flex;
	gap: 10px;
	flex-direction: column;
	align-items: flex-start;

	border: 1px solid #8f8e94;

	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};

	.inquiryTitle {
		color: #8f8e94;
		font-family: Pretendard;
		font-size: 16px;
	}
`;
const SectionTitle = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;
const FilterArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;

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
