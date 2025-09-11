import styled from 'styled-components';
import HomeIconMenu from '@/components/HomeIconMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import useCustomFetch from '../../utils/hooks/useAxios';
function MyPage() {
	const navigate = useNavigate();
	const role = localStorage.getItem('role');

	return (
		<>
			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} selectedMenu="mypage" />
			</SideMenuWrapper>
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	);
}
export default MyPage;

const SideMenuWrapper = styled.div`
	width: 101px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	flex-shrink: 0;
	display: none;
	background: ${({ theme }) => theme.colors.grayWhite};
	@media (min-width: 768px) {
		display: block;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex: 1;

	@media (min-width: 768px) {
		padding-left: 101px;
	}
`;
