import styled from 'styled-components';
export const Wrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;
export const Border = styled.div`
	display: flex;
	flex: 0.8;
	flex-direction: column;
	border: 1px solid black;

	h3 {
		color: #000;
		font-family: Pretendard;
		font-size: 16px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
`;
export const Content = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	p {
		color: #8f8e94;
		font-family: Pretendard;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: 18px; /* 128.571% */
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-skip-ink: none;
		text-decoration-thickness: auto;
		text-underline-offset: auto;
		text-underline-position: from-font;
	}
	input {
		max-width: 352px;
		height: 28px;
	}
	button {
		width: 156px;
		height: 38px;
		flex-shrink: 0;
		border-radius: 8px;
		background: var(--color-pink-600, #f67676);
		color: #fff;
		text-align: center;
		font-family: Pretendard;
		font-size: 16px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
`;
