import styled from 'styled-components';
import KakaoLoginButton from '@/components/Login/KakaoLoginButton';
import LogoWeb from '@/assets/icons/login/LogoWeb.svg?react';
import LogoMobile from '@/assets/icons/login/LogoMobile.svg?react';
import chevron from '@/assets/icons/chevronLeftPink.svg?react';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import { useNavigate } from 'react-router-dom';

function Login() {
	const isMobile = useIsMobile();
	const naviagate = useNavigate();

	return (
		<Container>
			<Chevron onClick={naviagate(-1)} />
			{isMobile ? <LogoMobile /> : <LogoWeb />}
			<KakaoLoginButton />
		</Container>
	);
}

export default Login;

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 240px;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		gap: 144px;
	}

	position: relative;
`;

const Chevron = styled(chevron)`
	position: absolute;
	top: 20px;
	left: 28px;
`;
