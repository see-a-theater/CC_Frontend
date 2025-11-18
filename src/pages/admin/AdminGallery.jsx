import styled from 'styled-components';
import UserTable from '@/components/Admin/UserTable';
import Search from '@/assets/icons/searchBlack.svg?react';
import { useMemo, useState } from 'react';

import useCustomFetch from '@/utils/hooks/useCustomFetch';

function AdminGallery() {
	function formatDateTime(isoString) {
		if (!isoString) return '';

		const date = new Date(isoString);

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');

		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');

		return `${year}-${month}-${day} / ${hours}:${minutes}`;
	}

	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20;

	const headerRow = {
		title: '소극장 공연 이름',
		date: '사진 등록 날짜',
		id: '아이디',
		manage: '관리',
	};

	const {
		data: gallData,
		error,
		loading,
	} = useCustomFetch(
		`/admin/photoAlbum?page=${currentPage - 1}&size=${itemsPerPage}`,
	);

	console.log('error:', error);
	console.log('loading:', loading);
	console.log('data:', gallData);
	const apiRows = useMemo(() => {
		if (!gallData || !gallData.result) return [];
		return gallData?.result.content.map((item) => ({
			title: item.amateurShowName,
			date: formatDateTime(item.updatedAt),
			id: item.id,
			//id: item.uploaderId? 아이디가 사진 아이디인지, 등록자 아이디인지....
			manage: `/admin/gallery/${item.id}`,
		}));
	}, [gallData]);

	const photo_data = [headerRow, ...apiRows];
	const visibleColumns = ['title', 'date', 'id', 'manage'];

	const totalPages = Math.ceil((photo_data.length - 1) / itemsPerPage);

	const paginatedData = photo_data
		.slice(0, 1)
		.concat(
			photo_data
				.slice(1)
				.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
		);

	return (
		<Container>
			<Content>
				<TableArea>
					<Title>사진첩 관리</Title>
					<div className="serachNadd">
						<SearchInput>
							<input
								type="text"
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value);
									setCurrentPage(1);
								}}
								placeholder="검색어를 입력하세요"
							/>
							<Search width={15} />
						</SearchInput>
						<Button>추가하기</Button>
					</div>
					<UserTable
						data={paginatedData}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
						visibleColumns={visibleColumns}
					/>
				</TableArea>
			</Content>
		</Container>
	);
}

export default AdminGallery;

const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
`;

const TableArea = styled.div`
	padding: 0px 120px 50px 50px;
	width: 100%;

	.serachNadd {
		display: flex;
		justify-content: space-between;
		margin-bottom: 70px;
	}
`;
const Title = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;
const SearchInput = styled.div`
	display: flex;
	align-items: center;
	padding: 0 10px;
	background: #fff;
	width: 360px;
	height: 32px;
	border-radius: 7px;
	border: 1px solid #000;

	input {
		width: 100%;
		border: none;
		outline: none;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
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
