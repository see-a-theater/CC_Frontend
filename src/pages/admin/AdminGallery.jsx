import styled from 'styled-components';
import UserTable from '@/components/Admin/UserTable';
import Search from '@/assets/icons/searchBlack.svg?react';

function Users() {
	return (
		<Container>
			<Top>
				<Search />
			</Top>
			<Content>
				<Sidebar />
				<TableArea>
					<Title>사진첩 관리</Title>
					<div className="serachNadd">
						<SearchInput>
							<input />
						</SearchInput>
						<Button>추가하기</Button>
					</div>
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

	.serachNadd {
		display: flex;
		justify-content: space-between;
	}
`;
const Title = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;
const SearchInput = styled.div`
	input {
		padding: 6px 10px;
		width: 360px;
		border: 1px solid #ccc;
		border-radius: 7px;
	}
`;

const Button = styled.button`
	padding: 8px 20px;
	border-radius: 3px;
	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.normal};
	color: ${({ theme }) => theme.colors.grayWhite};
	background-color: ${({ theme }) => theme.colors.pink600};
`;
