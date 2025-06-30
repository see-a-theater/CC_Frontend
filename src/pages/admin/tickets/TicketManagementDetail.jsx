import ChevronLeft from '@/assets/icons/chevronLeft.svg?react';
import styled from 'styled-components';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import {
	TablePageWrapper,
	Content,
	OptionBarWrapper,
} from '../STYLE/admin.detail.style';
const details = [
	{
		id: '1',
		title: '실종',
		date: '2025-01-09 / 14:50',
		bookingCount: '25/60',
	},
];
const detail = details[0];

function TicketManagementDetail() {
	return (
		<>
			<TablePageWrapper>
				<OptionBarWrapper>
					<h1>등록 요청 관리</h1>
					<SearchOptionBar />
				</OptionBarWrapper>

				<Content>
					<div
						style={{
							display: 'flex',
							flex: '1',
							justifyContent: 'flex-start',
							marginBottom: '26px',
						}}
					>
						<h1>{detail.title}</h1>
					</div>
					<table>
						<tbody>
							<tr>
								<th>소극장 공연 이름</th>
								<td>{detail.title}</td>
							</tr>
							<tr>
								<th>날짜</th>
								<td>{detail.date}</td>
							</tr>
							<tr>
								<th>예약 현황</th>
								<td>{detail.bookingCount}</td>
							</tr>
						</tbody>
					</table>
					<div
						style={{
							display: 'flex',
							flex: '1',
							justifyContent: 'flex-end',
							marginTop: '80px',
						}}
					>
						<button className="light">수정하기</button>
					</div>
				</Content>
			</TablePageWrapper>
		</>
	);
}
export default TicketManagementDetail;
