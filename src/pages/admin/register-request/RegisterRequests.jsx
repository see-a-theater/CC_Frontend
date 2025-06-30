import styled from 'styled-components';
import SearchBar from '../../../components/SearchBar';
import SearchBoxBlack from '@/assets/icons/SearchBoxBlack.svg?react';
import SearchBarBlack from '../../../components/SearchBarBlack';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AdminListPage } from '../STYLE/admin.style';
import Pagination from 'react-js-pagination';
function RegisterRequests() {
	const navigate = useNavigate();
	const requests = [
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
		},
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
		},
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
		},
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
		},
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
		},
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
		},
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
		},
		{
			id: 'diama8843',
			name: '전시연',
			email: 'junsiyeon123654@gmail.com',
			phone: '010-1234-1234',
			title: '실종',
			status: '등록',
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
				<h1>등록 요청 관리</h1>
				<SearchOptionBar />
				<table>
					<thead>
						<tr>
							<th>아이디</th>
							<th>이름</th>
							<th>E-mail</th>
							<th>번호</th>
							<th>연극명</th>
							<th>등록</th>
							<th>관리</th>
						</tr>
					</thead>
					<tbody>
						{currentList.map((request, index) => (
							<tr key={request.id || index}>
								<td>{request.id}</td>
								<td>{request.name}</td>
								<td>{request.email}</td>
								<td>{request.phone}</td>
								<td>{request.title}</td>
								<td>등록</td>
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
export default RegisterRequests;
