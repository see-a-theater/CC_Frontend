import styled from 'styled-components';
import SearchBar from '../../../components/SearchBar';
import SearchBoxBlack from '@/assets/icons/SearchBoxBlack.svg?react';
import SearchBarBlack from '../../../components/SearchBarBlack';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AdminListPage } from '../STYLE/admin.style';
import Pagination from 'react-js-pagination';
function RefundManagement() {
	const navigate = useNavigate();
	const requests = [
		{
			userId: 'diana8443',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			requestDate: '2024.01.24 / 17:59',
		},
		{
			userId: 'diana8443',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			requestDate: '2024.01.24 / 17:59',
		},
		{
			userId: 'diana8443',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			requestDate: '2024.01.24 / 17:59 ',
		},
		{
			userId: 'diana8443',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			requestDate: '2024.01.24 / 17:59 ',
		},
		{
			userId: 'diana8443',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			requestDate: '2024.01.24 / 17:59 ',
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
				<h1>환불 내역 관리</h1>
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
						{currentList.map((request, id) => (
							<tr key={request.id}>
								{console.log(request)}
								<td>{request.userId}</td>
								<td>{request.name}</td>
								<td>{request.title}</td>
								<td>{request.date}</td>
								<td>{request.requestDate}</td>
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
export default RefundManagement;
