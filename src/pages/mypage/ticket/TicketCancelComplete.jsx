import { useNavigate } from 'react-router-dom';
import { RegisterWrapper } from '@/pages/register/Register.style.js';
import styled from 'styled-components';
function TicketCancelComplete() {
	const navigate = useNavigate();
	return (
		<>
			<MobileWrapper>
				<RegisterWrapper>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flex: '0.8',
						}}
					>
						<h1>예매 취소 완료!</h1>
					</div>

					<button
						type="submit"
						className="btn-primary"
						onClick={() => navigate(-2)}
					>
						취소 내역 확인하기
					</button>
				</RegisterWrapper>
			</MobileWrapper>
			<WebWrapper>
				<Contents>
					<h2>예매 취소가 정상적으로 접수되었습니다</h2>
					<p>미아 파밀리아 2매 예매 취소가 완료되었습니다.</p>

					<p>
						취소 내역 확인 버튼을 선택하시면 취소 내역 페이지로 이동합니다.
						취소가 완료되면 취소 완료 SMS가 발송됩니다.
					</p>
					<p>
						SMS 미수신 시, 꼭 마이페이지- 내 티켓에서 취소 여부를 확인해주세요.
						감사합니다.
					</p>
					<ButtonGroup style={{ marginTop: '44px' }}>
						<button onClick={() => navigate(-2)}>취소 내역 확인하기</button>
					</ButtonGroup>
				</Contents>
			</WebWrapper>
		</>
	);
}

export default TicketCancelComplete;

const MobileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	padding: 52px 20px;

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

	p {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.48px;
	}
`;

const Contents = styled.div`
	max-width: 470px;

	h2 {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.72px;
		margin-bottom: 44px;
	}

	p {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		line-height: normal;
		letter-spacing: -0.48px;
		margin-bottom: 24px;
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
