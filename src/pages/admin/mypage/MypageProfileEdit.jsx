import styled from 'styled-components';
import { Wrapper, Border, Content } from './admin-mypage.style';
function MypageProfileEdit() {
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<SideMenu>
				<h1>관리자</h1>
				<Items>
					<h3>정보 수정</h3>
					<h3>결제수단 관리</h3>
				</Items>
			</SideMenu>
			<Content>
				<Form>
					<h3 style={{ marginBottom: '36px' }}>비밀번호 변경</h3>
					<InputGroup style={{ marginBottom: '30px' }}>
						<input type="password" />
						<p>8~20자 이상 입력</p>
						<p>영문, 숫자, 특수문자 포함</p>
					</InputGroup>
					<InputGroup>
						<input type="password" />
						<p>동일한 비밀번호 입력</p>
					</InputGroup>
				</Form>
				<div style={{ display: 'flex', flex: '1', justifyContent: 'flex-end' }}>
					<button style={{ marginBottom: ' 46px' }}>확인</button>
				</div>
			</Content>
		</div>
	);
}
export default MypageProfileEdit;

const SideMenu = styled.div`
	width: 160px;
	border-right: 1px solid black;
	padding: 26px 20px;

	h1 {
		color: #8f8e94;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	h3 {
		color: #555;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 25px; /* 156.25% */
	}
`;

const Form = styled.form`
	padding-top: 94px;
	margin-bottom: 133px;
	input {
		width: 352px;
		height: 28px;
		flex-shrink: 0;
	}
`;

const Items = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	margin-top: 37px;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;
