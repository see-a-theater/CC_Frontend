

const API_BASE_URL = import.meta.env.VITE_APP_SERVER_URL;
const ACCESS_TOKEN = import.meta.env.VITE_APP_ACCESS_TOKEN;

// API 요청 헤더 설정
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${ACCESS_TOKEN}`
});

// API 요청 함수
const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: getHeaders(),
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// 예매 관련 API 서비스
export const ticketingAPI = {
  // 공연 간략 정보 조회
  getShowSimple: async (amateurShowId) => {
    return await apiRequest(`/tickets/${amateurShowId}/showSimple`);
  },

  // 회차(날짜) 선택 정보 조회
  getShowRounds: async (amateurShowId) => {
    return await apiRequest(`/tickets/${amateurShowId}/selectRound`);
  },

  // 티켓 종류 조회
  getTicketTypes: async (amateurShowId) => {
    return await apiRequest(`/tickets/${amateurShowId}/selectTicket`);
  },

  // 티켓 예매
  reserveTicket: async (amateurShowId, amateurRoundId, amateurTicketId, requestData) => {
    return await apiRequest(
      `/tickets/${amateurShowId}/reserve?amateurRoundId=${amateurRoundId}&amateurTicketId=${amateurTicketId}`,
      {
        method: 'POST',
        body: JSON.stringify(requestData)
      }
    );
  },

  // 카카오페이 결제 준비
  prepareKakaoPayment: async (ticketId) => {
    return await apiRequest(
      `/kakaoPay/ready?ticketId=${ticketId}`,
      {
        method: 'POST'
      }
    );
  }  
};

export default ticketingAPI;