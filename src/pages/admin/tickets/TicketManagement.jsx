import styled from 'styled-components';
import SearchBar from '../../../components/SearchBar';
import SearchBoxBlack from '@/assets/icons/SearchBoxBlack.svg?react';
import SearchBarBlack from '../../../components/SearchBarBlack';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import SubNav from '@/components/Admin/SubNav';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AdminListPage } from '../STYLE/admin-list.style';
import Pagination from 'react-js-pagination';
function TicketManagement() {
	const navigate = useNavigate();
	const requests = [
		{
			id: '1',
			title: '실종',
			date: '2025-01-09 / 14:50',
			bookingCount: '25/60',
		},
		{
			id: '1',
			title: '실종',
			date: '2025-01-09 / 14:50',
			bookingCount: '25/60',
		},
		{
			id: '1',
			title: '실종',
			date: '2025-01-09 / 14:50',
			bookingCount: '25/60',
		},
		{
			id: '1',
			title: '실종',
			date: '2025-01-09 / 14:50',
			bookingCount: '25/60',
		},
		{
			id: '1',
			title: '실종',
			date: '2025-01-09 / 14:50',
			bookingCount: '25/60',
		},
	];
	const [stockList, setStockList] = useState(requests);
	const [page, setPage] = useState(1);
	const itemsPerPage = 3;
	const changePageHandler = (page) => {
		setPage(page);
	};
	const [currentList, setCurrentList] = useState(stockList);

	const indexOfLastItem = page * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	useEffect(() => {
		setCurrentList(stockList.slice(indexOfFirstItem, indexOfLastItem));
	}, [page, stockList]);

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
							<tr key={request.id || index}>
								<td>{request.title}</td>
								<td>{request.date}</td>
								<td>{request.bookingCount}</td>
								<td>
									<button onClick={() => navigate('1')}>상세</button>
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
