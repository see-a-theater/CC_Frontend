import { RegisterWrapper } from './Register.style.js';
function RegisterStep5({ onNext }) {
	return (
		<RegisterWrapper>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flex: '0.8',
				}}
			>
				<h1>등록 완료!</h1>
			</div>

			<button type="submit" className="btn-primary" onClick={onNext}>
				마이페이지 바로가기
			</button>
		</RegisterWrapper>
	);
}

export default RegisterStep5;
