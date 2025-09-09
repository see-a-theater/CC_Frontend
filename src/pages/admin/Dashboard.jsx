import styled from 'styled-components';

import LineChart from '@/components/Admin/LineChart';
import Table from '@/components/Admin/Table';
import Search from '@/assets/icons/searchBlack.svg?react';

import useCustomFetch from '@/utils/hooks/useCustomFetch';

function Dashboard() {
	const mock_req = [
		{ theatre: '소극장', date: '날짜/시간', num: '인원수' },
		{ theatre: '여신님이 보고 게셔', date: '2025-01-09 / 14:00', num: 25 },
		{ theatre: '지킬 앤 하이드', date: '2025-01-09 / 14:00', num: 25 },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: 25 },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: 25 },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: 25 },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: 25 },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: 25 },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: 25 },
	];
	const mock_res = [
		{ theatre: '소극장', date: '날짜/시간', num: '현황' },
		{ theatre: '여신님이 보고 게셔', date: '2025-01-09 / 14:00', num: '25/25' },
		{ theatre: '지킬 앤 하이드', date: '2025-01-09 / 14:00', num: '20/25' },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: '20/25' },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: '20/25' },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: '20/25' },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: '20/25' },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: '20/25' },
		{ theatre: '알라딘', date: '2025-01-09 / 14:00', num: '20/25' },
	];

	const {
		data: MonthVisitsData,
		error: MonthError,
		loading: MonthLoading,
	} = useCustomFetch(`/admin/dashboard/visits/monthly`);

	const {
		data: HourlyVisitsData,
		error: HourlyError,
		loading: HourlyLoading,
	} = useCustomFetch(`/admin/dashboard/visits/monthly`);

	const monthLabels = MonthVisitsData?.result.map((item) => item.month);
	const monthData = MonthVisitsData?.result.map((item) => item.count);

	const hourlyLabels = HourlyVisitsData?.result.map((item) => item.month);
	const hourlyData = HourlyVisitsData?.result.map((item) => item.count);

	const {
		data: approvalData,
		error: approvalError,
		loading: approvalLoading,
	} = useCustomFetch(`/admin/dashboard/approval?page=0&size=10`);
	//페이지네이션 등 데이터 더 필요하면 주소 수정 필요

	const {
		data: reservationData,
		error: reservationError,
		loading: reservationLoading,
	} = useCustomFetch(`/admin/dashboard/reservation?page=0&size=10`);

	console.log(approvalData);

	return (
		<Container>
			<Content>
				<BoardArea>
					<ChartWrapper>
						<SectionTitle>통계 {'>'}</SectionTitle>
						<LineChart
							labels={monthLabels}
							dataPoints={monthData}
							color="${({ theme }) => theme.colors.grayMain};"
						/>
					</ChartWrapper>
					<ChartWrapper>
						<SectionTitle>하루 방문자 수 {'>'}</SectionTitle>
						<LineChart
							labels={hourlyLabels}
							dataPoints={hourlyData}
							color="${({ theme }) => theme.colors.grayMain};"
						/>
					</ChartWrapper>
				</BoardArea>

				<BoardArea>
					<ChartWrapper>
						<SectionTitle>등록 요청 {'>'} </SectionTitle>
						<Table
							data={approvalData?.result.content}
							header={[
								{ label: '소극장', key: 'showName' },
								{ label: '날짜/시간', key: 'dateTime' },
								{ label: '인원수', key: 'capacity' },
							]}
						/>
					</ChartWrapper>

					<ChartWrapper>
						<SectionTitle>예약 현황 {'>'} </SectionTitle>
						<Table
							data={reservationData?.result.content}
							header={[
								{ label: '소극장', key: 'showName' },
								{ label: '날짜/시간', key: 'performanceDateTime' },
								{ label: '현황', key: 'totalTicket' },
							]}
						/>
					</ChartWrapper>
				</BoardArea>
			</Content>
		</Container>
	);
}

export default Dashboard;

const Container = styled.div`
	width: 100%;
`;

const Content = styled.div``;
const BoardArea = styled.div`
	padding: 50px;
	display: flex;
	gap: 90px;
`;
const ChartWrapper = styled.div`
	background: #fff;
	width: 50%;
	display: flex;
	flex-direction: column;
`;
const SectionTitle = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayMain};
	margin-bottom: 16px;
`;
