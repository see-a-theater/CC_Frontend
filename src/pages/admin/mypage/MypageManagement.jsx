import { Wrapper, Border, Content } from './admin-mypage.style';
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
