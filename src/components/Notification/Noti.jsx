import styled from 'styled-components';

import Board from '@/assets/icons/board-filled.svg?react';
import Logo from '@/assets/icons/logo.svg?react';
import Movie from '@/assets/icons/movie-filled.svg?react';

function Noti({ type, category, content, when, checked }) {
	const renderIcon = () => {
		if (type === 'play') return <Movie width={16} />;
		if (type === 'board') return <Board width={16} />;
		if (type === 'cc') return <Logo width={16} />;
		return null;
	};

	return (
		<Container checked={checked}>
			<div className="smallTitle">
				{renderIcon()}
				<p className="category">{category}</p>
			</div>
			<p className="notiContent">{content}</p>
			<p className="when">{when}</p>
		</Container>
	);
}

export default Noti;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px 20px;

	background-color: ${({ checked, theme }) =>
		checked ? theme.colors.grayWhite : theme.colors.pink100};

	.smallTitle {
		display: flex;
		align-items: center;
		gap: 4px;
		height: 16px;
	}
	.category {
		font-size: ${({ theme }) => theme.font.fontSize.body12};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
		color: ${({ theme }) => theme.colors.gray400};
	}
	.notiContent {
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	.when {
		font-size: ${({ theme }) => theme.font.fontSize.body10};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
		color: ${({ theme }) => theme.colors.gray400};
	}

	@media (min-width: 768px) {
		padding: 28px 48px;

		.category {
			font-size: ${({ theme }) => theme.font.fontSize.body14};
			font-weight: ${({ theme }) => theme.font.fontWeight.normal};
			color: ${({ theme }) => theme.colors.gray400};
		}
		.notiContent {
			font-size: ${({ theme }) => theme.font.fontSize.title16};
			font-weight: ${({ theme }) => theme.font.fontWeight.bold};
			color: ${({ theme }) => theme.colors.grayMain};
		}
		.when {
			font-size: ${({ theme }) => theme.font.fontSize.body13};
			font-weight: ${({ theme }) => theme.font.fontWeight.normal};
			color: ${({ theme }) => theme.colors.gray400};
		}
	}
`;
