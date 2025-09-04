import styled from 'styled-components';
import LineChart from '@/components/Admin/LineChart';
import Table from '@/components/Admin/Table';
import Search from '@/assets/icons/searchBlack.svg?react';

import useCustomFetch from '@/utils/hooks/useAxios';

function Dashboard() {
	const mock_stat = [
		{ year: "'24년", month: '8월', data: 100 },
		{ year: "'24년", month: '9월', data: 150 },
		{ year: "'24년", month: '10월', data: 120 },
		{ year: "'24년", month: '11월', data: 80 },
		{ year: "'24년", month: '12월', data: 90 },
		{ year: "'25년", month: '1월', data: 130 },
		{ year: "'25년", month: '2월', data: 100 },
		{ year: "'25년", month: '3월', data: 110 },
	];

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

	const statLabels = mock_stat.map((item) => `${item.year} ${item.month}`);
	const statData = mock_stat.map((item) => item.data);

	const {
		data: MonthVisitsData,
		error: MonthError,
		loading: MonthLoading,
	} = useCustomFetch(`/admin/dashboard/visits/monthly`);

	console.log('MonthError:', MonthError);
	console.log('MonthLoading:', MonthLoading);
	console.log('MonthVisitsData:', MonthVisitsData);

	const {
		data: HourlyVisitsData,
		error: HourlyError,
		loading: HourlyLoading,
	} = useCustomFetch(`/admin/dashboard/visits/monthly`);

	console.log('HourlyError:', HourlyError);
	console.log('HourlyLoading:', HourlyLoading);
	console.log('HourlyVisitsData:', HourlyVisitsData);

	return (
		<Container>
			<Content>
				<BoardArea>
					<ChartWrapper>
						<SectionTitle>통계 {'>'}</SectionTitle>
						<LineChart
							labels={statLabels}
							dataPoints={statData}
							color="${({ theme }) => theme.colors.grayMain};"
						/>
					</ChartWrapper>
					<ChartWrapper>
						<SectionTitle>하루 방문자 수 {'>'}</SectionTitle>
						<LineChart
							labels={statLabels}
							dataPoints={statData}
							color="${({ theme }) => theme.colors.grayMain};"
						/>
					</ChartWrapper>
				</BoardArea>

				<BoardArea>
					<ChartWrapper>
						<SectionTitle>등록 요청 {'>'} </SectionTitle>
						<Table data={mock_req} />
					</ChartWrapper>

					<ChartWrapper>
						<SectionTitle>예약 현황 {'>'} </SectionTitle>
						<Table data={mock_res} />
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
