import SearchOptionBar from '@/components/Admin/SearchOptionBar';
import {
	TablePageWrapper,
	Content,
	OptionBarWrapper,
} from '@/pages/admin/STYLE/admin-detail.style';
import { useParams } from 'react-router-dom';
import useCustomFetch from '@/utils/hooks/useCustomFetch';
import { useState } from 'react';
const testRequests = [
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

function RegisterRequestDetail() {
	const { registerId } = useParams();
	const {
		data: fullData,
		loading,
		error,
	} = useCustomFetch(`/admin/amateurShow/${registerId}`);
	const data = fullData?.result || null;

	const [editMode, setEditMode] = useState(false); // 수정 모드 여부
	const [selectedStatus, setSelectedStatus] = useState(null);

	// 수정하기 버튼 눌렀을 때
	const handleEdit = () => {
		setEditMode(true);
		setSelectedStatus(data?.showStatus === 'APPROVED_YET' ? 'NO' : 'YES');
	};

	// 저장하기 버튼 눌렀을 때
	const handleSave = async () => {
		if (!registerId) return;
		try {
			const accessToken = localStorage.getItem('accessToken'); // 토큰 꺼내오기

			const url =
				selectedStatus === 'YES'
					? `https://api.seeatheater.site/admin/approval/${registerId}/approve`
					: `https://api.seeatheater.site/admin/approval/${registerId}}/reject`;

			const res = await fetch(url, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (!res.ok) {
				throw new Error(`서버 오류: ${res.status}`);
			}

			const result = await res.json();
			console.log('저장 성공', result);

			alert('저장되었습니다.');
			setEditMode(false);
		} catch (err) {
			console.error('저장 실패:', err);
			alert('저장 실패');
		}
	};

	function formatDateTime(isoString) {
		const d = new Date(isoString);

		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');
		const hours = String(d.getHours()).padStart(2, '0');
		const minutes = String(d.getMinutes()).padStart(2, '0');

		return `${year}.${month}.${day} / ${hours}:${minutes}`;
	}

	const { registerId } = useParams();
	const {
		data: fullData,
		loading,
		error,
	} = useCustomFetch(`/admin/amateurShow/${registerId}`);
	const data = fullData?.result || null;

	const [editMode, setEditMode] = useState(false); // 수정 모드 여부
	const [selectedStatus, setSelectedStatus] = useState(null);

	// 수정하기 버튼 눌렀을 때
	const handleEdit = () => {
		setEditMode(true);
		setSelectedStatus(data?.showStatus === 'APPROVED_YET' ? 'NO' : 'YES');
	};

	// 저장하기 버튼 눌렀을 때
	const handleSave = async () => {
		if (!registerId) return;
		try {
			const accessToken = localStorage.getItem('accessToken'); // 토큰 꺼내오기

			const url =
				selectedStatus === 'YES'
					? `https://api.seeatheater.site/admin/approval/${registerId}/approve`
					: `https://api.seeatheater.site/admin/approval/${registerId}}/reject`;

			const res = await fetch(url, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (!res.ok) {
				throw new Error(`서버 오류: ${res.status}`);
			}

			const result = await res.json();
			console.log('저장 성공', result);

			alert('저장되었습니다.');
			setEditMode(false);
		} catch (err) {
			console.error('저장 실패:', err);
			alert('저장 실패');
		}
	};

	function formatDateTime(isoString) {
		const d = new Date(isoString);

		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');
		const hours = String(d.getHours()).padStart(2, '0');
		const minutes = String(d.getMinutes()).padStart(2, '0');

		return `${year}.${month}.${day} / ${hours}:${minutes}`;
	}

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
								<td>{data?.showId}</td>
								<td>{data?.showId}</td>
							</tr>
							<tr>
								<th>이름</th>
								<td>{data?.performerName}</td>
								<td>{data?.performerName}</td>
							</tr>
							{/*
								<tr>
							{/*
								<tr>
								<th>번호</th>
								<td>{data?.phone}</td>
								<td>{data?.phone}</td>
							</tr>
							 */}
							*/}
							<tr>
								<th>E-mail</th>
								<td>{data?.performerEmail}</td>
								<td>{data?.performerEmail}</td>
							</tr>
							<tr>
								<th>연극명</th>
								<td>{data?.showName}</td>
								<td>{data?.showName}</td>
							</tr>
							<tr>
								<th>등록일</th>
								<td>{formatDateTime(data?.createdAt)}</td>
								<td>{formatDateTime(data?.createdAt)}</td>
							</tr>
							<tr>
								<th>등록 여부</th>
								<td>
									<label>
										<input
											type="radio"
											name="approved"
											value="YES"
											checked={
												editMode
													? selectedStatus === 'YES'
													: data?.showStatus !== 'APPROVED_YET'
											}
											disabled={!editMode}
											onChange={(e) => setSelectedStatus(e.target.value)}
										/>
										예
									</label>
									<label style={{ marginLeft: '12px' }}>
										<input
											type="radio"
											name="approved"
											value="NO"
											checked={
												editMode
													? selectedStatus === 'NO'
													: data?.showStatus === 'APPROVED_YET'
											}
											disabled={!editMode}
											onChange={(e) => setSelectedStatus(e.target.value)}
										/>
										아니오
									</label>
								</td>
								<td>
									<label>
										<input
											type="radio"
											name="approved"
											value="YES"
											checked={
												editMode
													? selectedStatus === 'YES'
													: data?.showStatus !== 'APPROVED_YET'
											}
											disabled={!editMode}
											onChange={(e) => setSelectedStatus(e.target.value)}
										/>
										예
									</label>
									<label style={{ marginLeft: '12px' }}>
										<input
											type="radio"
											name="approved"
											value="NO"
											checked={
												editMode
													? selectedStatus === 'NO'
													: data?.showStatus === 'APPROVED_YET'
											}
											disabled={!editMode}
											onChange={(e) => setSelectedStatus(e.target.value)}
										/>
										아니오
									</label>
								</td>
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
						{editMode ? (
							<button className="primary" onClick={handleSave}>
								저장하기
							</button>
						) : (
							<button className="light" onClick={handleEdit}>
								수정하기
							</button>
						)}
						{editMode ? (
							<button className="primary" onClick={handleSave}>
								저장하기
							</button>
						) : (
							<button className="light" onClick={handleEdit}>
								수정하기
							</button>
						)}
					</div>
				</Content>
			</TablePageWrapper>
		</>
	);
}
export default RegisterRequestDetail;
