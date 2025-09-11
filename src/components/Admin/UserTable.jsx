import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ChevronLeft from '@/assets/icons/chevronLeftGrey.svg?react';
import ChevronRight from '@/assets/icons/ChevronRight.svg?react';

const UserTable = ({
	data,
	currentPage,
	setCurrentPage,
	totalPages,
	visibleColumns,
}) => {
	const navigate = useNavigate();

	const allHeaders = Object.keys(data[0]);

	const handleDetailClick = (link) => {
		navigate(link);
	};

	//현재 페이지에서 링크, id를 받아오는 형식
	//나중에 데이터 확인 후 사용자/사진첩 관리에 따라서 내부에서 링크 설정 가능하게 할 듯

	return (
		<Wrapper>
			<StyledTable>
				<thead>
					<tr>
						{allHeaders.map((key) =>
							visibleColumns.includes(key) || key === 'manage' ? (
								<th key={key}>{data[0][key]}</th>
							) : null,
						)}
					</tr>
				</thead>
				<tbody>
					{data.slice(1).map((user, idx) => (
						<tr key={idx}>
							{allHeaders.map((key) => {
								if (!visibleColumns.includes(key) && key !== 'manage')
									return null;

								if (key === 'manage') {
									return (
										<td key={key}>
											<DetailButton
												onClick={() => handleDetailClick(user.manage)}
											>
												상세
											</DetailButton>
										</td>
									);
								}

								if (key === 'situation') {
									const situation = user[key];
									let className = '';

									if (situation === '확인 전' || situation === '미완료') {
										className = 'situation-pink';
									} else if (situation === '등록') {
										className = 'situation-gray400';
									} else {
										className = 'situation-default';
									}

									return (
										<td key={key} className={className}>
											{situation}
										</td>
									);
								}

								return <td key={key}>{user[key]}</td>;
							})}
						</tr>
					))}
				</tbody>
			</StyledTable>

			<Pagination>
				<PageBtn
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
				>
					<ChevronLeft height={16} />
				</PageBtn>

				{Array.from({ length: totalPages }, (_, i) => (
					<PageBtn
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						active={currentPage === i + 1}
					>
						{i + 1}
					</PageBtn>
				))}

				<PageBtn
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
					disabled={currentPage === totalPages}
				>
					<ChevronRight height={16} />
				</PageBtn>
			</Pagination>
		</Wrapper>
	);
};

export default UserTable;

const Wrapper = styled.div`
	font-family: Pretendard;
`;

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	th,
	td {
		height: 31px;
	}
	th {
		border: 1px solid #000;
		text-align: center;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	td {
		border: 1px solid #000;
		text-align: center;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	.situation-pink {
		color: ${({ theme }) => theme.colors.pink600};
	}
	.situation-gray400 {
		color: ${({ theme }) => theme.colors.gray400};
	}
	.situation-default {
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;

const DetailButton = styled.button`
	width: 39px;
	height: 20px;
	font-size: 10px;
	border: none;
	background-color: #d9d9d9;
	color: #555;
	cursor: pointer;
`;

const Pagination = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;
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
