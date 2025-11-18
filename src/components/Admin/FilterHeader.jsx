import styled from 'styled-components';
import SearchIcon from '@/assets/icons/searchBlack.svg?react';

function FilterHeader({ title, searchTerm, setSearchTerm, filterKeys, filterLabels, visibleColumns, setVisibleColumns }) {
	const handleColumnToggle = (column) => {
		setVisibleColumns((prev) =>
			prev.includes(column) ? prev.filter((c) => c !== column) : [...prev, column]
		);
	};

	return (
		<>
			<Title>{title}</Title>
			<FilterArea>
				<SearchInput>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<SearchIcon width={15} />
				</SearchInput>
				<CheckboxGroup>
					{filterKeys.map((key) => (
						<label key={key}>
							<input
								type="checkbox"
								checked={visibleColumns.includes(key)}
								onChange={() => handleColumnToggle(key)}
							/>
							{filterLabels[key]}
						</label>
					))}
				</CheckboxGroup>
			</FilterArea>
		</>
	);
}

export default FilterHeader;

const Title = styled.h3`
	font-size: ${({ theme }) => theme.font.fontSize.headline24};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.pink600};
	margin-bottom: 15px;
`;

const FilterArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;
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

const CheckboxGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;
`;
