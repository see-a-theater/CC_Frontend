import ChevronLeft from '@/assets/icons/chevronLeft.svg?react';
import styled from 'styled-components';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import {
	TablePageWrapper,
	Content,
	OptionBarWrapper,
} from '../STYLE/admin-detail.style';
const details = [
	{
		id: '1',
		name: '전시연',
		title: '실종',
		date: '2025-01-09 / 14:50',
		place: '홍대',
		count: '1',
		status: '예약 중',
	},
];
const detail = details[0];

function ReservationManagementDetail() {
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
					></div>
					<table>
						<tbody>
							<tr>
								<th>예약자명</th>
								<td>{detail.name}</td>
							</tr>
							<tr>
								<th>소극장 공연 이름</th>
								<td>{detail.title}</td>
							</tr>
							<tr>
								<th>날짜</th>
								<td>{detail.date}</td>
							</tr>
							<tr>
								<th>공연 장소</th>
								<td>{detail.place}</td>
							</tr>
							<tr>
								<th>매수</th>
								<td>{detail.count}매</td>
							</tr>
							<tr>
								<th>상태</th>
								<td>{detail.status}</td>
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
export default ReservationManagementDetail;
