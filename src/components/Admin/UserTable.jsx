import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import SearchBg from '@/assets/icons/searchBlackBg.svg?react';

const UserTable = ({ data }) => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20;

	const allHeaders = Object.keys(data[0]);
	const filterableHeaders = ['id', 'name', 'email', 'gender'];
	const [visibleColumns, setVisibleColumns] = useState([...filterableHeaders]);

	const handleColumnToggle = (column) => {
		setVisibleColumns((prev) =>
			prev.includes(column)
				? prev.filter((c) => c !== column)
				: [...prev, column],
		);
	};

	const filteredUsers = data
		.slice(1)
		.filter((user) =>
			Object.entries(user).some(
				([key, val]) =>
					visibleColumns.includes(key) &&
					val.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		);

	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
	const paginatedUsers = filteredUsers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	const handleDetailClick = (userId) => {
		navigate(`/user/${userId}`);
	};

	return (
		<Wrapper>
			<Controls>
				<SearchInput
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						setCurrentPage(1);
					}}
				/>
				<CheckboxGroup>
					{filterableHeaders.map((key) => (
						<label key={key}>
							<input
								type="checkbox"
								checked={visibleColumns.includes(key)}
								onChange={() => handleColumnToggle(key)}
							/>
							{data[0][key]}
						</label>
					))}
					<SearchBg height={24} />
				</CheckboxGroup>
			</Controls>

			<StyledTable>
				<thead>
					<tr>
						{allHeaders.map(
							(key) =>
								(visibleColumns.includes(key) || key === 'manage') && (
									<th key={key}>{data[0][key]}</th>
								),
						)}
					</tr>
				</thead>
				<tbody>
					{paginatedUsers.map((user, idx) => (
						<tr key={idx}>
							{allHeaders.map((key) => {
								if (!visibleColumns.includes(key) && key !== 'manage')
									return null;
								return key === 'manage' ? (
									<td key={key}>
										<DetailButton onClick={() => handleDetailClick(user.id)}>
											상세
										</DetailButton>
									</td>
								) : (
									<td key={key}>{user[key]}</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</StyledTable>

			<Pagination>
				{Array.from({ length: totalPages }, (_, i) => (
					<PageBtn
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						active={currentPage === i + 1}
					>
						{i + 1}
					</PageBtn>
				))}
			</Pagination>
		</Wrapper>
	);
};

export default UserTable;

const Wrapper = styled.div`
	font-family: Pretendard;
`;

const Controls = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
`;

const CheckboxGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;

	label {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;

const SearchInput = styled.input`
	padding: 6px 10px;
	width: 360px;
	border: 1px solid #ccc;
	border-radius: 7px;
`;

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	th {
		padding: 10px;
		border: 1px solid #e6e6e6;
		background-color: #f5f5f5;
		text-align: center;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	td {
		padding: 10px;
		border: 1px solid #e6e6e6;
		text-align: center;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;

const DetailButton = styled.button`
	padding: 6px 12px;
	font-size: 10px;
	border: none;
	background-color: #d9d9d9;
	color: #555;
	cursor: pointer;
`;

const Pagination = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: center;
	gap: 8px;
`;

const PageBtn = styled.button`
	padding: 6px 10px;
	border-radius: 4px;
	border: none;
	font-size: ${({ theme, active }) =>
		active ? theme.font.fontSize.title16 : theme.font.fontSize.body14};
	color: ${({ active }) => (active ? '#000' : '#989898')};
	cursor: pointer;
`;
