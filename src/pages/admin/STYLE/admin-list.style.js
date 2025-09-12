import styled from 'styled-components';
export const AdminListPage = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.9;
	padding-left: 73px;
	table {
		border-collapse: collapse;
		th,
		td {
			border: 1px solid black;
			padding: 4px 20px;
			color: #000;
			text-align: center;

			font-size: 14px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
		}
	}
	button {
		width: 39px;
		height: 20px;
		flex-shrink: 0;
		background: #d9d9d9;
	}
	.pagination {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 20px;

		li {
			list-style: none;

			a {
				display: block;
				color: #989898;
				text-align: center;
				font-size: 14px;
				font-style: normal;
				font-weight: 700;
				line-height: 18px; /* 128.571% */
				&:hover {
					background-color: #f0f0f0;
				}
			}

			&.active a {
				color: #000;
			}

			&.disabled a {
				color: #999;
				pointer-events: none;
			}
		}
	}
`;
