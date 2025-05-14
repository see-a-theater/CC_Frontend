
import { useState, useEffect } from 'react';

const useTicketing = () => {
  const dateOptions = [
    { date: '2025.05.14 (수)', times: ['15:00', '17:00', '19:00'] },
    { date: '2025.05.15 (목)', times: ['16:00', '20:00'] },
    { date: '2025.05.16 (금)', times: ['13:00', '16:00', '19:00'] },
    { date: '2025.05.17 (토)', times: ['16:00', '19:00'] },
    { date: '2025.05.18 (일)', times: ['11:00', '13:00', '15:00', '17:00'] },
  ];
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(dateOptions[0].date);
  const [availableTimes, setAvailableTimes] = useState(dateOptions[0].times);
  const [time, setTime] = useState(null);
  const [people, setPeople] = useState(null);
  const [discountType, setDiscountType] = useState(null);
  const [paymentType, setPaymentType] = useState(null);
  const [deliveryType, setDeliveryType] = useState(null);
  const [nextActive, setNextActive] = useState(false);

  useEffect(() => {
    const selected = dateOptions.find((d) => d.date === date);
    if (selected) setAvailableTimes(selected.times);
  }, [date]);

  // 다음 버튼 활성화 여부 확인
  useEffect(() => {
    if (step === 1) {
      setNextActive(date && time && people);
    } else if (step === 2) {
      setNextActive(discountType !== null && paymentType !== null && deliveryType !== null);
    }
  }, [step, date, time, people, discountType, paymentType, deliveryType]);

  // 다음 단계로 이동
  const goToNextStep = () => {
    if (nextActive) {
      setStep(step + 1);
    }
  };

  // 이전 단계로 이동
  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // 예약 정보 확인 화면으로 이동 (임시)
  const viewReservation = () => {
    window.alert('예약 정보 확인 화면으로 이동합니다.');
  };

  // 이벤트 정보
  const eventInfo = {
    title: '실종',
    venue: '홍익대학교 학생회관 3층 소극장',
    posterUrl: ''
  };

  // 결제 정보 계산
  const calculatePayment = () => {
    const basePrice = 10000;
    const discountAmount = discountType === 'standard' ? 3000 : 0;
    const deliveryFee = 0; // 현장수령은 0원
    
    return {
      basePrice,
      discountAmount,
      deliveryFee,
      totalPrice: basePrice - discountAmount + deliveryFee
    };
  };

  return {
    // 상태
    dateOptions,
    step,
    date,
    availableTimes,
    time,
    people,
    discountType,
    paymentType,
    deliveryType,
    nextActive,
    eventInfo,
    
    // 액션
    setDate,
    setAvailableTimes,
    setTime,
    setPeople,
    setDiscountType,
    setPaymentType,
    setDeliveryType,
    goToNextStep,
    goToPreviousStep,
    viewReservation,
    
    // 계산된 값
    calculatePayment
  };
};

export default useTicketing;