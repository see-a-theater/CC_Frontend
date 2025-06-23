
import React from 'react';
import { AppContainer, MainContent, ScrollableContent } from './styles/commonStyles';
import Header from './components/Header';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import useTicketing from './hooks/useTicketing';

const TicketingPage = () => {
  const ticketing = useTicketing();
  const { step, goToPreviousStep } = ticketing;

  // 현재 단계에 맞는 컴포넌트 렌더링
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 ticketing={ticketing} />;
      case 2:
        return <Step2 ticketing={ticketing} />;
      case 3:
        return <Step3 ticketing={ticketing} />;
      default:
        return <Step1 ticketing={ticketing} />;
    }
  };

  return (
    <AppContainer>
      <Header onBack={goToPreviousStep} />
      <ScrollableContent>
        <MainContent>
          {renderStep()}
        </MainContent>
      </ScrollableContent>
    </AppContainer>
  );
};

export default TicketingPage;