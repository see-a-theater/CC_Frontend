
import React from 'react';
import PosterInfo from '../components/PosterInfo';
import RadioGroup from '../components/RadioGroup';
import ActionButton from '../components/ActionButton';
import { FormSection, SelectionSection, SectionTitle } from '../styles/commonStyles';
import { SummaryRow } from '../styles/summaryStyles';
import { Divider, Label } from '../styles/formStyles';

const Step2 = ({ 
  ticketing: { 
    date, 
    time, 
    people, 
    eventInfo, 
    discountType, 
    paymentType,
    deliveryType, 
    nextActive,
    setDiscountType,
    setPaymentType, 
    setDeliveryType, 
    goToNextStep,
    calculatePayment
  } 
}) => {
  const discountOptions = [
    { value: 'standard', label: '홍대생 할인' },
    { value: 'none', label: '없음' }
  ];

  const deliveryOptions = [
    { value: 'venue', label: '현장 수령' }
  ];

  const paymentOptions = [
    { value: 'bank', label: '입금 (주) 홍익국연구회' },
    { value: 'card', label: '카카오페이' }
  ];

  const payment = calculatePayment();

  return (
    <>
      <PosterInfo eventInfo={eventInfo} />
      
      <FormSection>
        <SectionTitle>할인 선택</SectionTitle>
        <SelectionSection>
            <Label>할인 선택</Label>
            <RadioGroup 
            options={discountOptions} 
            selectedValue={discountType} 
            onChange={setDiscountType} 
            />
        </SelectionSection>
      </FormSection>
      
      {discountType && (
        <FormSection>
            <SectionTitle>티켓 수령</SectionTitle>
            <SelectionSection>
                <Label>할인 선택</Label>
                <RadioGroup 
                options={deliveryOptions} 
                selectedValue={deliveryType} 
                onChange={setDeliveryType} 
                />
            </SelectionSection>
        </FormSection>
      )}

      {discountType && deliveryType && (
        <FormSection>
            <SectionTitle>결제</SectionTitle>
            <SelectionSection>
                <Label>결재</Label>
                <RadioGroup 
                options={paymentOptions} 
                selectedValue={paymentType} 
                onChange={setPaymentType} 
                />
            </SelectionSection>
        </FormSection>
      )}

      <Divider />
      
      <FormSection>
        <SectionTitle>예매 내용</SectionTitle>
        <SummaryRow>
          <div>일시</div>
          <span>{`${date} ${time || ''}`}</span>
        </SummaryRow>
        <SummaryRow>
          <div>인원</div>
          <span>{people || ''}</span>
        </SummaryRow>
        <SummaryRow>
          <div>티켓 금액</div>
          <span>{payment.basePrice.toLocaleString()}원</span>
        </SummaryRow>
        <SummaryRow>
          <div>할인</div>
          <span className={discountType ? "discount" : ""}>
            {discountType ? `-${payment.discountAmount.toLocaleString()}원` : ''}
          </span>
        </SummaryRow>
        <SummaryRow>
          <div>배송료</div>
          <span>{deliveryType ? `${payment.deliveryFee.toLocaleString()}원 (현장수령)` : ''}</span>
        </SummaryRow>
        <SummaryRow className="total">
          <div>총 결제 금액</div>
          <span>{(payment.totalPrice * people).toLocaleString()}원</span>
        </SummaryRow>
      </FormSection>
      
      <ActionButton isActive={nextActive} onClick={goToNextStep}>
        다음
      </ActionButton>
    </>
  );
};

export default Step2;