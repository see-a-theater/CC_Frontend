import styled from 'styled-components';
import UserTable from '@/components/Admin/UserTable';
import Search from '@/assets/icons/searchBlack.svg?react';
import SearchBg from '@/assets/icons/searchBlackBg.svg?react';
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

	const handleColumnToggle = (column) => {
		setVisibleColumns((prev) =>
			prev.includes(column)
				? prev.filter((c) => c !== column)
				: [...prev, column],
		);
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
			<Top>
				<Search />
			</Top>
			<Content>
				<Sidebar />
				<TableArea>
					<Title>사용자 관리</Title>
					<FilterArea>
						<SearchInput>
							<input
								type="text"
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value);
									setCurrentPage(1);
								}}
								placeholder="검색어를 입력하세요"
							/>
							<Search width={15} />
						</SearchInput>
						<div className="checkboxArea">
							{['title', 'date', 'uploader'].map((key) => (
								<label key={key}>
									<input
										type="checkbox"
										checked={visibleColumns.includes(key)}
										onChange={() => handleColumnToggle(key)}
									/>
									{play_data[0][key]}
								</label>
							))}
							<SearchBg />
						</div>
					</FilterArea>

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
const Top = styled.div`
	height: 108px;
	display: flex;
	justify-content: flex-end;
	padding: 40px 110px;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
`;
const Sidebar = styled.div`
	//추후 컴포넌트로 변경 후 삭제
	width: 290px;
	height: 100vh;
	position: fixed;
	padding: 27px 18px;
	background: #8f8e94;
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

const TableArea = styled.div`
	margin-left: 290px;
	padding: 0px 120px 50px 50px;
	width: 100%;
`;
const Title = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;
