import { useNavigate } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import styled from 'styled-components';
import Poster from '@/assets/images/test-poster2.png';
import TopBarWeb from '@/components/TopBarWeb';
import Select from 'react-select';
import ChevronRight from '@/assets/icons/chevronRight.svg?react';

const details = {
	title: '실종',
	imgSrc: Poster,
	count: 2,
	bookingDate: '2025-01-15',
	place: '홍익대학교 학생회관 3층 소극장',
	performanceDate: '2025-03-21 (금) 14:30 1회',
	status: '예매 진행중',
	cancelDeadline: {
		deadline: '2025-03-20 (목) 17:00 까지',
		extra: [
			{ date: '2025.01.15 ~ 2025.01.22', fee: '없음' },
			{ date: '2025.01.22 ~ 2025.03.11', fee: '장당 5000원' },
			{ date: '2025.03.12 ~ 2025.03.14', fee: '티켓금액의 10%' },
			{ date: '2025.03.15 ~ 2025.03.18', fee: '티켓금액의 20%' },
			{ date: '2025.03.19 ~ 2025.03.20', fee: '티켓 금액의 30%' },
		],
	},
};

function RegisteredDetail() {
	const navigate = useNavigate();
	// 모달창 관련 함수
	/*
	const [showAlert, setShowAlert] = useState(false);
	const handleCancelClick = () => setShowAlert(true);
	const handleCloseAlert = () => setShowAlert(false);
	const handleConfirmCancel = () => {
		console.log('예매 취소 완료');
		setShowAlert(false);
		navigate('cancel/complete');
	};
	*/
	function onPrev() {
		navigate(-1);
	}
	/*
	const onCancelClick = () => {
		navigate('cancel', {
			state: { backgroundLocation: location }, // ✅ 중요!
		});
	};
*/
	const { imgSrc } = details;

	const options = [
		{
			value: '2025.10.03 (목) 17:00',
			label: (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<span style={{ fontWeight: 'bold' }}>1회차</span>
					<span>2025.10.03 (목) 17:00</span>
				</div>
			),
		},
		{
			value: '2025.10.04 (금) 17:00',
			label: (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<span style={{ fontWeight: 'bold' }}>2회차</span>
					<span>2025.10.04 (금) 17:00</span>
				</div>
			),
		},
	];

	//
	return (
		<>
			<MyTicketsWrapper>
				{/*모바일 상단바*/}
				<div className="only-mobile">
					<TopBar onPrev={onPrev}>예매 내역</TopBar>
				</div>
				{/*웹 상단바 */}
				<div className="only-web-flex">
					<TopBarWeb>예매 내역</TopBarWeb>
				</div>
				{/*본문*/}
				<Wrapper>
					{/*웹 포스터*/}
					<div className="only-web">
						<img src={imgSrc} />
					</div>
					{/*티켓 정보 */}
					<DetailWrapper>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								gap: '4px',
								marginBottom: '32px',
							}}
						>
							<h1>실종</h1>
							<ChevronRightGray />
						</div>
						<p style={{ marginBottom: '10px' }}>
							홍익대학교 학생회관 3층 소극장
						</p>
						<p className="color-gray400" style={{ marginBottom: '16px' }}>
							2024.10.03 ~ 2024.10.05
						</p>
						<Hr />
						<Table>
							<tbody>
								<tr>
									<th>날짜</th>
									<th>인원누적</th>
									<th>누적수익</th>
								</tr>
								<tr>
									<td>1회차ㅣ2025.10.03</td>
									<td>2</td>
									<td>2,000</td>
								</tr>
								<tr>
									<td>1회차ㅣ2025.10.03</td>
									<td>2</td>
									<td>2,000</td>
								</tr>
							</tbody>
						</Table>
						셀렉트박스 스타일링 필요
						<Select options={options} />
						<Table>
							<tbody>
								<tr>
									<th>예매자</th>
									<th>인원수</th>
									<th>결제상태</th>
								</tr>
								<tr>
									<td>홍길동</td>
									<td>2</td>
									<td>완료</td>
								</tr>
								<tr>
									<td>홍길동</td>
									<td>2</td>
									<td>완료</td>
								</tr>
							</tbody>
						</Table>
					</DetailWrapper>
				</Wrapper>
			</MyTicketsWrapper>
		</>
	);
}
export default RegisteredDetail;
const ChevronRightGray = styled(ChevronRight)`
	fill: ${({ theme }) => theme.colors.gray400};
	height: 14px;
`;
const Wrapper = styled.div`
	padding: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		gap: clamp(40px, 15vw, 100px);
		padding: 30px 110px;
	}

	h1 {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.72px;
	}

	h3 {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.42px;
	}

	p {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		line-height: normal;
		letter-spacing: -0.48px;
	}

	span {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.body10};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		line-height: normal;
		letter-spacing: -0.3px;
		display: block;
		font-family: 'NanumSquare Neo OTF';
	}

	img {
		max-width: 157px;
		max-height: 220px;
		background: gainsboro;
		margin-bottom: 20px;

		@media (min-width: 768px) {
			max-width: 500px;
			max-height: 700px;
			flex-shrink: 0;
			border-radius: 5px;
		}
	}
`;

const Table = styled.table`
	margin: 32px 0px;

	th {
		width: 580px;
		padding: 8px;
		align-items: center;
		gap: 147px;
		border-radius: 3px;
		background: ${({ theme }) => theme.colors.gray200};
		color: ${({ theme }) => theme.colors.gray500};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		line-height: normal;
		letter-spacing: -0.42px;
	}

	td {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		text-align: center;
		font-style: normal;
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		line-height: normal;
		letter-spacing: -0.48px;
		padding: 12px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
		background: ${({ theme }) => theme.colors.grayWhite};

		span {
			display: block;

			&:nth-child(1) {
				width: 145px;
			}
		}
	}
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.grayMain};
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-style: normal;
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	line-height: normal;
	letter-spacing: -0.48px;
	margin-bottom: 16px;
`;

const MyTicketsWrapper = styled.div`
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

const DetailWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;

	@media (min-width: 768px) {
		max-width: 580px;
		min-width: 480px;
	}
`;

const Hr = styled.div`
	border: none;
	min-height: 1px;
	background-color: ${({ theme }) => theme.colors.gray500};
`;
