//yarn add react-select

import styled from 'styled-components';
import ImageUploadBox from '@/components/ImageUploadBox';
import TopBar from '@/components/TopBar';
import { useState } from 'react';
import Select from 'react-select';

function UploadPic() {
	const data = [
		{ title: '실종', date: '25.04.25~25.04.27' },
		{ title: '카포네 트릴로지', date: '25.05.01~25.05.03' },
		{ title: '킬링시저', date: '25.06.10~25.06.13' },
	];

	const options = data.map((item) => ({
		value: `${item.title}-${item.date}`,
		label: (
			<LabelWrapper>
				<Title>{item.title}</Title>
				<Date>{item.date}</Date>
			</LabelWrapper>
		),
	}));

	const [selected, setSelected] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Container>
			{menuOpen && <Overlay />}
			<TopBar> 사진 등록 </TopBar>
			<Content>
				<StyledSelect
					options={options}
					value={selected}
					onChange={setSelected}
					placeholder="공연을 선택해주세요"
					isSearchable={false}
					components={{
						IndicatorSeparator: () => null,
					}}
					classNamePrefix="custom"
                    onMenuOpen={() => setMenuOpen(true)}
					onMenuClose={() => setMenuOpen(false)}
				/>

				<ImageUploadBox size="362px" aspect-ratio="1" />
				<p className="add">공연에서 있었던 이야기를 작성해 주세요</p>
			</Content>
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
		//box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
