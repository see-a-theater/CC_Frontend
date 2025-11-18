import styled from 'styled-components';
import { Wrapper, Border, Content } from './admin-mypage.style';
function MypageManageAuth() {
	return (
		<div style={{ padding: '18px 22px' }}>
			<Top>
				<h3>비밀번호 인증</h3>
			</Top>
			<Hr />
			<Content>
				<h3>정보를 안전하게 보호하기 위해</h3>
				<h3>
					<span style={{ color: '#F67676' }}>비밀번호를 다시 한 번 확인</span>
					합니다.
				</h3>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						flex: '1',
					}}
				>
					<div
						style={{
							marginTop: '102px',
							display: 'flex',
							flex: '1',
							flexDirection: 'row',
							gap: '14px',
						}}
					>
						<h3>비밀번호</h3>
						<input type="password" />
					</div>
					<div
						style={{
							display: 'flex',
							width: '100%',
							flex: '1',
							justifyContent: 'flex-end',
							marginTop: '10px',
							marginBottom: '83px',
						}}
					>
						<p>확인</p>
					</div>
				</div>
			</Content>
		</div>
	);
}
export default MypageManageAuth;

const Top = styled.div``;

const Hr = styled.div`
	height: 1px;
	background: black;
	margin-top: 15px;
	margin-bottom: 43px;
`;
