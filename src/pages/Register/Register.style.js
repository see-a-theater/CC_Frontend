import styled from 'styled-components';

export const RegisterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-columns: 7fr 2fr;
		gap: 60px;
	}
	h1 {
		color: ${({ theme }) => theme.colors.pink600};
		font-family: Inter;
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.6px;
		margin-bottom: 6px;

		@media (min-width: 768px) {
			font-size: 24px;
		}
	}
	/* 마지막 참고사항 페이지에 사용 */
	ul {
		list-style-type: none;

		li {
			display: flex;
			gap: 8px;
			color: ${({ theme }) => theme.colors.grayMain};
			font-family: 'NanumSquare Neo OTF';
			font-size: ${({ theme }) => theme.font.fontSize.body14};
			font-style: normal;
			font-weight: ${({ theme }) => theme.font.fontWeight.bold};
			line-height: normal;
			letter-spacing: -0.42px;
			margin-bottom: 16px;
			p {
				color: ${({ theme }) => theme.colors.grayMain} !important;
			}
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 25px;
		> div {
			display: flex;
			flex-direction: column;

			label {
				color: ${({ theme }) => theme.colors.grayMain};
				font-family: Inter;
				font-size: ${({ theme }) => theme.font.fontSize.body14};
				font-style: normal;
				font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
				line-height: normal;
				letter-spacing: -0.42px;
				margin-bottom: 12px;
				@media (min-width: 768px) {
					font-size: ${({ theme }) => theme.font.fontSize.headline20};
				}
			}

			p {
				color: ${({ theme }) => theme.colors.gray400};
				font-family: 'NanumSquare Neo OTF';
				font-size: ${({ theme }) => theme.font.fontSize.body13};
				font-style: normal;
				font-weight: ${({ theme }) => theme.font.fontWeight.bold};
				line-height: 18px;
				letter-spacing: -0.39px;

				@media (min-width: 768px) {
					margin-bottom: 12px;
					font-size: ${({ theme }) => theme.font.fontSize.body14};
				}
			}

			> input {
				display: flex;
				height: 40px;
				width: 100%;
				padding: 12px 8px;
				align-items: center;
				gap: 12px;
				flex-shrink: 0;
				border-radius: 3px;
				border: none;
				background: ${({ theme }) => theme.colors.gray200};
				margin-bottom: 8px;
				color: ${({ theme }) => theme.colors.grayMain};
				font-size: ${({ theme }) => theme.font.fontSize.body13};
				font-style: normal;
				font-weight: ${({ theme }) => theme.font.fontWeight.regular};
				line-height: 18px;
				letter-spacing: -0.39px;
				@media (min-width: 768px) {
					padding: 20px 12px;
					height: 58px;
					font-size: ${({ theme }) => theme.font.fontSize.title16};
				}
				&::placeholder {
					color: ${({ theme }) => theme.colors.gray400};
				}

				&:focus {
					outline: none;
					box-shadow: none;
				}
			}

			textarea {
				display: flex;
				height: 124px;
				padding: 8px;
				align-items: flex-start;
				gap: 10px;
				flex-shrink: 0;
				border-radius: 3px;
				border: none;
				background: ${({ theme }) => theme.colors.gray200};
				color: ${({ theme }) => theme.colors.gray400};
				font-family: 'NanumSquare Neo OTF';
				font-size: ${({ theme }) => theme.font.fontSize.body13};
				font-style: normal;
				font-weight: ${({ theme }) => theme.font.fontWeight.regular};
				line-height: 18px;
				letter-spacing: -0.39px;
				@media (min-width: 768px) {
					padding: 20px 12px;
					font-size: ${({ theme }) => theme.font.fontSize.title16};
				}
			}

			select {
				display: flex;
				height: 40px;
				padding: 12px 8px;
				align-items: center;
				gap: 118px;
				flex-shrink: 0;
				border-radius: 3px;
				border: none;
				background: ${({ theme }) => theme.colors.gray200};
				margin-bottom: 8px;
				@media (min-width: 768px) {
					height: 58px;
					padding: 20px 12px;
					font-size: ${({ theme }) => theme.font.fontSize.title16};
				}
			}
		}
	}
	.input {
		display: flex;
		width: 100%;
		height: 40px;
		padding: 12px 8px;
		align-items: center;
		gap: 12px;
		flex-shrink: 0;
		border-radius: 3px;
		border: none;
		background: ${({ theme }) => theme.colors.gray200};
		margin-bottom: 8px;
		color: ${({ theme }) => theme.colors.grayMain};
		font-family: 'NanumSquare Neo OTF';
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.regular};
		line-height: 18px;
		letter-spacing: -0.39px;
		@media (min-width: 768px) {
			padding: 20px 12px;
			height: 58px;
			font-size: ${({ theme }) => theme.font.fontSize.title16};
		}
		&::placeholder {
			color: ${({ theme }) => theme.colors.gray400};
		}

		&:focus {
			outline: none;
			box-shadow: none;
		}
	}
	.btn-add {
		display: flex;
		height: 40px;
		padding: 12px 8px;
		justify-content: center;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
		border-radius: 3px;
		border: 1px solid ${({ theme }) => theme.colors.gray300};
		@media (min-width: 768px) {
			height: 44px;
		}
	}
`;
