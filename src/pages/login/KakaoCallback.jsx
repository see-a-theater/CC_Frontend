import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@/pages/contexts/AuthContext';
import EyeRollingSVG from '@/components/EyeRollingSVG';

function KakaoCallbackPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const { login } = useAuth();

	useEffect(() => {
		const getCode = async () => {
			const params = new URLSearchParams(location.search);
			const code = params.get('code');

			if (code) {
				console.log('카카오 인가 코드 수신:', code);
				try {
					const response = await axios.post(
						`${import.meta.env.VITE_APP_API_URL}/login/oauth2/code/google`,
						{ code },
					);
					const { accessToken } = response.data;

					login(accessToken);

					navigate('/main');
				} catch (error) {
					console.error('로그인 처리 중 오류 발생:', error);
					alert('로그인 중 오류가 발생했습니다.');
					navigate('/login'); // 실패 시 로그인 페이지로 이동
				}
			} else {
				console.error('카카오 인가 코드를 받지 못했습니다.');
				alert('카카오 로그인에 실패했습니다.');
				navigate('/login');
			}
		};

		getCode();
	}, [location, navigate, login]);

	return (
		<div>
			<EyeRollingSVG isLoading={true} />
			<p>카카오 로그인 처리 중입니다. 잠시만 기다려 주세요...</p>
		</div>
	);
}
