import ChevronLeft from '@/assets/icons/chevronLeft.svg?react';
import styled from 'styled-components';
import SearchOptionBar from '../../../components/Admin/SearchOptionBar';
import {
	TablePageWrapper,
	Content,
	OptionBarWrapper,
} from '../STYLE/admin-detail.style';
const requests = [
	{
		id: 'diana8843',
		name: '전시연',
		email: 'junsiyeon123654@gmail.com',
		phone: '010-1234-1234',
		title: '실종',
		status: '등록',
		requestDate: '2025.01.05 / 14:15',
	},
];
const request = requests[0];

function RegisterRequestDetail() {
	return (
		<>
			<TablePageWrapper>
				<OptionBarWrapper>
					<h1>등록 요청 관리</h1>
					<SearchOptionBar />
				</OptionBarWrapper>

				<Content>
					<div
						style={{
							display: 'flex',
							flex: '1',
							justifyContent: 'flex-start',
							marginBottom: '26px',
						}}
					>
						<h1>기본 정보</h1>
					</div>

					<table>
						<tbody>
							<tr>
								<th>아이디</th>
								<td>{request.id}</td>
							</tr>
							<tr>
								<th>이름</th>
								<td>{request.name}</td>
							</tr>
							<tr>
								<th>번호</th>
								<td>{request.phone}</td>
							</tr>
							<tr>
								<th>E-mail</th>
								<td>{request.email}</td>
							</tr>
							<tr>
								<th>연극명</th>
								<td>{request.title}</td>
							</tr>
							<tr>
								<th>등록일</th>
								<td>{request.requestDate}</td>
							</tr>
							<tr>
								<th>등록 여부</th>
								<td>{request.status}</td>
							</tr>
						</tbody>
					</table>
					<div
						style={{
							display: 'flex',
							flex: '1',
							justifyContent: 'flex-end',
							marginTop: '80px',
						}}
					>
						<button className="light">수정하기</button>
					</div>
				</Content>
			</TablePageWrapper>
		</>
	);
}
export default RegisterRequestDetail;
