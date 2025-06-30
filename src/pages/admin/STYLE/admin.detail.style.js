import styled from 'styled-components';
export const TablePageWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	svg {
		color: black;
	}
	table {
		width: 515px;
		border-collapse: collapse;
		td,
		th {
			color: #424242;
			font-family: Pretendard;
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: 25px; /* 156.25% */
			padding: 10px 20px;
		}
		th {
			max-width: 100px;
			color: #8f8e94;
			border: 1px solid #8f8e94;
			border-left: none;
		}
		td {
			border: 1px solid #8f8e94;
			border-right: none;
		}
	}
	.light {
		padding: 10px 50px;
		flex-shrink: 0;
		border-radius: 8px;
		background: var(--color-pink-100, #fff7f5);
		color: var(--color-pink-600, #f67676);
		text-align: center;
		font-family: Pretendard;
		font-size: 16px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
`;
export const Content = styled.div``;

export const OptionBarWrapper = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	flex-direction: column;
	padding: 0px 70px;
`;
