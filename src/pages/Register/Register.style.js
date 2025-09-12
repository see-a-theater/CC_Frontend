import styled from 'styled-components';

export const RegisterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	@media (min-width: 768px) {
		/*반응형 관련 설정*/
	}

	h1 {
		/*최상단 핑크색 제목 */
		color: ${({ theme }) => theme.colors.pink600};
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

	form {
		display: flex;
		flex-direction: column;
		gap: 25px;
		> div {
			/*label과 input을 묶어주는 단위*/
			display: flex;
			flex-direction: column;

			label {
				/* 라벨*/
				color: ${({ theme }) => theme.colors.grayMain};
				font-size: ${({ theme }) => theme.font.fontSize.body14};
				font-style: normal;
				font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
				line-height: normal;
				letter-spacing: -0.42px;
				margin-bottom: 4px;
				@media (min-width: 768px) {
					font-size: ${({ theme }) => theme.font.fontSize.headline20};
				}
			}

			p {
				/* 라벨 아래의 입력 주의사항 - 회색*/
				color: ${({ theme }) => theme.colors.gray400};
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
			.input-text {
				/* 기본 텍스트 입력 인풋 */
				display: flex;
				flex: 1;
				height: 40px;
				padding: 12px 8px;
				align-items: center;
				gap: 12px;

				min-width: 0;
				border-radius: 3px;
				border: none;
				background: ${({ theme }) => theme.colors.gray200};
				margin-top: 8px;
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
				/* 텍스트에어리어 인풋 */
				display: flex;
				height: 124px;
				padding: 8px;
				align-items: flex-start;
				gap: 10px;
				flex-shrink: 0;
				border-radius: 3px;
				border: none;
				background: ${({ theme }) => theme.colors.gray200};
				color: ${({ theme }) => theme.colors.grayMain};

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
				/* 셀렉트박스 */
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

	.btn-add {
		/* 인풋 추가하기 버튼 */
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

	ul {
		/* 마지막 참고사항 페이지에 사용 */
		list-style-type: none;

		li {
			display: flex;
			gap: 8px;
			color: ${({ theme }) => theme.colors.grayMain};
			font-size: ${({ theme }) => theme.font.fontSize.body14};
			font-style: normal;
			font-weight: ${({ theme }) => theme.font.fontWeight.bold};
			line-height: normal;
			letter-spacing: -0.42px;
			margin-bottom: 16px;
			@media (min-width: 768px) {
				margin-bottom: 4px;
			}
			p {
				color: ${({ theme }) => theme.colors.grayMain} !important;
			}
		}
	}
`;
