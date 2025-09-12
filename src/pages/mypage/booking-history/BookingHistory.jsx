import styled from 'styled-components';
import TopBar from '@/components/TopBar';
import TopBarWeb from '@/components/TopBarWeb';
import { useNavigate } from 'react-router-dom';
import Poster from '@/assets/images/test-poster1.png';
function BookingHistory() {
	const navigate = useNavigate();
	return (
		<>
			<BookingHistoryWrapper>
				{/*모바일 상단바*/}
				<div className="only-mobile">
					<TopBar onPrev={() => navigate(-1)}>예매 내역</TopBar>
				</div>
				{/*웹 상단바 */}
				<div className="only-web-flex">
					<TopBarWeb>예매 내역</TopBarWeb>
				</div>
				{/*본문*/}
				<Wrapper>
					<p>4개의 연극</p>
					<CardGroup>
						<Card>
							<img src={Poster} />
							<h3>실종</h3>
							<p>홍익대학교 학생회관 3층 소극장</p>
						</Card>
						<Card>
							<img src={Poster} />
							<h3>실종</h3>
							<p>홍익대학교 학생회관 3층 소극장</p>
						</Card>
						<Card>
							<img src={Poster} />
							<h3>실종</h3>
							<p>홍익대학교 학생회관 3층 소극장</p>
						</Card>
						<Card>
							<img src={Poster} />
							<h3>실종</h3>
							<p>홍익대학교 학생회관 3층 소극장</p>
						</Card>
					</CardGroup>
				</Wrapper>
			</BookingHistoryWrapper>
		</>
	);
}
export default BookingHistory;

const BookingHistoryWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;

	@media (min-width: 768px) {
		padding: 100px 70px;
	}
`;

const Wrapper = styled.div`
	padding: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		gap: clamp(40px, 15vw, 220px);
		padding: 30px 110px;
	}

	& > p {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.body10};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		line-height: normal;
		letter-spacing: -0.3px;
	}
`;

const CardGroup = styled.div`
	margin-top: 24px;
	gap: 20px;
	display: flex;
	flex-wrap: wrap;
`;

const Card = styled.div`
	img {
		display: flex;
		height: 240px;
		width: 172px;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: 8px;
		align-self: stretch;
		border-radius: 3px;
	}

	h3 {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.48px;
		margin-top: 8px;
	}

	p {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.body12};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		line-height: normal;
		letter-spacing: -0.36px;
		margin-top: 10px;
	}
`;
