import ChevronLeft from '@/assets/icons/chevronLeft.svg?react';
import styled from 'styled-components';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	TablePageWrapper,
	Content,
	OptionBarWrapper,
} from '@/pages/admin/STYLE/admin-detail.style';
import useCustomFetch from '@/utils/hooks/useCustomFetch';
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

function formatDateTime(isoString) {
	const d = new Date(isoString);

	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const day = String(d.getDate()).padStart(2, '0');
	const hours = String(d.getHours()).padStart(2, '0');
	const minutes = String(d.getMinutes()).padStart(2, '0');

	return `${year}.${month}.${day} / ${hours}:${minutes}`;
}
function ReservationManagementDetail() {
	const { id } = useParams();
	const {
		data: fullData,
		loading,
		error,
	} = useCustomFetch(`/admin/ticket/reservation/${id}`);
	const data = fullData?.result || null;
	console.log(data);
	return (
		<>
			<TablePageWrapper>
				<OptionBarWrapper>
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
								<td>{data?.reserverName}</td>
							</tr>
							<tr>
								<th>소극장 공연 이름</th>
								<td>{data?.showTitle}</td>
							</tr>
							<tr>
								<th>날짜</th>
								<td>{formatDateTime(data?.performanceDateTime)}</td>
							</tr>
							<tr>
								<th>공연 장소</th>
								<td>{data?.detailAddress}</td>
							</tr>
							<tr>
								<th>매수</th>
								<td>{data?.quantity}매</td>
							</tr>
							<tr>
								<th>상태</th>
								<td>{data?.status}</td>
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
					></div>
				</Content>
			</TablePageWrapper>
		</>
	);
}
export default ReservationManagementDetail;
