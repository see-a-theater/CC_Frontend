import styled from 'styled-components';
import { useState } from 'react';
import TicketContainer from '../../../components/TicketContainer';
import TopBar from '../../../components/TopBar';
import { useNavigate } from 'react-router-dom';
import ChevronLeftGray from '@/assets/icons/chevronLeftGray.svg?react';
import ChevronRightGray from '@/assets/icons/ChevronRightGray.svg?react';
import Poster from '@/assets/images/test-poster2.png';
import TopBarWeb from '../../../components/TopBarWeb';
import PillToggleGroup from '../../../components/PillToggleGroup';
function MyTickets() {
	const [selected, setSelected] = useState('전체');
	const navigate = useNavigate();

	function onPrev() {
		navigate(-1);
	}
	const ticketHeaders = ['예매일', '장소', '관람일시', '상태'];
	const details = [
		{
			title: '실종',
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
			title: '실종',
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
						{details.map((detail) => (
							<>
								<TicketContainer details={detail} header={ticketHeaders} />
							</>
						))}
					</>
				)}
				{selected === '예매 진행' && (
					<>
						{details
							.filter((detail) => detail.status === '예매 진행중')
							.map((detail) => (
								<>
									<TicketContainer details={detail} header={ticketHeaders} />
								</>
							))}
					</>
				)}
				{selected === '공연 종료' && (
					<>
						{details
							.filter((detail) => detail.status === '공연 종료')
							.map((detail) => (
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
