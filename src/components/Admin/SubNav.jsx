import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SubNav({ page }) {
	const navigate = useNavigate();

	return (
		<Nav>
			<h3
				onClick={() => navigate('/admin/tickets')}
				className={page === 'tickets' ? 'nowHere' : ''}
			>
				소극장 티켓 관리
			</h3>
			<h3
				onClick={() => navigate('/admin/reservations')}
				className={page === 'reservations' ? 'nowHere' : ''}
			>
				예약 내역 관리
			</h3>
			<h3
				onClick={() => navigate('/admin/refunds')}
				className={page === 'refunds' ? 'nowHere' : ''}
			>
				환불 내역 관리
			</h3>
		</Nav>
	);
}

export default SubNav;

const Nav = styled.div`
	display: flex;
	gap: 12px;
	margin-bottom: 32px;

	h3 {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: #8f8e94;
		cursor: pointer;
	}

	.nowHere {
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
