import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Search from '@/assets/icons/searchBlack.svg?react';
import SearchBg from '@/assets/icons/searchBlackBg.svg?react';

function PlaysDetail() {
	const { playId } = useParams();
	console.log(playId);

	const play_data = {
		title: '실종',
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

	const [isEditing, setIsEditing] = useState(false);
	const [editedData, setEditedData] = useState(play_data);

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	const goReview = () => {
		navigate(`/admin/plays/${playId}/review`, {
			state: { playId: playId },
		});
	};

	const labelMap = {
		title: '소극장 공연 이름',
		date: '날짜/시간',
		uploader: '등록자명',
	};

	const [searchTerm, setSearchTerm] = useState('');
	const [visibleColumns, setVisibleColumns] = useState([
		'title',
		'uploader',
		'uploaderId',
		'date',
		'tag',
		'overview',
		'account',
		'contact',
		'situation',
	]);

	const handleColumnToggle = (column) => {
		setVisibleColumns((prev) =>
			prev.includes(column)
				? prev.filter((c) => c !== column)
				: [...prev, column],
		);
	};

	{
		/*const filteredRows = useMemo(() => {
		return rows.filter(
			(row) =>
				visibleColumns.includes(getKeyByLabel(row.label)) &&
				row.value.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [searchTerm, visibleColumns]); */
	}

	function getKeyByLabel(label) {
		const map = {
			등록자명: 'uploader',
			아이디: 'uploaderId',
			날짜: 'date',
			해시태그: 'tag',
			줄거리: 'overview',
			계좌번호: 'account',
			연락처: 'contact',
			상태: 'situation',
		};
		return map[label];
	}

	return (
		<Container>
			<SectionTitle>소극장 공연 관리</SectionTitle>
			<FilterArea>
				<SearchInput>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Search width={15} />
				</SearchInput>
				<div className="checkboxArea">
					{Object.entries(labelMap).map(([key, label]) => (
						<label key={key}>
							<input
								type="checkbox"
								checked={visibleColumns.includes(key)}
								onChange={() => handleColumnToggle(key)}
							/>
							{label}
						</label>
					))}
					<SearchBg />
				</div>
			</FilterArea>
			<Content>
				<Table>
					<Title onClick={goBack}>
						{'<'} {play_data.title}
					</Title>
					<tbody>
						{rows.map((row, index) => {
							const key = getKeyByLabel(row.label);
							const value = editedData[key];

							return (
								<tr key={index}>
									<th>{row.label}</th>
									<td>
										{isEditing ? (
											key === 'overview' ? (
												<TextArea
													value={value}
													onChange={(e) =>
														setEditedData((prev) => ({
															...prev,
															[key]: e.target.value,
														}))
													}
												/>
											) : (
												<Input
													type="text"
													value={value}
													onChange={(e) =>
														setEditedData((prev) => ({
															...prev,
															[key]: e.target.value,
														}))
													}
												/>
											)
										) : (
											<div>{value}</div>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<div className="buttons">
					{isEditing ? (
						<PButton onClick={() => setIsEditing(false)}> 적용하기 </PButton>
					) : (
						<>
							<Button onClick={() => setIsEditing(true)}>수정하기</Button>
							<WButton onClick={goReview}>최종 등록/반려하기</WButton>
						</>
					)}
				</div>
			</Content>
		</Container>
	);
}

export default PlaysDetail;

const Container = styled.div`
	width: 100vw;
	display: flex;
    flex-direction: column;
    padding: 50px; 120px; 100px 50px;
`;
const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

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
	background: ${({ theme }) => theme.colors.pink100};
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink600};
`;

const WButton = styled.button`
	align-self: flex-end;
	width: 156px;
	height: 38px;
	border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.pink600};

	background: ${({ theme }) => theme.colors.grayWhite};
    font-size: font-size: ${({ theme }) => theme.font.fontSize.title16};
    font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink600};
`;
const PButton = styled.button`
	align-self: flex-end;
	width: 156px;
	height: 38px;
	border-radius: 8px;

	background: ${({ theme }) => theme.colors.pink600};
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.grayWhite};
`;
const SectionTitle = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;
const FilterArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;

	.checkboxArea {
		display: flex;
		align-items: center;
		gap: 18px;
	}
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
const Input = styled.input`
	width: 100%;
	padding: 6px 8px;
	font-size: 16px;
	font-family: inherit;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const TextArea = styled.textarea`
	width: 100%;
	min-height: 100px;
	padding: 6px 8px;
	font-size: 16px;
	font-family: inherit;
	border: 1px solid #ccc;
	border-radius: 4px;
	resize: vertical;
`;
