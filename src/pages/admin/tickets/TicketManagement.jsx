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
function TicketManagement() {
	const navigate = useNavigate();
	const requests = [
		{
			id: '1',
			title: '실종',
			date: '2025-01-09 / 14:50',
			bookingCount: '25/60',
		},
	];
	const { data, loading, error } = useCustomFetch(
		'/admin/ticket/history?page=0&size=20',
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
				<SubNav page={'tickets'} />
				<SearchOptionBar />
				<table>
					<thead>
						<tr>
							<th>소극장 공연 이름</th>
							<th>날짜/시간</th>
							<th>예약 현황</th>
							<th>관리</th>
						</tr>
					</thead>
					<tbody>
						{currentList.map((request, index) => (
							<tr key={request.realTicketId || index}>
								<td>{request.showTitle}</td>
								<td>{formatDateTime(request.performanceDateTime)}</td>
								<td>{request.quantity}</td>
								<td>
									<button onClick={() => navigate(`${request.realTicketId}`)}>
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
export default TicketManagement;

const SectionTitle = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 12px;
`;
