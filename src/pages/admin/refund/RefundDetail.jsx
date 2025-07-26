import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SubNav from '@/components/Admin/SubNav';

import Search from '@/assets/icons/searchBlack.svg?react';
import SearchBg from '@/assets/icons/searchBlackBg.svg?react';

function RefundDetail() {
	const refund_data = {
		play: '실종',
		name: '전시연',
		date: '2024.01.25 / 14:00',
		cancelDate: '2024.12.21 / 15:41',
		price: '50,000원',
		charge: '5000원',
		account: '토스 뱅크 1000-1000-1000-1000',
		situation: '환불 완료',
	};

	const rows = [
		{ label: '소극장 공연 이름', value: refund_data.play },
		{ label: '예약자명', value: refund_data.name },
		{ label: '날짜/시간', value: refund_data.date },
		{ label: '취소 시각', value: refund_data.cancelDate },
		{ label: '판매가', value: refund_data.price },
		{ label: '취소 수수료', value: refund_data.charge },
		{ label: '계좌', value: refund_data.account },
		{ label: '진행상황', value: refund_data.situation },
	];

	const labelMap = {
		id: '아이디',
		play: '소극장 공연 이름',
		cancelDate: '환불 신청 날짜/시간',
	};

	const [searchTerm, setSearchTerm] = useState('');
	const [visibleColumns, setVisibleColumns] = useState([
		'play',
		'name',
		'date',
		'cancelDate',
		'price',
		'charge',
		'account',
		'situation',
	]);

	const handleColumnToggle = (column) => {
		setVisibleColumns((prev) =>
			prev.includes(column)
				? prev.filter((c) => c !== column)
				: [...prev, column],
		);
	};

	const filteredRows = useMemo(() => {
		return rows.filter(
			(row) =>
				visibleColumns.includes(getKeyByLabel(row.label)) &&
				row.value.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [searchTerm, visibleColumns]);

	function getKeyByLabel(label) {
		const map = {
			'소극장 공연 이름': 'play',
			예약자명: 'name',
			'날짜/시간': 'date',
			'취소 시각': 'cancelDate',
			판매가: 'price',
			'취소 수수료': 'charge',
			계좌: 'account',
			진행상황: 'situation',
		};
		return map[label];
	}

	//const [nowHere, setNowHere] = useState('refunds');

	return (
		<Container>
			<Content>
				<SectionTitle>소극장 공연 관리</SectionTitle>
				<SubNav page={'refunds'} />
				<FilterArea>
					<SearchInput>
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<Search width={15} />
					</SearchInput>
					<div className="checkboxArea">
						{Object.entries(labelMap).map(([key, label]) => (
							<label key={key}>
								<input
									type="checkbox"
									checked={visibleColumns.includes(key)}
									onChange={() => handleColumnToggle(key)}
								/>
								{label}
							</label>
						))}
						<SearchBg />
					</div>
				</FilterArea>
				<Table>
					<Title>{'<'} 기본 정보</Title>
					<tbody>
						{filteredRows.map((row, index) => (
							<tr key={index}>
								<th>{row.label}</th>
								<td>{row.value}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Button>수정하기</Button>
			</Content>
		</Container>
	);
}

export default RefundDetail;

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
`;
const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0px 120px 50px 50px;
`;

const Title = styled.h2`
	color: #000;
	text-align: left;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	margin-bottom: 26px;
`;
const Table = styled.div`
	width: 600px;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	padding-top: 120px;

	border-collapse: collapse;
	th {
		text-align: center;
		width: 120px;
		padding: 6px 20px;
		border: 1px solid #ddd;
		border-left: none;

		color: #8f8e94;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
	}

	td {
		text-align: left;
		width: 480px;
		padding: 6px 20px;
		border: 1px solid #ddd;
		border-right: none;

		color: #424242;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
	}

	margin-bottom: 80px;
`;

const Button = styled.button`
	align-self: flex-end;
	width: 156px;
	height: 38px;
	border-radius: 8px;
	background: var(--color-pink-100, #fff7f5);
    font-size: font-size: ${({ theme }) => theme.font.fontSize.title16};
    font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink600};
`;
const SectionTitle = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 12px;
`;
const FilterArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;

	.checkboxArea {
		display: flex;
		align-items: center;
		gap: 18px;
	}
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
