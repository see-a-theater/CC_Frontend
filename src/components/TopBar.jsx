import styled from 'styled-components';
import ChevronPink from '@/assets/icons/ChevronPink.svg';
function TopBar({ onPrev, onNext, children }) {
	return (
		<div style={{ height: '120px' }}>
			<Top>
				<img
					src={ChevronPink}
					onClick={onPrev}
					style={{ height: '16px', width: '16px' }}
				/>
				<p>{children}</p>
				<button onClick={onNext}></button>
			</Top>
		</div>
	);
}

export default TopBar;

const Top = styled.div`
	display: flex;
	flex: 1;
	gap: 12px;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px 24px;
	padding-top: 76px;
	@media (min-width: 768px) {
		height: 140px;
	}

	p {
		color: ${({ theme }) => theme.colors.grayMain};
		text-align: center;

		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		letter-spacing: -0.48px;
		margin: 0px;
	}
	button {
		color: gray;
		/*visibility: hidden;*/
	}
`;
