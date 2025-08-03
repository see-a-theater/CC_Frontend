import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeIconMenu from '@/components/HomeIconMenu';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ChevronUp from '@/assets/icons/ChevronUpWhite.svg?react';
import ChevronDown from '@/assets/icons/ChevronDown.svg?react';
import Search from '@/assets/icons/SearchBlack.svg?react';
function Admin() {
	const navigate = useNavigate();
	const role = localStorage.getItem('role');

	const [selectedMenu, setSelectedMenu] = useState('dashboard');
	const [openSubMenu, setOpenSubMenu] = useState(false);
	const handleMenuClick = (menu, path) => {
		setSelectedMenu(menu);
		navigate(path);
	};
	return (
		<>
			<Top>
				<h1>MUIT</h1>
				<Search />
			</Top>
			<SideMenuWrapper>
				<Menu>
					<li
						className={selectedMenu === 'dashboard' ? 'selected' : ''}
						onClick={() => handleMenuClick('dashboard', '/admin/dashboard')}
					>
						대쉬보드
					</li>
					<li
						className={selectedMenu === 'users' ? 'selected' : ''}
						onClick={() => handleMenuClick('users', '/admin/users')}
					>
						사용자 관리
					</li>
					<li
						className={selectedMenu === 'gallery' ? 'selected' : ''}
						onClick={() => handleMenuClick('gallery', '/admin/gallery')}
					>
						사진첩 관리
					</li>
					<li
						className={selectedMenu === 'performances' ? 'selected' : ''}
						onClick={() => {
							//setOpenSubMenu(!openSubMenu);
							handleMenuClick('performances', '/admin/plays');
						}}
					>
						소극장 공연 관리
						{!openSubMenu ? (
							<ChevronUp
								style={{
									transform: 'rotate(180deg)',
									transition: 'transform 0.3s',
								}}
								onClick={() => {
									setOpenSubMenu(!openSubMenu);
								}}
							/>
						) : (
							<ChevronUp
								style={{ transition: 'transform 0.3s' }}
								onClick={() => {
									setOpenSubMenu(!openSubMenu);
								}}
							/>
						)}
					</li>
					{openSubMenu && (
						<SubUl>
							<SubLi
								onClick={() =>
									handleMenuClick(
										'register-requests',
										'/admin/register-requests',
									)
								}
								className={
									selectedMenu === 'register-requests' ? 'selected' : ''
								}
							>
								등록 요청 관리
							</SubLi>
							<SubLi
								onClick={() => handleMenuClick('tickets', '/admin/tickets')}
								className={selectedMenu === 'tickets' ? 'selected' : ''}
							>
								소극장 티켓 관리
							</SubLi>
							<SubLi
								onClick={() =>
									handleMenuClick('reservations', '/admin/reservations')
								}
								className={selectedMenu === 'reservations' ? 'selected' : ''}
							>
								예약 내역 관리
							</SubLi>
							<SubLi
								onClick={() => handleMenuClick('refunds', '/admin/refunds')}
								className={selectedMenu === 'refunds' ? 'selected' : ''}
							>
								환불 내역 관리
							</SubLi>
						</SubUl>
					)}

					<li
						className={selectedMenu === 'board' ? 'selected' : ''}
						onClick={() => handleMenuClick('board', '/admin/board')}
					>
						게시판 관리
					</li>
					<li
						className={selectedMenu === 'inquiry' ? 'selected' : ''}
						onClick={() => handleMenuClick('inquiry', '/admin/inquiry')}
					>
						문의
					</li>
					<li
						className={selectedMenu === 'mypage' ? 'selected' : ''}
						onClick={() => handleMenuClick('mypage', '/admin/mypage')}
					>
						마이페이지
					</li>
				</Menu>
			</SideMenuWrapper>
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	);
}
export default Admin;
const Top = styled.div`
	background: ${({ theme }) => theme.colors.grayWhite};
	position: fixed;
	display: flex;
	width: 100%;
	height: 108px;
	z-index: 5;
	padding: 24px 110px;
	align-items: center;
	justify-content: space-between;
`;
const SideMenuWrapper = styled.div`
	width: 290px;
	height: 100vh;
	position: fixed;
	padding: 140px 42px 27px 18px;
	top: 0;
	left: 0;
	flex-shrink: 0;
	display: none;
	background: #8f8e94;
	z-index: 1;
	@media (min-width: 768px) {
		display: block;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	list-style: none;

	@media (min-width: 768px) {
		padding-left: 290px;
		padding-top: 108px;
	}
`;

const Menu = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	color: #fff6f6;
	font-family: Pretendard;
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-style: normal;
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	line-height: 25px;
	gap: 14px;

	& > li {
		width: 160px;
		height: 36px;
		flex-shrink: 0;
		border-radius: 4px;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 4px 16px 7px 12px;
		gap: 8px;

		&.selected {
			background: #828185;
		}
	}
`;

const SubLi = styled.li`
	width: 150px;
	height: 36px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	padding: 4px 16px;
	cursor: pointer;

	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.regular};

	&.selected {
		background: #828185;
	}
`;

const SubUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;
	list-style: none;
	margin-left: 10px;
`;
