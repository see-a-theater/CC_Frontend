
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContainer, MainContent, ScrollableContent } from '@/pages/ticketingpage/styles/commonStyles';
import Header from '@/pages/ticketingpage/components/Header';
import HeaderPC from '@/pages/ticketingpage/components/HeaderPC';
import Step1 from '@/pages/ticketingpage/pages/Step1';
import Step2 from '@/pages/ticketingpage/pages/Step2';
import Step3 from '@/pages/ticketingpage/pages/Step3';
import LoadingSpinner from '@/pages/ticketingpage/components/LoadingSpinner';
import ErrorMessage from '@/pages/ticketingpage/components/ErrorMessage';
import useTicketing from '@/pages/ticketingpage/hooks/useTicketing';
import useResponsive from '@/pages/ticketingpage/hooks/useResponsive';
import useAxios from '@/utils/hooks/useAxios';

const TicketingPage = () => {
  const { playId } = useParams()
  const ticketing = useTicketing(playId);
  const { step, goToPreviousStep, getCurrentStepContent, loading, error } = ticketing;
  const isPC = useResponsive();
  const currentContent = getCurrentStepContent();

  // useAxios 훅으로 토큰 관리
  useAxios();

	// 반응형 헤더 렌더링
	const renderHeader = () => {
		if (isPC && step === 5) return null;

		if (isPC) return <HeaderPC currentStep={step} />;
		else return <Header onBack={goToPreviousStep} />;
	};

  // 현재 단계에 맞는 컴포넌트 렌더링
  const renderStep = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorMessage message={error} />;
    }

    if (isPC) {
      switch (step) {
        case 1:
          return <Step1 ticketing={ticketing} />;
        case 2:
        case 3:
        case 4:
          return <Step2 ticketing={ticketing} />;
        case 5: 
          return <Step3 ticketing={ticketing} />;
        default:
          return <Step1 ticketing={ticketing} />;
      }
    } else {
      switch (step) {
        case 1:
          return <Step1 ticketing={ticketing} />;
        case 2:
        case 3:
        case 4:
          return <Step2 ticketing={ticketing} />;
        case 5:
          return <Step3 ticketing={ticketing} />;
        default:
          return <Step1 ticketing={ticketing} />;
      }
    }
  };

	return (
		<AppContainer>
			{renderHeader()}
			<ScrollableContent>
				{currentContent !== 'discount' &&
					currentContent !== 'delivery' &&
					currentContent !== 'payment' && (
						<MainContent>{renderStep()}</MainContent>
					)}
				{(currentContent === 'discount' ||
					currentContent === 'delivery' ||
					currentContent === 'payment') && (
					<div style={{ margin: '0px 100px 0px 160px' }}>{renderStep()}</div>
				)}
			</ScrollableContent>
		</AppContainer>
	);
};

export default TicketingPage;