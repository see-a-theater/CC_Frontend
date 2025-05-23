import styled from 'styled-components';
import Search from '@/assets/icons/search-gray.svg?react';
function SearchBar() {
	return (
		<Wrapper>
			<Search />
			<input type="text" placeholder="보고싶은 연극이나 공연진을 검색하세요" />
		</Wrapper>
	);
}
export default SearchBar;
const Wrapper = styled.div`
  height: 40px;
  display: flex;
  padding: 8px 20px;
  gap: 12px;
  align-items:center;
  background: ${({ theme }) => theme.colors.gray200};

  input {
    width: 100%;
    background: none;
    border: none;
    font-size: ${({ theme }) => theme.font.fontSize.body14};
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    line-height: normal;
    letter-spacing: -0.42px;

    &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
        
    }
    &:focus {
        outline: none; // 포커스 시 브라우저 기본 테두리 제거
        border: none;  // 혹시 border 스타일이 있다면 같이 제거
      }

`;
