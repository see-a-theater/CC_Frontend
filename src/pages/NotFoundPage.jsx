import styled from 'styled-components';
import NotFound from '@/assets/icons/NotFound.svg?react';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
	const isMobile = useIsMobile();
	const navigate = useNavigate();

	return (
		<Container>
			<NotFound />
			{isMobile && (
				<button onClick={() => navigate(-1)}>이전 화면으로 돌아가기</button>
			)}
		</Container>
	);
}

export default NotFoundPage;

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 40px;
	justify-content: center;
	align-items: center;

	button {
		padding: 10px 20px;
		border-radius: 5px;
		background: ${({ theme }) => theme.colors.pink200};
		color: ${({ theme }) => theme.colors.pink600};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.regular};
	}
`;
