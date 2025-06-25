import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function TicketContainer({ header, details }) {
	const navigate = useNavigate();
	const {
		title,
		count,
		bookingDate,
		place,
		performanceDate,
		cancelDeadline,
		status,
	} = details;

	const isExpired = status === '공연 종료';

	return (
		<Wrapper
			isExpired={isExpired}
			onClick={() => navigate('/mypage/tickets/1')}
		>
			<Title>
				{title} {count}매
			</Title>
			<Table>
				<tbody>
					<tr>
						<th>{header[0]}</th>
						<td>{bookingDate}</td>
					</tr>
					<tr>
						<th>{header[1]}</th>
						<td>{place}</td>
					</tr>
					<tr>
						<th>{header[2]}</th>
						<td>{performanceDate}</td>
					</tr>
					<tr>
						<th>{header[3]}</th>
						<StatusTD>{status}</StatusTD>
					</tr>
				</tbody>
			</Table>
		</Wrapper>
	);
}

export default TicketContainer;

const Wrapper = styled.div`
	margin: 20px 0;
	padding: 10px 22px;
	border: 1px solid ${({ theme }) => theme.colors.grayOutline};
	background: ${({ theme, isExpired }) =>
		isExpired ? theme.colors.gray200 : 'none'};
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.grayMain};

	font-size: 16px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
	letter-spacing: -0.48px;
	margin-bottom: 16px;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	display: flex;
	gap: 8px;
	th {
		width: 88px;
		text-align: left;
		color: var(--color-gray-400, #929292);

		/* Web-app/body-12-bold */
		font-family: 'NanumSquare Neo OTF';
		font-size: 12px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.36px;
		padding: 2px 0px;
	}

	td {
		color: var(--color-gray-maintext, #000);

		/* Web-app/body-12-bold */
		font-family: 'NanumSquare Neo OTF';
		font-size: 12px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.36px;
	}
`;

const StatusTD = styled.td`
	color: #e94e4e !important;
	font-weight: 500;
`;
