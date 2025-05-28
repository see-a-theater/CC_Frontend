//yarn add react-select
import { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import ImageUploadBox from '@/components/ImageUploadBox';
import TopBar from '@/components/TopBar';
import Modal from '@/components/Production/Modal';
import MyCalendar from '@/components/Calendar';

function UploadPic() {
	const data = [
		{ title: '실종', date: '25.04.25~25.04.27' },
		{ title: '카포네 트릴로지', date: '25.05.01~25.05.03' },
		{ title: '킬링시저', date: '25.06.10~25.06.13' },
	];

	const [selected, setSelected] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const baseOptions = data.map((item) => ({
		value: `${item.title}-${item.date}`,
		label: (
			<LabelWrapper>
				<Title>{item.title}</Title>
				<Date>{item.date}</Date>
			</LabelWrapper>
		),
	}));

	const options = [
		...baseOptions,
		{
			value: 'custom',
			label: <Title>직접 입력</Title>,
		},
	];

	const handleSelectChange = (option) => {
		if (option.value === 'custom') {
			setShowModal(true);
			setMenuOpen(false);
			return;
		}
		setSelected(option);
	};

	return (
		<Container>
			{menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
			<TopBar> 사진 등록 </TopBar>
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
				<ImageUploadBox size="362px" aspect-ratio="1" />
				<p className="add">공연에서 있었던 이야기를 작성해 주세요</p>
			</Content>
			{showModal && <Modal onClose={() => setShowModal(false)} />}
		</Container>
	);
}

export default UploadPic;

const Container = styled.div``;
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
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-weight: ${({ theme }) => theme.font.fontWeight.regular};
		color: ${({ theme }) => theme.colors.gray400};
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
`;

const Date = styled.div`
	font-size: ${({ theme }) => theme.font.fontSize.body10};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.gray400};
`;

const StyledSelect = styled(Select).attrs({
	classNamePrefix: 'custom',
})`
	width: 50%;

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
`;
