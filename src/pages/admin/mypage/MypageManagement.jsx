import styled from 'styled-components';
import { Wrapper, Border, Content } from './admin-mypage.style';
import { Outlet } from 'react-router-dom';
import MypageManageAuth from './MypageManageAuth';
import MypageProfileEdit from './MypageProfileEdit';
function MyPageManagement() {
	return (
		<>
			<Wrapper>
				<Border>
					<MypageProfileEdit />
				</Border>
			</Wrapper>
		</>
	);
}
export default MyPageManagement;
