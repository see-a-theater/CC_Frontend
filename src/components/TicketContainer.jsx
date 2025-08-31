import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronRightGray from '@/assets/icons/ChevronRightGray.svg?react';
function TicketContainer({ header, details, isPerformer }) {
	const navigate = useNavigate();
	const {
		ticketId,
		showTitle,
		posterImageUrl,
		detailAddress,
		performanceDateTime,
		quantity,
		totalPrice,
		reserveDateTime,
		reservationStatus,
		cancelDeadline,
	} = details;

	const isExpired = reservationStatus === '공연 종료';

	return (
		<Wrapper isExpired={isExpired} onClick={() => navigate(`${ticketId}`)}>
			<div className="only-web">
				<img src={posterImageUrl} style={{ width: '140px', height: '200px' }} />
			</div>
			<div>
				<Title>
					{showTitle} {quantity} {!isPerformer && <>매</>}
				</Title>
				<Table>
					<tbody>
						<tr>
							<th>{header[0]}</th>
							<td>{reserveDateTime ?? 'null'}</td>
						</tr>
						<tr>
							<th>{header[1]}</th>
							<td>{detailAddress ?? 'null'}</td>
						</tr>
						<tr>
							<th>{header[2]}</th>
							<td>{performanceDateTime ?? 'null'}</td>
						</tr>
						{header[4] && (
							<tr className="only-web">
								<th>{header[4]}</th>
								<td>{cancelDeadline ?? 'null'}</td>
							</tr>
						)}

						<tr>
							<th>{header[3]}</th>
							<StatusTD>{reservationStatus ?? 'null'}</StatusTD>
						</tr>
					</tbody>
				</Table>
			</div>
			<div
				className="only-web-flex"
				style={{
					display: 'flex',
					flex: '1',
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<ChevronRightGray />
			</div>
		</Wrapper>
	);
}

export default TicketContainer;
const Wrapper = styled.div`
	margin: 20px 0;
	padding: 10px 22px;
	border: 1px solid ${({ theme }) => theme.colors.grayOutline};
	display: flex;
	flex-direction: row;
	gap: 40px;
	background: ${({ theme, isExpired }) =>
		isExpired ? theme.colors.gray200 : 'none'};

	@media (min-width: 768px) {
		padding: 10px 10px 10px 20px;
	}
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.grayMain};
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.48px;
	margin-bottom: 16px;

	@media (min-width: 768px) {
		margin-bottom: 30px;
		margin-top: 8px;
	}
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	display: flex;
	gap: 8px;

	th {
		width: 88px;
		min-width: 50px;
		text-align: left;
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.body12};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.36px;
		padding: 4px 0px;

		@media (min-width: 768px) {
			padding: 6px 0px;
		}
	}

	td {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.body12};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.36px;
		padding: 4px 0px;

		@media (min-width: 768px) {
			padding: 6px 0px;
		}
	}
`;

const StatusTD = styled.td`
	color: ${({ theme }) => theme.colors.redWarning} !important;
	font-weight: ${({ theme }) => theme.font.fontWeight.regular};
`;
