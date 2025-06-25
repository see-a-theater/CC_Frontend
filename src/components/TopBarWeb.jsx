import styled from 'styled-components';
import ChevronLeftGray from '@/assets/icons/ChevronLeftGray.svg?react';
import { useNavigate } from 'react-router-dom';

function TopBarWeb({ children, gap = '92px' }) {
	const navigate = useNavigate();

	function onPrev() {
		navigate(-1);
	}

	return (
		<Container className="only-web-flex" $gap={gap}>
			<div onClick={onPrev}>
				<ChevronLeftGray />
			</div>
			<Title>{children}</Title>
		</Container>
	);
}

export default TopBarWeb;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${({ $gap }) => $gap};
	align-items: center;
	margin-bottom: 20px;
`;

const Title = styled.h1`
	font-size: ${({ theme }) => theme.font.fontSize.headline20};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};
`;
