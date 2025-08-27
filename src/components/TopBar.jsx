import styled from 'styled-components';
import ChevronPink from '@/assets/icons/ChevronPink.svg';
import { useNavigate } from 'react-router-dom';
function TopBar({ onPrev, onNext, children }) {
	const navigate = useNavigate();
	function onPrev() {
		navigate(-1);
	}
	return (
		<>
			<Top>
				<img
					src={ChevronPink}
					onClick={onPrev}
					style={{ height: '16px', width: '16px' }}
				/>
				<p>{children}</p>
				<button onClick={onNext}>(다음)</button>
			</Top>
		</>
	);
}

export default TopBar;

const Top = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	width: 100%;
	padding: 20px 24px;
	padding-top: 76px;

	p {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		color: ${({ theme }) => theme.colors.grayMain};
		text-align: center;

		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		letter-spacing: -0.48px;
		margin: 0px;
	}
	button {
		position: absolute;
		right: 10%;
		color: gray;
		/*visibility: hidden;*/
	}
`;
