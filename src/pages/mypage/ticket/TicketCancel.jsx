import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TicketContainer from '@/components/TicketContainer';

import Poster from '@/assets/images/test-poster2.png';
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
	},
];
function TicketCancel() {
	const navigate = useNavigate();
	return (
		<>
			<MobileWrapper>
				<Overlay>
					<Modal>
						<h2>정말 예매를 취소하시겠어요?</h2>
						<ButtonGroup>
							<button onClick={() => navigate(-1)}>취소</button>
							<button onClick={() => navigate('complete')}>확인</button>
						</ButtonGroup>
					</Modal>
				</Overlay>
			</MobileWrapper>
			<WebWrapper>
				<Contents>
					<h2>예매취소</h2>
					<p>실종 2매를 예매 취소하시겠습니까?</p>
					<TicketContainer details={details[0]} header={ticketHeaders} />
					<p>예매 취소에 관한 취소 수수료에 대한 내용을 숙지하셨나요?</p>
					<div
						className="checkbox"
						style={{ marginBottom: '40px', marginTop: '24px' }}
					>
						<label>
							<input type="checkbox" />
							취소 수수료를 확인하였으며, 이에 동의합니다
						</label>
					</div>
					<ButtonGroup>
						<button onClick={() => navigate('complete')}>예매 취소</button>
						<button onClick={() => navigate(-1)}>취소</button>
					</ButtonGroup>
				</Contents>
			</WebWrapper>
		</>
	);
}

export default TicketCancel;
const MobileWrapper = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;

const WebWrapper = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
`;

const Contents = styled.div`
	h2 {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.72px;
	}

	p {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.48px;
	}
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

const Modal = styled.div`
	display: flex;
	width: 300px;
	padding: 20px 50px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.grayWhite};
	box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.04);

	h2 {
		color: ${({ theme }) => theme.colors.grayMain};
		text-align: center;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		line-height: normal;
		letter-spacing: -0.42px;
	}
`;

const ButtonGroup = styled.div`
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		gap: 96px;

		button {
			flex: 1;
			padding: 4px;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			margin: 0 4px;
			font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		}

		button:last-child {
			color: ${({ theme }) => theme.colors.redWarning};
		}
	}

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;

		button {
			display: flex;
			width: 400px;
			height: 40px;
			padding: 8px;
			justify-content: center;
			align-items: center;
			gap: 10px;
			flex-shrink: 0;
			border-radius: 3px;
		}

		button:first-child {
			border: 1px solid ${({ theme }) => theme.colors.gray300};
			background: ${({ theme }) => theme.colors.gray300};
		}

		button:last-child {
			border-radius: 3px;
			border: 1px solid ${({ theme }) => theme.colors.grayOutline};
			background: ${({ theme }) => theme.colors.grayWhite};
		}
	}
`;
