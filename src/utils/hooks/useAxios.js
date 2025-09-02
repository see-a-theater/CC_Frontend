import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/utils/apis/axiosInstance';
import { useAuth } from '@/contexts/AuthContext';

const REFRESH_TOKEN_URL = `${import.meta.env.VITE_APP_API_URL}//auth/refresh`;

const useAxios = () => {
	const { accessToken, login, logout } = useAuth();
	const navigate = useNavigate();

	const requestInterceptor = useCallback(
		(config) => {
			if (accessToken) {
				config.headers.Authorization = `Bearer ${accessToken}`;
			}
			return config;
		},
		[accessToken],
	);

	const responseInterceptor = useCallback(
		async (error) => {
			const originalRequest = error.config;

			// 401 에러이고, 재시도가 아닌 경우
			if (error.response?.status === 401 && !originalRequest._retry) {
				originalRequest._retry = true;

				try {
					// 백엔드로 재발급 요청
					const response = await axiosInstance.post(REFRESH_TOKEN_URL, {});

					const newAccessToken = response.data.accessToken;
					if (newAccessToken) {
						login(newAccessToken);
						originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

						return axiosInstance(originalRequest);
					} else {
						console.error('새로운 Access Token을 발급 실패');
						logout();
						navigate('/login', { replace: true });
						return Promise.reject(error);
					}
				} catch (refreshError) {
					console.error('Refresh Token 요청 실패:', refreshError);
					logout();
					navigate('/login', { replace: true });
					return Promise.reject(refreshError);
				}
			}

			// 다른 에러거나 이미 재시도된 401 에러
			return Promise.reject(error);
		},
		[login, logout, navigate],
	);

	useEffect(() => {
		const req = axiosInstance.interceptors.request.use(requestInterceptor);
		const res = axiosInstance.interceptors.response.use(responseInterceptor);

		return () => {
			axiosInstance.interceptors.request.eject(req);
			axiosInstance.interceptors.response.eject(res);
		};
	}, [requestInterceptor, responseInterceptor]);

	return axiosInstance;
};

export default useAxios;
