import styled from 'styled-components';
import UserTable from '@/components/Admin/UserTable';
import FilterHeader from '@/components/Admin/FilterHeader';

import { useState, useMemo } from 'react';

import useCustomFetch from '@/utils/hooks/useCustomFetch';

function AdminPlays() {
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 20;
	const headerRow = {
		showName: '소극장 공연 이름',
		createdAt: '날짜/시간',
		performerName: '등록자명',
		amateurShowStatus: '상태',
		manage: '관리',
	};

	const {
		data: playData,
		error: playError,
		loading: playLoading,
	} = useCustomFetch(
		`/admin/amateurShow/showList?page=${currentPage}&size=${itemsPerPage}`,
	);

	const apiRows = useMemo(() => {
		if (!playData || !playData.result) return [];
		return playData?.result.map((item) => ({
			showName: item.showName,
			createdAt: item.createdAt,
			performerName: item.performerName,
			amateurShowStatus: item.amateurShowStatus,
			manage: `/admin/plays/${item.showId}`,
		}));
	}, [playData]);

	const play_data = [headerRow, ...apiRows];

	const [searchTerm, setSearchTerm] = useState('');
	const [visibleColumns, setVisibleColumns] = useState([
		'showName',
		'createdAt',
		'performerName',
		'amateurShowStatus',
		'manage',
	]);

	const filterKeys = ['showName', 'createdAt', 'performerName'];
	const filterLabels = {
		showName: '공연 이름',
		createdAt: '날짜/시간',
		performerName: '등록자명',
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
		const start = currentPage * itemsPerPage;
		return filteredData.slice(start, start + itemsPerPage);
	}, [filteredData, currentPage]);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	console.log(paginatedData);

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
						data={[headerRow, ...paginatedData]}
						currentPage={currentPage + 1}
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
