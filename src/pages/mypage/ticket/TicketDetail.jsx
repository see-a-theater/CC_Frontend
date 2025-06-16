import { useNavigate } from 'react-router-dom';
import TopBar from '../../../components/TopBar';
import styled from 'styled-components';
function TicketDetail() {
	const navigate = useNavigate();
	function onPrev() {
		navigate(-1);
	}
	const ticketHeaders = ['예매일', '장소', '관람일시', '상태', '취소가능일시'];
	const details = {
		title: '실종',
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
	const { bookingDate, place, performanceDate, status, cancelDeadline } =
		details;

	const header = ticketHeaders;
	return (
		<>
			<TopBar onPrev={onPrev}>티켓 예매 내역</TopBar>
			<Wrapper>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								width: '157px',
								height: '220px',
								background: 'gainsboro',
								marginBottom: '20px',
							}}
						>
							포스터
						</div>
						<h1>실종 2매</h1>
						<p className="color-pink">예매 완료</p>
					</div>
				</div>

				<Table>
					<tbody>
						<tr>
							<th>예매일</th>
							<td>{bookingDate}</td>
						</tr>
						<tr>
							<th>장소</th>
							<td>{place}</td>
						</tr>
						<tr>
							<th>관람일시</th>
							<td>{performanceDate}</td>
						</tr>
						<tr>
							<th>상태</th>
							<td>{status}</td>
						</tr>
						<tr>
							<th>취소가능일시</th>
							<td>
								{cancelDeadline.deadline}
								{cancelDeadline?.extra?.map((e) => (
									<div style={{ display: 'flex' }}>
										<span>{e.date}</span>
										<span className="color-pink">{e.fee}</span>
									</div>
								))}
							</td>
						</tr>
					</tbody>
				</Table>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '8px',
						marginBottom: '34px',
					}}
				>
					<h3>참고 사항</h3>
					<span>예매 수수료는 예매일 이후 취소 시에는 환불되지 않습니다.</span>
					<span>
						단, 예매 당일 밤 12시 이전 취소 시에는 취소 수수료가 없음 (취소
						기한내에 한함)
					</span>
					<span>
						취소수수료는 취소시점에 따라 달라지며, 취소 진행 시 확인 하실 수
						있습니다.
					</span>
				</div>
				<div className="checkbox" style={{ marginBottom: '60px' }}>
					<label>
						취소 수수료를 확인하였으며, 이에 동의합니다
						<input type="checkbox" />
					</label>
				</div>
				<button className="btn-light">예매 취소</button>
			</Wrapper>
		</>
	);
}
export default TicketDetail;

const Wrapper = styled.div`
	padding: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;

	h1 {
		/* 가장 큰 글씨: 극 제목 */
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: 16px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		letter-spacing: -0.48px;
		margin-bottom: 16px;
	}
	h3 {
		/* th와 같은 수준의 글씨 */
		color: var(--color-gray-400, #929292);
		font-size: 14px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		letter-spacing: -0.42px;
	}
	p {
		/* 일반 글씨 */
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.42px;
	}
	span {
		/* 작은 회색글씨를 모두 span으로 씀 */
		color: var(--color-gray-400, #929292);

		/* Web-app/body-10-bold */
		font-family: 'NanumSquare Neo OTF';
		font-size: 10px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.3px;
		display: block;
	}
`;
const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	display: flex;
	gap: 8px;
	font-size: 14px;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.42px;
	margin-top: 27px;
	th {
		width: 104px;
		text-align: left;
		vertical-align: top;
		color: var(--color-gray-400, #929292);
		font-weight: 800;
		padding: 10px 0px;
	}

	td {
		color: #000;
		font-weight: 700;
		padding: 10px 0px;
		display: flex;
		flex-direction: column;
		gap: 12px;

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
	font-size: 16px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
	letter-spacing: -0.48px;
	margin-bottom: 16px;
`;
