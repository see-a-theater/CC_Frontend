import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

/* 현재 step 번호 계산
 /small-theater/register/step1~step5 */

function SmallTheaterRegister() {
	const navigate = useNavigate();
	const location = useLocation();

	const currentStep = Number(
		location.pathname.split('/').pop().replace('step', ''),
	);

	const nextStep = () =>
		navigate(`/small-theater/register/step${Math.min(currentStep + 1, 5)}`);
	const prevStep = () =>
		navigate(`/small-theater/register/step${Math.max(currentStep - 1, 1)}`);

	return (
		<Wrapper>
			<TopBar onPrev={prevStep} onNext={nextStep}>
				{currentStep !== 5 && '공연 등록'}
			</TopBar>

			<div className="only-mobile">
				{currentStep !== 5 && <ProgressBar percentage={currentStep / 4} />}
			</div>

			<ContentWrapper>
				<Outlet context={{ nextStep, prevStep }} />
			</ContentWrapper>
		</Wrapper>
	);
}

export default SmallTheaterRegister;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: auto;
	@media (min-width: 768px) {
		padding: 0px 160px;
	}
`;

const ContentWrapper = styled.div`
	padding: 20px;
	flex: 1;
`;

const ProgressBar = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${({ theme }) => theme.colors.pink300};
	&::before {
		content: '';
		display: block;
		width: ${({ percentage }) => percentage * 100}%;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.pink500};
	}
`;
