import styled from 'styled-components';
import PillToggleGroup from '../../../components/PillToggleGroup';
import { useState } from 'react';
import TicketContainer from '../../../components/TicketContainer';
import TopBar from '../../../components/TopBar';
import { useNavigate } from 'react-router-dom';
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
			bookingDate: '2025-01-15',
			place: '홍익대학교 학생회관 3층 소극장',
			performanceDate: '2025-03-21 (금) 14:30 1회',
			status: '예매 진행중',
		},
		{
			title: '실종',
			count: 2,
			bookingDate: '2025-01-15',
			place: '홍익대학교 학생회관 3층 소극장',
			performanceDate: '2025-03-21 (금) 14:30 1회',
			status: '공연 종료',
		},
	];
	return (
		<>
			<TopBar onPrev={onPrev}>등록한 공연</TopBar>
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
		</>
	);
}
export default MyTickets;

const Wrapper = styled.div`
	padding: 20px;
`;
