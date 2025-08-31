// ticketingpage/hooks/useTicketing.jsx
import { useState, useEffect } from 'react';
import useResponsive from './useResponsive';
import { ticketingAPI } from '../api/ticketApi.js';

const useTicketing = (amateurShowId) => {
  // 기본 상태
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextActive, setNextActive] = useState(false);
  const isPC = useResponsive();

  // 공연 정보
  const [eventInfo, setEventInfo] = useState({
    title: '',
    venue: '',
    period: '',
    posterUrl: ''
  });

  // 예매 정보
  const [dateTimeOptions, setDateTimeOptions] = useState([]);
  const [ticketOptions, setTicketOptions] = useState([]);
  const [selectedRound, setSelectedRound] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [people, setPeople] = useState(null);
  const [discountType, setDiscountType] = useState(null);
  const [paymentType, setPaymentType] = useState(null);
  const [deliveryType, setDeliveryType] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [depositorName, setDepositorName] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  // 공연 간략 정보 조회
  const fetchShowInfo = async () => {
    if (!amateurShowId) return;
    
    setLoading(true);
    try {
      const response = await ticketingAPI.getShowSimple(amateurShowId);
      // API 응답이 { result: ... } 형태이므로 result 추출
      const showData = response.result || response;
      
      setEventInfo({
        title: showData.name || '',
        venue: showData.place || '',
        period: '', // API에서 제공하지 않으므로 추후 다른 API에서 가져와야 함
        posterUrl: showData.posterImageUrl || ''
      });
    } catch (err) {
      setError('공연 정보를 불러오는데 실패했습니다.');
      console.error('Error fetching show info:', err);
    } finally {
      setLoading(false);
    }
  };

  // 회차 정보 조회
  const fetchRounds = async () => {
    if (!amateurShowId) return;

    setLoading(true);
    try {
      const response = await ticketingAPI.getShowRounds(amateurShowId);
      // API 응답에서 result 추출
      const rounds = response.result || response;
      
      // 배열인지 확인
      if (!Array.isArray(rounds)) {
        throw new Error('회차 정보가 올바른 형식이 아닙니다.');
      }

      const formattedOptions = rounds.map(round => ({
        value: round.roundId,
        display: formatDateTime(round.performanceDateTime),
        roundData: round
      }));
      setDateTimeOptions(formattedOptions);
    } catch (err) {
      setError('회차 정보를 불러오는데 실패했습니다.');
      console.error('Error fetching rounds:', err);
    } finally {
      setLoading(false);
    }
  };

  // 티켓 종류 조회
  const fetchTicketTypes = async () => {
    if (!amateurShowId) return;

    setLoading(true);
    try {
      const response = await ticketingAPI.getTicketTypes(amateurShowId);
      // API 응답이 { result: [...] } 형태이므로 result 추출
      const tickets = response.result || response;
      
      // 배열인지 확인
      if (!Array.isArray(tickets)) {
        throw new Error('티켓 정보가 올바른 형식이 아닙니다.');
      }
      
      setTicketOptions(tickets);
    } catch (err) {
      setError('티켓 종류를 불러오는데 실패했습니다.');
      console.error('Error fetching ticket types:', err);
    } finally {
      setLoading(false);
    }
  };

  // 날짜/시간 포맷팅 함수
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}.${month}.${day} (${weekday}) ${hours}:${minutes}`;
  };

  // 날짜/시간 선택 핸들러
  const handleDateTimeChange = (roundId) => {
    const selectedOption = dateTimeOptions.find(option => option.value === roundId);
    if (selectedOption) {
      setSelectedRound(selectedOption.roundData);
      setDateTime(selectedOption.display);
    }
  };

  // 최대 단계 수 계산
  const getMaxSteps = () => 5;

  // 현재 단계의 컨텐츠 타입 반환
  const getCurrentStepContent = () => {
    if (!isPC) {
      switch(step) {
        case 1: return 'datetime';
        case 2:
        case 3:
        case 4: return 'options';
        case 5: return 'complete';
        default: return 'datetime';
      }
    } else {
      switch(step) {
        case 1: return 'datetime';
        case 2: return 'discount';
        case 3: return 'delivery';
        case 4: return 'payment';
        case 5: return 'complete';
        default: return 'datetime';
      }
    }
  };

  // 다음 버튼 활성화 여부 확인
  useEffect(() => {
    const currentContent = getCurrentStepContent();
    
    switch(currentContent) {
      case 'datetime':
        setNextActive(dateTime && people && selectedRound);
        break;
        
      case 'discount':
        let discountValid = discountType !== null;
        if (discountType === 'standard') {
          discountValid = discountValid && studentId.trim() !== '';
        }
        setNextActive(discountValid);
        break;
        
      case 'delivery':
        setNextActive(deliveryType !== null);
        break;
        
      case 'payment':
        let paymentValid = paymentType !== null;
        if (paymentType === 'bank') {
          paymentValid = paymentValid && depositorName.trim() !== '';
        }
        if (paymentType === 'pay') {
          paymentValid = paymentValid && termsAgreed;
        }
        setNextActive(paymentValid);
        break;
        
      case 'options':
        let optionsValid = discountType !== null && paymentType !== null && deliveryType !== null;
        if (discountType === 'standard') {
          optionsValid = optionsValid && studentId.trim() !== '';
        }
        if (paymentType === 'bank') {
          optionsValid = optionsValid && depositorName.trim() !== '';
        }
        if (paymentType === 'pay') {
          optionsValid = optionsValid && termsAgreed;
        }
        setNextActive(optionsValid);
        break;
        
      default:
        setNextActive(false);
    }
  }, [step, dateTime, people, selectedRound, discountType, paymentType, deliveryType, studentId, depositorName, termsAgreed, isPC]);

  // 다음 단계로 이동
  const goToNextStep = () => {
    const currentContent = getCurrentStepContent();
    if (nextActive) {
      if (currentContent === 'options') setStep(5);
      else setStep(step + 1);
    }
  };

  // 이전 단계로 이동
  const goToPreviousStep = () => {
    const currentContent = getCurrentStepContent();
    if (step > 1) {
      if (currentContent === 'options') setStep(1);
      else setStep(step - 1);
    }
  };

  // 티켓 예매 실행
  const reserveTicket = async () => {
    if (!selectedRound || !selectedTicket || !people) {
      setError('필수 정보가 누락되었습니다.');
      return;
    }

    setLoading(true);
    try {
      const requestData = {
        quantity: people
      };

      const response = await ticketingAPI.reserveTicket(
        amateurShowId,
        selectedRound.roundId,
        selectedTicket.amateurTicketId,
        requestData
      );

      // 예매 완료 후 완료 페이지로 이동
      setStep(5);
      return response;
    } catch (err) {
      setError('예매 처리 중 오류가 발생했습니다.');
      console.error('Error reserving ticket:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 예약 정보 확인 화면으로 이동
  const viewReservation = () => {
    window.alert('예약 정보 확인 화면으로 이동합니다.');
  };

  // 결제 정보 계산
  const calculatePayment = () => {
    if (!selectedTicket) {
      return {
        basePrice: 0,
        discountAmount: 0,
        deliveryFee: 0,
        totalPrice: 0
      };
    }

    const basePrice = selectedTicket.price;
    const discountAmount = discountType === 'standard' ? 3000 : 0; // 홍대생 할인
    const deliveryFee = 0; // 현장수령은 0원
    
    return {
      basePrice,
      discountAmount,
      deliveryFee,
      totalPrice: basePrice - discountAmount + deliveryFee
    };
  };

  // 컴포넌트 마운트 시 초기 데이터 로드
  useEffect(() => {
    if (amateurShowId) {
      fetchShowInfo();
      fetchRounds();
      fetchTicketTypes();
    }
  }, [amateurShowId]);

  return {
    // 상태
    dateTimeOptions,
    ticketOptions,
    step,
    dateTime,
    people,
    discountType,
    paymentType,
    deliveryType,
    nextActive,
    eventInfo,
    studentId,
    depositorName,
    termsAgreed,
    isPC,
    loading,
    error,
    selectedRound,
    selectedTicket,
    
    // 액션
    setDateTime: handleDateTimeChange,
    setPeople,
    setDiscountType,
    setPaymentType,
    setDeliveryType,
    goToNextStep,
    goToPreviousStep,
    reserveTicket,
    viewReservation,
    setStudentId,
    setDepositorName,
    setTermsAgreed,
    setSelectedTicket,
    
    // 유틸리티
    calculatePayment,
    getCurrentStepContent,
    getMaxSteps,
  };
};

export default useTicketing;