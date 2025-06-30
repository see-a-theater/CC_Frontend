import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FullScreenMenu from './components/FullScreenMenu';

// 아래는 각 페이지를 담당할 컴포넌트들
import Home from './pages/home/Home';
import SmallTheaterCurrent from './pages/theater/SmallTheaterCurrent';
import SmallTheaterRegister from './pages/register/SmallTheaterRegister';
import TicketingPage from './pages/ticketingpage/TicketingPage.jsx';
import Board from './pages/board/Board';
import Gallery from './pages/gallery/Gallery';
import Info from './pages/info/Info';
import MyPage from './pages/mypage/MyPage';
import Logout from './pages/logout/Logout';
import Withdrawal from './pages/withdrawal/Withdrawal';
import MyTickets from './pages/mypage/ticket/MyTickets';
import Detail from './pages/Detail/Detail';
import Playlist from './pages/Detail/Playlist';
import TicketDetail from './pages/mypage/ticket/TicketDetail';
import LikedTheater from './pages/mypage/liked-theater/LikedTheater';
import Production from './pages/production/Production';
import ProdDetail from './pages/production/ProdDetail';
import UploadPic from './pages/production/UploadPic';
import Admin from './pages/admin/Admin.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import RegistrationManagement from './pages/admin/register-request/RegisterRequests.jsx';
import RegisterRequests from './pages/admin/register-request/RegisterRequests.jsx';
import RegisterRequestDetail from './pages/admin/register-request/RegisterRequestDetail.jsx';
import TicketManagement from './pages/admin/tickets/TicketManagement.jsx';
import ReservationManagement from './pages/admin/reservation/ReservationManagement.jsx';
import RefundManagement from './pages/admin/refund/RefundManagement.jsx';
import MyPageManagement from './pages/admin/mypage/MypageManagement.jsx';
import TicketManagementDetail from './pages/admin/tickets/TicketManagementDetail.jsx';
import ReservationManagementDetail from './pages/admin/reservation/ReservationManagementDetail.jsx';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/small-theater/current"
					element={<SmallTheaterCurrent />}
				/>
				<Route
					path="/small-theater/register"
					element={<SmallTheaterRegister />}
				/>
				<Route path="/ticketing" element={<TicketingPage />} />
				<Route path="/board" element={<Board />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/info" element={<Info />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/withdrawal" element={<Withdrawal />} />
				<Route path="/menu" element={<FullScreenMenu />} />
				<Route path="/mypage/tickets" element={<MyTickets />} />
				<Route path="/mypage/tickets/1" element={<TicketDetail />} />
				<Route path="/mypage/liked-theater" element={<LikedTheater />} />
				<Route path="/plays" element={<Playlist />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/production" element={<Production />} />
				<Route path="/production/1" element={<ProdDetail />} />
				<Route path="/production/upload_photo" element={<UploadPic />} />
				<Route path="admin" element={<Admin />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="register-requests" element={<RegisterRequests />} />
					<Route
						path="register-requests/1"
						element={<RegisterRequestDetail />}
					/>
					<Route path="tickets" element={<TicketManagement />} />
					<Route path="tickets/1" element={<TicketManagementDetail />} />
					<Route path="reservations" element={<ReservationManagement />} />
					<Route
						path="reservations/1"
						element={<ReservationManagementDetail />}
					/>
					<Route path="refunds" element={<RefundManagement />} />
					<Route path="mypage" element={<MyPageManagement />} />
				</Route>
			</Routes>
		</>
	);
}
export default App;
