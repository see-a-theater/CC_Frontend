import { useNavigate } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import TopBarWeb from '@/components/TopBarWeb';
import styled from 'styled-components';
import KakaoRound from '@/assets/icons/KakaoRound.svg?react';
import GoogleRound from '@/assets/icons/GoogleRound.svg?react';
function AccountConnection() {
	const navigate = useNavigate();
	return (
		<AccountConnectionWrapper>
			{/*모바일 상단바*/}
			<div className="only-mobile">
				<TopBar onPrev={() => navigate(-1)}>계정 연결 설정</TopBar>
			</div>
			{/*웹 상단바 */}
			<div className="only-web-flex">
				<TopBarWeb>계정 연결 설정</TopBarWeb>
			</div>
			<Wrapper>
				<ItemGroup>
					<Item>
						<div>
							<KakaoRound />
							<p>카카오</p>
						</div>
						<button>해제</button>
					</Item>
					<Item>
						<div>
							<GoogleRound />
							<p>구글</p>
						</div>
						<button>연결</button>
					</Item>
				</ItemGroup>
			</Wrapper>
		</AccountConnectionWrapper>
	);
}
export default AccountConnection;
const AccountConnectionWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	@media (min-width: 768px) {
		padding: 100px 70px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Wrapper = styled.div`
	padding: 20px;
	@media (min-width: 768px) {
		padding-left: 110px;
	}
`;

const ItemGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const Item = styled.div`
	display: flex;
	height: 44px;
	padding: 8px 20px;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	border-radius: 3px;
	border: 1px solid ${({ theme }) => theme.colors.grayOutline};
	background: ${({ theme }) => theme.colors.grayWhite};

	@media (min-width: 768px) {
		padding: 8px 32px;
		height: 60px;
	}

	& > div {
		display: flex;
		flex-direction: row;
		gap: 12px;
		align-items: center;
	}

	p {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.48px;

		@media (min-width: 768px) {
			font-size: ${({ theme }) => theme.font.fontSize.title16};
		}
	}

	button {
		color: ${({ theme }) => theme.colors.pink600};
		display: flex;
		width: 57px;
		height: 26px;
		padding: 4px 12px;
		align-items: center;
		justify-content: center;
		gap: 12px;
		border-radius: 2px;
		border: 1px solid ${({ theme }) => theme.colors.pink600};
		background: ${({ theme }) => theme.colors.grayWhite};

		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-style: normal;
		line-height: 18px;

		@media (min-width: 768px) {
			width: 72px;
			height: 28px;
			font-size: ${({ theme }) => theme.font.fontSize.body14};
		}
	}
`;
