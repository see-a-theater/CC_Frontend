import SearchOptionBar from '@/components/Admin/SearchOptionBar';
import {
	TablePageWrapper,
	Content,
	OptionBarWrapper,
} from '@/pages/admin/STYLE/admin-detail.style';
import { useParams } from 'react-router-dom';
import useCustomFetch from '@/utils/hooks/useCustomFetch';
const details = [
	{
		id: '1',
		title: '실종',
		date: '2025-01-09 / 14:50',
		bookingCount: '25/60',
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

function TicketManagementDetail() {
	const { ticketId } = useParams();
	const {
		data: fullData,
		loading,
		error,
	} = useCustomFetch(`/admin/ticket/${ticketId}`);
	const data = fullData?.result || null;
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
						<h1>{data?.showTitle}</h1>
					</div>
					<table>
						<tbody>
							<tr>
								<th>소극장 공연 이름</th>
								<td>{data?.showTitle}</td>
							</tr>
							<tr>
								<th>날짜</th>
								<td>{formatDateTime(data?.performanceDateTime)}</td>
							</tr>
							<tr>
								<th>예약 현황</th>
								<td>{data?.quantity}</td>
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
						{/**
						 * 		<button className="light">수정하기</button>
						 */}
					</div>
				</Content>
			</TablePageWrapper>
		</>
	);
}
export default TicketManagementDetail;
