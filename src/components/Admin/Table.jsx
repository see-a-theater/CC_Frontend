import React from 'react';
import styled from 'styled-components';

const Table = ({ data }) => {
	if (!data || data.length === 0) return <p>데이터가 없습니다.</p>;

	const headers = Object.keys(data[0]);

	return (
		<TableWrapper>
			<StyledTable>
				<thead>
					<tr>
						{headers.map((key) => (
							<th key={key}>{data[0][key]}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.slice(1).map((row, idx) => (
						<tr key={idx}>
							{headers.map((key) => (
								<td key={key}>{row[key]}</td>
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
		border: 1px solid #e6e6e6;
		text-align: left;
		font-size: 14px;
	}

	th {
		background-color: #f5f5f5;
		font-weight: 700;
	}
`;
