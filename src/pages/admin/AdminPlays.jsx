import styled from 'styled-components';
import UserTable from '@/components/Admin/UserTable';
import FilterHeader from '@/components/Admin/FilterHeader';

import { useState, useMemo } from 'react';

function AdminPlays() {
	//상태 별 글자 색상 변경 추가 필요
	const play_data = [
		{
			title: '소극장 공연 이름',
			date: '날짜/시간',
			uploader: '등록자명',
			situation: '상태',
			manage: '관리',
		},
		{
			title: '실종',
			date: '2025-01-09 / 14:50',
			uploader: '홍길동',
			situation: '확인 전',
			manage: '/admin/plays/',
		},
		{
			title: '실종',
			date: '2025-01-09 / 14:50',
			uploader: '홍길동',
			situation: '등록',
			manage: '/admin/plays/',
		},
		{
			title: '실종',
			date: '2025-01-09 / 14:50',
			uploader: '홍길동',
			situation: '반려',
			manage: '/admin/plays/',
		},
		{
			title: '실종',
			date: '2025-01-09 / 14:50',
			uploader: '홍길동',
			situation: '확인 전',
			manage: '/admin/plays/',
		},
		{
			title: '실종',
			date: '2025-01-09 / 14:50',
			uploader: '홍길동',
			situation: '등록',
			manage: '/admin/plays/',
		},
		{
			title: '실종',
			date: '2025-01-09 / 14:50',
			uploader: '홍길동',
			situation: '반려',
			manage: '/admin/plays/',
		},
	];
	const [searchTerm, setSearchTerm] = useState('');
	const [visibleColumns, setVisibleColumns] = useState([
		'title',
		'date',
		'uploader',
		'situation',
		'manage',
	]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20;

	const filterKeys = ['title', 'date', 'uploader'];
	const filterLabels = {
		title: '공연 이름',
		date: '날짜/시간',
		uploader: '등록자명',
	};

	const filteredData = useMemo(() => {
		const content = play_data.slice(1);
		return content.filter((user) =>
			Object.entries(user).some(
				([key, val]) =>
					visibleColumns.includes(key) &&
					val.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		);
	}, [searchTerm, visibleColumns, play_data]);

	const paginatedData = useMemo(() => {
		const start = (currentPage - 1) * itemsPerPage;
		return filteredData.slice(start, start + itemsPerPage);
	}, [filteredData, currentPage]);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	return (
		<Container>
			<Content>
				<TableArea>
					<FilterHeader
						title="소극장 공연 관리"
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						filterKeys={filterKeys}
						filterLabels={filterLabels}
						visibleColumns={visibleColumns}
						setVisibleColumns={setVisibleColumns}
					/>

					<UserTable
						data={[play_data[0], ...paginatedData]}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
						visibleColumns={visibleColumns}
					/>
				</TableArea>
			</Content>
		</Container>
	);
}

export default AdminPlays;

const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
`;
const Content = styled.div`
	width: 100%;
	display: flex;
`;
const TableArea = styled.div`
	padding: 0px 120px 50px 50px;
	width: 100%;
`;
