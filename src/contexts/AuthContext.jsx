import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState(
		import.meta.env.VITE_DEV_ACCESS_TOKEN || null,
	);

	const login = (token) => {
		setAccessToken(token);
	};

	const logout = () => {
		setAccessToken(null);
	};

	const value = {
		accessToken,
		isAuthenticated: !!accessToken,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth는 AuthProvider 내에서 사용되어야 합니다.');
	}
	return context;
};
