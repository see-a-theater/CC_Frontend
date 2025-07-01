import styled from 'styled-components';

function PlaysDetail() {
	const play_data = {
		uploader: '홍길동',
		uploaderId: 'HONGID',
		date: '2025-01-09 / 14:50',
		tag: '#극중극 #드라마',
		overview: `1998년 가을, ‘아무 국가기관'의 업무 보조를 하게 된 학생 모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.
                    모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.
                    모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.
                    모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.
                    모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.
                    모두가 동일한 것을 추구하는 사회에서 학생은 적응하지 못한다.`,
		account: '토스 0001-0001-0001-0001',
		contact: '인스타그램 @hongdse_111',
		situation: '확인 전',
	};
	const rows = [
		{ label: '등록자명', value: play_data.uploader },
		{ label: '아이디', value: play_data.uploaderId },
		{ label: '날짜', value: play_data.date },
		{ label: '해시태그', value: play_data.tag },
		{ label: '줄거리', value: play_data.overview },
		{ label: '계좌번호', value: play_data.account },
		{ label: '연락처', value: play_data.contact },
		{ label: '상태', value: play_data.situation },
	];

	return (
		<Container>
			<Sidebar />
			<Content>
				<Table>
					<Title>{'<'} 기본 정보</Title>
					<tbody>
						{rows.map((row, index) => (
							<tr key={index}>
								<th>{row.label}</th>
								<td>{row.value}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<div className="buttons">
					<Button>수정하기</Button>
					<WButton>최종 등록/반려하기</WButton>
				</div>
			</Content>
		</Container>
	);
}

export default PlaysDetail;

const Container = styled.div`
	width: 100vw;
	display: flex;
`;
const Sidebar = styled.div`
	//추후 컴포넌트로 변경 후 삭제
	width: 290px;
	height: 100vh;
	position: fixed;
	padding: 27px 18px;
	background: #8f8e94;
`;
const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 290px;
	padding: 230px;

	.buttons {
		display: flex;
		justify-content: flex-end;
		gap: 20px;
	}
`;

const Title = styled.h2`
	color: #000;
	text-align: left;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	margin-bottom: 26px;
`;
const Table = styled.div`
	width: 600px;
	display: flex;
	margin: 0 auto;
	flex-direction: column;

	border-collapse: collapse;
	th {
		text-align: center;
		width: 120px;
		padding: 6px 20px;
		border: 1px solid #ddd;
		border-left: none;

		color: #8f8e94;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
	}

	td {
		text-align: left;
		width: 480px;
		max-height: 138px;
		overflow-y: auto;
		display: block;

		padding: 6px 20px;
		border: 1px solid #ddd;
		border-right: none;

		color: #424242;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
	}

	margin-bottom: 80px;
`;

const Button = styled.button`
	align-self: flex-end;
	width: 156px;
	height: 38px;
	border-radius: 8px;
	background: var(--color-pink-100, #fff7f5);
    font-size: font-size: ${({ theme }) => theme.font.fontSize.title16};
    font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink600};
`;

const WButton = styled.button`
	align-self: flex-end;
	width: 156px;
	height: 38px;
	border-radius: 8px;
    border: 1px solid var(--color-pink-600, #F67676);
	background: #fff;
    font-size: font-size: ${({ theme }) => theme.font.fontSize.title16};
    font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink600};
`;
