//yarn add react-select
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getPresignedUrl } from '@/utils/apis/getPresignedUrl';
import { uploadImageToS3 } from '@/utils/apis/uploadImageToS3';
import styled from 'styled-components';
import Select from 'react-select';

import ImageUploadBox from '@/components/ImageUploadBox';
import TopBar from '@/components/TopBar';
import Modal from '@/components/Production/Modal';
import CalendarPeriod from '@/components/CalendarPeriod';

import ChevronDown from '@/assets/icons/chevronDownGrey.svg?react';

function UploadPic() {
	const data = [
		{ title: '실종', date: '25.04.25~25.04.27' },
		{ title: '카포네 트릴로지', date: '25.05.01~25.05.03' },
		{ title: '킬링시저', date: '25.06.10~25.06.13' },
	];

	const [selected, setSelected] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [customOptions, setCustomOptions] = useState([]);
	const [image, setImage] = useState(null);
	const [imageName, setImageName] = useState(null);
	const [inputValue, setInputValue] = useState('');

	const baseOptions = data.map((item) => ({
		value: `${item.title}-${item.date}`,
		title: item.title,
		date: item.date,
		label: (
			<LabelWrapper>
				<Title>{item.title}</Title>
				<Date>{item.date}</Date>
			</LabelWrapper>
		),
	}));

	const options = [
		...baseOptions,
		...customOptions,
		{
			value: 'custom',
			label: <Title>직접 입력</Title>,
		},
	];
	const filteredOptions = baseOptions.filter(
		(option) =>
			option.title.includes(inputValue) || option.date.includes(inputValue),
	);

	const handleSelectChange = (option) => {
		if (option.value === 'custom') {
			setShowModal(true);
			setMenuOpen(false);
			return;
		}
		setSelected(option);
	};

	const handleModalSubmit = (title, range) => {
		const [start, end] = range;
		const formattedRange = `${start.toLocaleDateString()} ~ ${end.toLocaleDateString()}`;

		const newOption = {
			value: `${title}-${formattedRange}`,
			label: (
				<LabelWrapper>
					<Title>{title}</Title>
					<Date>{formattedRange}</Date>
				</LabelWrapper>
			),
		};

		setCustomOptions((prev) => [...prev, newOption]);
		setSelected(newOption);
		setShowModal(false);
	};

	const handleCalendarSubmit = (range) => {
		if (!inputValue || !range || !range[0] || !range[1]) return;

		const [start, end] = range;
		const formattedRange = `${start.toLocaleDateString()} ~ ${end.toLocaleDateString()}`;

		const newOption = {
			value: `${inputValue}-${formattedRange}`,
			title: inputValue,
			date: formattedRange,
			label: (
				<LabelWrapper>
					<Title>{inputValue}</Title>
					<Date>{formattedRange}</Date>
				</LabelWrapper>
			),
		};

		setCustomOptions((prev) => [...prev, newOption]);
		setSelected(newOption);
		setShowCalendar(false);
		setInputValue('');
	};

	const ReadImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			setImage(reader.result);
		};
		if (file) {
			reader.readAsDataURL(file);
			setImageName(file.name);
		}
	};

	const { accessToken } = useAuth();
	useEffect(() => {
		async function fetchData() {
			try {
				// 예: jpg 파일을 photoAlbum 경로에 업로드할 Presigned URL 요청
				const { uploadUrl, publicUrl, keyName } = await getPresignedUrl(
					accessToken,
					'jpg',
					'photoAlbum',
				);

				console.log('📌 업로드 URL:', uploadUrl);
				console.log('📌 Public URL:', publicUrl);
				console.log('📌 Key Name:', keyName);
			} catch (err) {
				console.error('❌ 에러:', err.message);
			}
		}

		fetchData();
	}, []);

	return (
		<>
			<Mobile>
				{menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
				<TopBar> 사진첩 게시 </TopBar>
				<Content>
					<StyledSelect
						options={options}
						value={selected}
						onChange={handleSelectChange}
						placeholder="공연을 선택해주세요"
						isSearchable={false}
						components={{ IndicatorSeparator: () => null }}
						onMenuOpen={() => setMenuOpen(true)}
						onMenuClose={() => setMenuOpen(false)}
					/>
					<ImageUploadBox size="362px" aspect-ratio="1" onChange={ReadImage} />
					<textarea
						className="add"
						placeholder="공연에서 있었던 이야기를 작성해 주세요"
						rows="10"
					/>
				</Content>
				{showModal && (
					<Modal
						onClose={() => setShowModal(false)}
						onSubmit={handleModalSubmit}
					/>
				)}
				{/* {dateRange && console.log('선택된 날짜:', dateRange)} */}
			</Mobile>

			<Web>
				<Container>
					<Content>
						<UpperArea>
							{selected ? (
								<SelectedInfo>
									<SelectedInfoWrapper>
										<Title>{selected.title}</Title>
										<ChevronDown
											onClick={() => {
												setSelected(null);
												setInputValue('');
											}}
										/>
									</SelectedInfoWrapper>
									<Date>{selected.date}</Date>
								</SelectedInfo>
							) : (
								<SearchWrapper>
									<input
										type="text"
										value={inputValue}
										onChange={(e) => setInputValue(e.target.value)}
										onFocus={() => setMenuOpen(true)}
										placeholder="공연을 입력하세요"
									/>
									{menuOpen && (
										<Dropdown>
											{filteredOptions.map((option, idx) => (
												<OptionItem
													key={idx}
													onClick={() => {
														setSelected(option);
														setMenuOpen(false);
														setInputValue('');
													}}
												>
													<LabelWrapper>
														<Title>{option.title}</Title>
														<Date>{option.date}</Date>
													</LabelWrapper>
												</OptionItem>
											))}
											<OptionItem
												isNew
												onClick={() => {
													setShowCalendar(true);
													setMenuOpen(false);
												}}
											>
												+ 새로 공연 추가하기
											</OptionItem>
										</Dropdown>
									)}
								</SearchWrapper>
							)}
							<UploadBtn>등록</UploadBtn>
						</UpperArea>

						<ImageUploadBox size="362px" aspect-ratio="1" />
						<textarea
							className="add"
							placeholder="공연에서 있었던 이야기를 작성해 주세요"
							rows="10"
						/>
					</Content>
					{showCalendar && (
						<CalendarWrapper>
							<CalendarPeriod onChange={handleCalendarSubmit} />
						</CalendarWrapper>
					)}
				</Container>
			</Web>
		</>
	);
}

export default UploadPic;

const Mobile = styled.div`
	width: 100vw;
	height: 100vh;

	@media (min-width: 768px) {
		display: none;
	}
`;
const Web = styled.div`
	display: none;
	@media (min-width: 768px) {
		width: 100vw;
		display: flex;
		padding: 100px 100px 100px 160px;
	}
`;
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;
const Content = styled.div`
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	.add {
		border: none;
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-weight: ${({ theme }) => theme.font.fontWeight.regular};
		color: ${({ theme }) => theme.colors.grayMain};
	}

	textarea::placeholder {
		color: ${({ theme }) => theme.colors.gray400};
	}
	textarea:focus {
		outline: none;
	}

	@media (min-width: 768px) {
		.add {
			font-size: ${({ theme }) => theme.font.fontSize.title16};
			font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		}
	}
`;
const LabelWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const Title = styled.div`
	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;

const Date = styled.div`
	font-size: ${({ theme }) => theme.font.fontSize.body10};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.gray400};

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
		color: ${({ theme }) => theme.colors.gray400};
	}
`;

const StyledSelect = styled(Select).attrs({
	classNamePrefix: 'custom',
})`
	width: 60%;

	.custom__control {
		border-radius: 3px;
		border: none;
		padding: 8px 4px;
		box-shadow: none;
		background-color: white;
	}

	.custom__menu {
		border-radius: 3px;
		z-index: 100;
	}

	.custom__option {
		cursor: pointer;
		padding: 8px 4px;
		background-color: white;

		&:hover {
			background-color: #f9f9f9;
		}

		&--is-selected {
			background-color: #f4e5f7;
		}
	}
	.custom__placeholder {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	}
`;
const UpperArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0 14px 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const UploadBtn = styled.button`
	width: 80px;
	padding: 8px 14px;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	background: ${({ theme }) => theme.colors.gray200};

	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.gray400};
`;

const SearchWrapper = styled.div`
	position: relative;
	width: 100%;

	input {
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};

		width: 300px;
		padding: 10px;
		border: none;
		border-radius: 5px;
	}
	input::placeholder {
		color: ${({ theme }) => theme.colors.gray400};
	}
	input:focus {
		outline: none;
	}
`;

const Dropdown = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: white;
	border: 1px solid #ccc;
	border-top: none;
	z-index: 10;
	max-height: 200px;
	overflow-y: auto;

	width: 300px;
`;

const OptionItem = styled.li`
	padding: 10px;
	cursor: pointer;
	//background-color: ${({ isNew }) => (isNew ? '#f5f5f5' : 'white')};

	&:hover {
		background-color: #eee;
	}

	font-size: ${({ theme }) => theme.font.fontSize.headline20};
	font-weight: ${({ theme }) => theme.font.fontWeight.normal};
	color: ${({ theme }) => theme.colors.gray400};
`;
const CalendarWrapper = styled.div`
	position: absolute;
	top: 170px;
	z-index: 9;
	background: white;
	border: 1px solid #ccc;
	padding: 16px;
	border-radius: 6px;
`;

const SelectedInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 300px;
	padding: 10px;
	border-radius: 5px;
`;
const SelectedInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const ChangeBtn = styled.button`
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.gray500};
	font-size: ${({ theme }) => theme.font.fontSize.body12};
	cursor: pointer;
`;
