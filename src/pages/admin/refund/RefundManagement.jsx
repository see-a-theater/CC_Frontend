import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import SearchBoxBlack from '@/assets/icons/SearchBoxBlack.svg?react';
import SearchBarBlack from '@/components/SearchBarBlack';
import SearchOptionBar from '@/components/Admin/SearchOptionBar';
import SubNav from '@/components/Admin/SubNav';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AdminListPage } from '@/pages/admin/STYLE/admin-list.style';
import Pagination from 'react-js-pagination';
import useCustomFetch from '@/utils/hooks/useCustomFetch';
function RefundManagement() {
	localStorage.setItem(
		'accessToken',
		'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkB0ZXN0LmNvbSIsImF1dGgiOiJST0xFX0FETUlOIiwiZXhwIjoxNzU3ODYwMzY2fQ.HzCmsQ0S5LmIEFrSb65ty3sO2yvd3J5czU7nGor85w2vqkJLsIDISYTiINDaYMTlszNwWeJ0TYUrqk11VUvigQ',
	);
	const navigate = useNavigate();
	const requests = [
		{
			userId: 'diana8443',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			requestDate: '2024.01.24 / 17:59',
			id: 1,
		},
	];
	const { data, loading, error } = useCustomFetch(
		'/admin/ticket/refund/history?page=0&size=20',
	);

	const changePageHandler = (page) => {
		setPage(page);
	};
	const [stockList, setStockList] = useState([]);
	const [currentList, setCurrentList] = useState([]);

	useEffect(() => {
		if (data) {
			setStockList(data?.result?.content || data); // data 구조 맞게
		}
	}, [data]);

	const [page, setPage] = useState(1);
	const itemsPerPage = 10;
	const indexOfLastItem = page * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	useEffect(() => {
		if (Array.isArray(stockList)) {
			setCurrentList(stockList.slice(indexOfFirstItem, indexOfLastItem));
		}
	}, [page, stockList]);

	function formatDateTime(isoString) {
		const d = new Date(isoString);

		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');
		const hours = String(d.getHours()).padStart(2, '0');
		const minutes = String(d.getMinutes()).padStart(2, '0');

		return `${year}.${month}.${day} / ${hours}:${minutes}`;
	}

	return (
		<>
			<AdminListPage>
				<SectionTitle>소극장 공연 관리</SectionTitle>
				<SubNav page={'refunds'} />
				<SearchOptionBar />
				<table>
					<thead>
						<tr>
							<th>아이디</th>
							<th>이름</th>
							<th>소극장 공연 이름</th>
							<th>날짜/시간</th>
							<th>환불 신청 날짜/시간</th>
							<th>관리</th>
						</tr>
					</thead>
					<tbody>
						{currentList.map((request) => (
							<tr key={request.realTicketId}>
								{console.log(request)}
								<td>{request.username}</td>
								<td>{request.memberName}</td>
								<td>{request.showTitle}</td>
								<td>{formatDateTime(request.performanceDateTime)}</td>
								<td>{formatDateTime(request.canceledAt)}</td>
								<td>
									<button onClick={() => navigate(`${request.showId}`)}>
										상세
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<Pagination
					activePage={page}
					itemsCountPerPage={itemsPerPage}
					totalItemsCount={stockList.length}
					className="pagination"
					pageRangeDisplayed={5}
					onChange={changePageHandler}
				/>
			</AdminListPage>
		</>
	);
}
export default RefundManagement;

const SectionTitle = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 12px;
`;
