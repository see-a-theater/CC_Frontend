import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TicketContainer from '../../../components/TicketContainer';
import TopBar from '../../../components/TopBar';
import { useNavigate } from 'react-router-dom';
import ChevronLeftGray from '@/assets/icons/chevronLeftGray.svg?react';
import ChevronRightGray from '@/assets/icons/ChevronRightGray.svg?react';
import Poster from '@/assets/images/test-poster2.png';
import TopBarWeb from '../../../components/TopBarWeb';
import PillToggleGroup from '../../../components/PillToggleGroup';
import useCustomFetch from '../../../utils/hooks/useAxios';
function MyTickets() {
	const [selected, setSelected] = useState('전체');
	const navigate = useNavigate();

	function onPrev() {
		navigate(-1);
	}
	const ticketHeaders = ['예매일', '장소', '관람일시', '상태', '취소일시'];

	const details = [
		{
			name: '실종',
			count: 2,
			imgSrc: Poster,
			bookingDate: '2025-01-15',
			place: '홍익대학교 학생회관 3층 소극장',
			performanceDate: '2025-03-21 (금) 14:30 1회',
			cancelDeadline: '2025-03-20 (목) 17:00 까지',
			status: '예매 진행중',
			navLink: '1',
		},
		{
			name: '실종',
			count: 2,
			imgSrc: Poster,
			bookingDate: '2025-01-15',
			place: '홍익대학교 학생회관 3층 소극장',
			performanceDate: '2025-03-21 (금) 14:30 1회',
			cancelDeadline: '2025-03-20 (목) 17:00 까지',
			status: '공연 종료',
			navLink: '1',
		},
	];

	localStorage.setItem(
		'accessToken',
		import.meta.env.VITE_REACT_APP_ACCESS_TOKEN,
	);
	const page = 0;
	const size = 5;
	const {
		data: dataAllTicket,
		loading: loadingAllTicket,
		error: errorAllTicket,
	} = useCustomFetch(`/myTickets/list?status=ALL`);

	const {
		data: dataReservedTicket,
		loading: loadingReservedTicket,
		error: errorReservedTicket,
	} = useCustomFetch(`/myTickets/list?status=RESERVED`);
	const {
		data: dataCancelledTicket,
		loading: loadingCancelledTicket,
		error: errorCancelledTicket,
	} = useCustomFetch(`/myTickets/list?status=CANCELLED`);
	return (
		<MyTicketsWrapper>
			<div className="only-mobile">
				<TopBar onPrev={onPrev}>등록한 공연</TopBar>
			</div>
			<div className="only-web-flex">
				<TopBarWeb>내 티켓</TopBarWeb>
			</div>
			<Wrapper>
				<PillToggleGroup
					options={['전체', '예매 진행', '공연 종료']}
					onSelect={(option) => setSelected(option)}
				/>

				<div style={{ marginBottom: '28px' }} />
				{selected === '전체' && (
					<>
						{dataAllTicket?.result &&
							dataAllTicket?.result.map((detail) => (
								<>
									<TicketContainer details={detail} header={ticketHeaders} />
								</>
							))}
					</>
				)}
				{selected === '예매 진행' && (
					<>
						<p>예매진행) 데이터 들어온 후 확인 필요 </p>
						{dataReservedTicket?.content &&
							dataReservedTicket?.content.map((detail) => (
								<>
									<TicketContainer details={detail} header={ticketHeaders} />
								</>
							))}
					</>
				)}
				{selected === '공연 종료' && (
					<>
						<p>공연 종료) 데이터 들어온 후 확인 필요 </p>
						{dataCancelledTicket?.content &&
							dataCancelledTicket?.content.map((detail) => (
								<>
									<TicketContainer details={detail} header={ticketHeaders} />
								</>
							))}
					</>
				)}
			</Wrapper>
		</MyTicketsWrapper>
	);
}
export default MyTickets;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	@media (min-width: 768px) {
		flex: 0.8;
		padding-left: 110px;
	}
	@media (max-width: 768px) {
		padding: 20px;
	}
`;

const MyTicketsWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	@media (min-width: 768px) {
		padding: 100px 70px;
	}
`;
