import styled from 'styled-components';
import SearchBar from '../../../components/SearchBar';
import SearchBoxBlack from '@/assets/icons/SearchBoxBlack.svg?react';
import SearchBarBlack from '../../../components/SearchBarBlack';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import SubNav from '@/components/Admin/SubNav';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AdminListPage } from '../STYLE/admin.style';
import Pagination from 'react-js-pagination';
function ReservationManagement() {
	const navigate = useNavigate();
	const requests = [
		{
			id: '1',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			place: '홍대',
			count: '1',
			status: '예약 중',
		},
		{
			id: '1',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			place: '홍대',
			count: '1',
			status: '예약 중',
		},
		{
			id: '1',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			place: '홍대',
			count: '1',
			status: '예약 중',
		},
		{
			id: '1',
			name: '전시연',
			title: '실종',
			date: '2025-01-09 / 14:50',
			place: '홍대',
			count: '1',
			status: '예약 중',
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
				<SubNav page={'reservations'} />
				<SearchOptionBar />
				<table>
					<thead>
						<tr>
							<th>예약자명</th>
							<th>소극장 공연 이름</th>
							<th>날짜/시간</th>
							<th>공연 장소</th>
							<th>매수</th>
							<th>상태</th>
							<th>관리</th>
						</tr>
					</thead>
					<tbody>
						{currentList.map((request, index) => (
							<tr key={request.id || index}>
								<td>{request.name}</td>
								<td>{request.title}</td>
								<td>{request.date}</td>
								<td>{request.place}</td>
								<td>{request.count}매</td>
								<td>{request.status}</td>
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
export default ReservationManagement;

const SectionTitle = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 12px;
`;