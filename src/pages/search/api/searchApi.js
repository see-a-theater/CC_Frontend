
import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 요청 인터셉터 - 토큰 자동 추가
api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_APP_ACCESS_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 응답 인터셉터 - 에러 처리
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// 검색 API
export const searchShows = async (keyword, page = 0, size = 20) => {
  try {
    const response = await api.get('/search', {
      params: {
        keyword,
        page,
        size
      }
    });
    return response.data;
  } catch (error) {
    console.error('검색 API 에러:', error);
    throw error;
  }
};

// 임박한 공연 목록
export const getShowIncoming = async () => {
  try {
    const response = await api.get('/amateurs/incoming');
    return response.data;
  } catch (error) {
    console.error('임박한 공연 API 에러:', error);
    throw error;
  }
};

// 현재 진행중인 공연 목록
export const getOngoingShows = async (page = 0, size = 20) => {
  try {
    const response = await api.get('/amateurs/ongoing', {
      params: {
        page,
        size
      }
    });
    return response.data;
  } catch (error) {
    console.error('진행중 공연 API 에러:', error);
    throw error;
  }
};

export default api;