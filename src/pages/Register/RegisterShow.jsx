import React, { useState } from 'react';
import RegisterStep1 from './RegisterStep1';
import RegisterStep2 from './RegisterStep2';
import RegisterStep3 from './RegisterStep3';
import RegisterStep4 from './RegisterStep4';
import RegisterStep5 from './RegisterStep5';
import styled from 'styled-components';
import { lintImport } from 'eslint-plugin-no-relative-import-paths';
import TopBar from '../../components/TopBar';
const RegisterShow = () => {
  const [step, setStep] = useState(1);
  console.log(step);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
    <TopBar onPrev={prevStep} onNext={nextStep}>{step != 5 && '공연 등록'}</TopBar>
    {step != 5 && <ProgressBar percentage={(step)/4}/>}
    <Wrapper>      
      {step === 1 && <RegisterStep1 onNext={nextStep} />}
      {step === 2 && <RegisterStep2 onNext={nextStep} onPrev={prevStep} />}
      {step === 3 && <RegisterStep3 onNext={nextStep} onPrev={prevStep} />}
      {step === 4 && <RegisterStep4 onPrev={prevStep} onNext={nextStep}/>}
      {step === 5 && <RegisterStep5 onPrev={prevStep} />}
    </Wrapper>
    </>
  );
};

export default RegisterShow;

const Wrapper = styled.div`
  padding: 20px;
`
const ProgressBar = styled.div`
  width: 100%;
  height:2px;
  background-color: ${({ theme }) => theme.colors.pink300};
  &::before {
  content: "";
  display: block;
  width: ${({ percentage }) => percentage * 100}%; /* Adjust width based on percentage */
  height: 2px;
  background-color: ${({ theme }) => theme.colors.pink500};
  }
`