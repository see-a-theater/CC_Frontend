import styled from 'styled-components';
import UserTable from '@/components/Admin/UserTable';
import Search from '@/assets/icons/searchBlack.svg?react';
import SearchBg from '@/assets/icons/searchBlackBg.svg?react';

import useCustomFetch from '@/utils/hooks/useCustomFetch';

import React, { useState, useMemo } from 'react';

function Users() {
	const headerRow = {
		memberId: '아이디',
		name: '이름',
		email: '이메일',
		phone: '번호',
		gender: '성별',
		manage: '관리',
	};

	const {
		data: userData,
		error: userError,
		loading: userLoading,
	} = useCustomFetch(`/admin/member/list?page=0&size=20`);

	console.log('userData:', userData);

	const apiRows = useMemo(() => {
		if (!userData || !userData.result) return [];
		return userData.result.content.map((item) => ({
			memberId: item.memberId,
			name: item.name,
			email: item.email,
			phone: item.phone,
			gender: item.gender,
			manage: `/admin/users/${item.memberId}`,
		}));
	}, [userData]);

	const user_data = [headerRow, ...apiRows];

	const [searchTerm, setSearchTerm] = useState('');
	const [visibleColumns, setVisibleColumns] = useState([
		'memberId',
		'name',
		'email',
		'phone',
		'gender',
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
		const content = user_data.slice(1); // header 제외
		return content.filter((user) =>
			Object.entries(user).some(
				([key, val]) =>
					visibleColumns.includes(key) &&
					String(val).toLowerCase().includes(searchTerm.toLowerCase()),
			),
		);
	}, [searchTerm, visibleColumns, user_data]);

	const paginatedData = useMemo(() => {
		const start = (currentPage - 1) * itemsPerPage;
		return filteredData.slice(start, start + itemsPerPage);
	}, [filteredData, currentPage]);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	if (userLoading) return <p>로딩 중...</p>;
	if (userError) return <p>에러 발생: {String(userError)}</p>;

	return (
		<Container>
			<Content>
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
							{Object.keys(headerRow).map((key) => (
								<label key={key}>
									<input
										type="checkbox"
										checked={visibleColumns.includes(key)}
										onChange={() => handleColumnToggle(key)}
									/>
									{headerRow[key]}
								</label>
							))}
							<SearchBg />
						</div>
					</FilterArea>

					<UserTable
						data={[headerRow, ...paginatedData]}
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

export default Users;

const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
`;
const Content = styled.div`
	width: 100%;
	display: flex;
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
	padding: 0px 120px 50px 50px;
	width: 100%;
`;
const Title = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;
