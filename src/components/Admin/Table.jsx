import React from 'react';
import styled from 'styled-components';

const Table = ({ data, header }) => {
	if (!data || data.length === 0) return <p>데이터가 없습니다.</p>;

	return (
		<TableWrapper>
			<StyledTable>
				<thead>
					<tr>
						{header.map((col, idx) => (
							<th key={idx}>{col.label}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, idx) => (
						<tr key={idx}>
							{header.map((col, cIdx) => (
								<td key={cIdx}>{row[col.key]}</td>
							))}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</TableWrapper>
	);
};

export default Table;

const TableWrapper = styled.div`
	margin-top: 20px;
	max-width: 100%;
	overflow-x: auto;
`;

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	font-family: Pretendard;

	th,
	td {
		padding: 12px;
		border: 1px solid #000;
		text-align: left;
		font-size: 14px;
	}

	th {
		font-weight: 700;
	}
`;
