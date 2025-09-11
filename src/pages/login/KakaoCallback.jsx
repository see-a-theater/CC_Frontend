import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
import EyeRollingSVG from '@/components/EyeRollingSVG';

function KakaoCallback() {
	const location = useLocation();
	const navigate = useNavigate();
	const { login } = useAuth();

	const initialized = useRef(false);

	useEffect(() => {
		if (initialized.current) {
			return;
		}

		initialized.current = true;

		const getCode = async () => {
			const params = new URLSearchParams(location.search);
			const code = params.get('code');
			const role = sessionStorage.getItem('selectedRole');

			if (!code) {
				console.error('카카오 인가 코드를 받지 못했습니다.');
				alert('카카오 로그인에 실패했습니다.');
				navigate('/login');
				return;
			}

			if (!role) {
				console.error('역할 정보(role)가 없습니다. 다시 로그인해 주세요.');
				alert('역할 정보를 가져올 수 없습니다. 다시 로그인해 주세요.');
				navigate('/');
				return;
			}

			try {
				const response = await axios.post(
					`${import.meta.env.VITE_APP_API_URL}/auth/kakao/callback`,
					{ code, role },
				);
				const { accessToken } = response.data;

				login(accessToken);
				sessionStorage.removeItem('selectedRole');

				navigate('/home');
			} catch (error) {
				console.error('로그인 처리 중 오류 발생:', error);
				alert('로그인 중 오류가 발생했습니다.');
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

export default KakaoCallback;
