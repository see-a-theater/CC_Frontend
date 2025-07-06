//import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function UsersDetail() {
	const user_data = {
		id: 'diana8443',
		name: '전시연',
		phone: '010-1234-5678',
		email: 'cc1234@gmail.com',
		birth: '2004-10-26',
		gender: '여',
		address: '서울특별시 와우산로 홍익대학교 홍문관 1층 102호',
	};

	const rows = [
		{ label: '아이디', value: user_data.id },
		{ label: '이름', value: user_data.name },
		{ label: '번호', value: user_data.phone },
		{ label: 'E-mail', value: user_data.email },
		{ label: '생년월일', value: user_data.birth },
		{ label: '성별', value: user_data.gender },
		{ label: '주소', value: user_data.address },
	];

	//const { userId } = useParams();
	//const url = `/admin/users/${userId}`;

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
				<Button>수정하기</Button>
			</Content>
		</Container>
	);
}

export default UsersDetail;

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
