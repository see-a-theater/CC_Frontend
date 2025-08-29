import { RegisterWrapper } from './Register.style.js';
import { useNavigate } from 'react-router-dom';
function RegisterStep5() {
	const navigate = useNavigate();
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

			<button
				type="submit"
				className="btn-primary"
				onClick={() => navigate('/mypage')}
			>
				마이페이지 바로가기
			</button>
		</RegisterWrapper>
	);
}

export default RegisterStep5;
