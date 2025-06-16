import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FullScreenMenu from './components/FullScreenMenu';

// 아래는 각 페이지를 담당할 컴포넌트들
import Home from './pages/home/Home';
import SmallTheaterCurrent from './pages/theater/SmallTheaterCurrent';
import SmallTheaterRegister from './pages/register/SmallTheaterRegister';
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
// App.jsx
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
			</Routes>
		</>
	);
}
export default App;
