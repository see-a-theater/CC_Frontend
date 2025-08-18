import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
/* 현재 step 번호 계산*/

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

	/* /small-theater/register/step1~step5 */
	const [formData, setFormData] = useState({
		name: '',
		place: '',
		schedule: '',
		runtime: '',
		account: '',
		contact: '',
		hashtag: '',
		summary: '',
		notice: {
			content: '',
			noticeImageUrl: '',
			timeInfo: '',
		},
		casting: [
			{
				actorName: '',
				castingName: '',
				castingImageUrl: '',
			},
		],
		tickets: [
			{
				discountName: '',
				price: 0,
			},
		],
		staff: [
			{
				position: '',
				staffName: '',
			},
		],
		rounds: [
			{
				roundNumber: 1,
				performanceDateTime: '',
				totalTicket: 0,
			},
		],
		imageRequestDTO: {
			keyName: '',
			imageUrl: '',
		},
	});
	return (
		<Wrapper>
			<TopBar onPrev={prevStep} onNext={nextStep}>
				{currentStep !== 5 && '공연 등록'}
			</TopBar>

			<div className="only-mobile">
				{currentStep !== 5 && <ProgressBar percentage={currentStep / 4} />}
			</div>

			<ContentWrapper>
				<Outlet context={{ nextStep, prevStep, formData, setFormData }} />
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
