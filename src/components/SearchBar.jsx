import styled from 'styled-components';

function SearchBar() {
	return <Bar placeholder='보고 싶은 연극이나 공연진을 입력하세요.'></Bar>;
}

export default SearchBar;

const Bar = styled.input`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.gray200};
	height: 40px;
	padding: 8px 20px;
	border-radius: 5px;
	border: none;
	display: flex;
	align-items: center;
`;
