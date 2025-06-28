import styled from 'styled-components';
import UserTable from '@/components/Admin/UserTable';
import Search from '@/assets/icons/searchBlack.svg?react';

function Users() {
	const user_data = [
		{
			id: '아이디',
			name: '이름',
			email: 'E-mail',
			number: '번호',
			gender: '성별',
			manage: '관리',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
		{
			id: 'cc1234',
			name: '전시연',
			email: 'cc1234@gmail.com',
			number: '010-1234-5567',
			gender: '여',
			manage: ' ',
		},
	];

	return (
		<Container>
			<Top>
				<Search />
			</Top>
			<Content>
				<Sidebar />
				<TableArea>
					<Title>사용자 관리</Title>
					<UserTable data={user_data} />
				</TableArea>
			</Content>
		</Container>
	);
}

export default Users;

const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
`;
const Top = styled.div`
	height: 108px;
	display: flex;
	justify-content: flex-end;
	padding: 40px 110px;
`;

const Content = styled.div`
	width: 100%;
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
const TableArea = styled.div`
	margin-left: 290px;
	padding: 0px 120px 50px 50px;
	width: 100%;
`;
const Title = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
    margin-bottom: 15px;
`;
