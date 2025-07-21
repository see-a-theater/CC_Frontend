
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ClosePinkBig from '../../assets/icons/ClosePinkBig.svg';
import Poster from '../../assets/images/test-poster2.png';
import SearchIcon from '../../assets/icons/searchGrey.svg?react';

const SearchPC = () => {
  const mockUpcoming = [
    {
      id: 1,
      rank: 1,
      title: '실종',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00'
    },
    {
      id: 2,
      rank: 2,
      title: '실종',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00'
    },
    {
      id: 3,
      rank: 3,
      title: '실종',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00'
    },
    {
      id: 4,
      rank: 4,
      title: '실종',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00'
    }
  ];
  const mockData = [
    {
      id: 1,
      title: '실종',
      company: '홍익극연구회',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00',
      status: '판매중',
      isActive: true
    },
    {
      id: 2,
      title: '실종',
      company: '대혼돈',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00',
      status: '공연종료',
      isActive: false
    },
    {
      id: 3,
      title: '실종',
      company: '어재들',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00',
      status: '공연종료',
      isActive: false
    },
    {
      id: 4,
      title: '실종',
      company: '씨씨',
      venue: '홍익대학교 학생회관 3층 소극장',
      date: '2024.10.03 (목) 19:00 ~ 2024.10.05 (토) 14:00',
      status: '공연종료',
      isActive: false
    }
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [recentSearches, setRecentSearches] = useState(['실종', '홍익극연구회', '카포네 트릴로지']);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);
  const inputRef = useRef(null);


  const removeRecentSearch = (index) => {
    setRecentSearches(prev => prev.filter((_, i) => i !== index));
  };
  const clearAllSearches = () => {
    setRecentSearches([]);
  };
  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      addToRecentSearches(searchTerm.trim());
    }
  };
  const addToRecentSearches = (newSearch) => {
    if (newSearch) {
      setRecentSearches(prev => {
        const filteredSearches = prev.filter(search => search !== newSearch);
        return [newSearch, ...filteredSearches].slice(0, 20);
      });
    }
  };
  const handleRecentSearchClick = (search) => {
    setSearchTerm(search);
  };
  const handleInputFocus = () => {
    setIsExpanded(true);
  };
  const filteredResults = mockData.filter(result =>
    result.title.includes(searchTerm) || 
    result.company.includes(searchTerm)
  );

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // 검색창이 확장될 때 input에 포커스
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);
  
  return (
    <SearchContainer ref={searchRef}>

      {isExpanded && <Backdrop onClick={() => setIsExpanded(false)} />}

      <SearchWrapper $isExpanded={isExpanded}>
        <IconWrapper>
          <SearchIcon height={24} />
        </IconWrapper>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="보고 싶은 연극이나 공연진을 입력하세요."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleInputFocus}
          $isExpanded={isExpanded}
        />
      </SearchWrapper>

      {isExpanded && (
        <SearchDropdown>
          {!searchTerm ? (
            <>
              {/* 최근검색어 */}
              <RecentSearchSection>
                <SectionHeader>
                  <SectionTitle>최근 검색어</SectionTitle>
                  {recentSearches.length > 0 && (
                    <ClearAllButton onClick={clearAllSearches}>
                      전체삭제
                    </ClearAllButton>
                  )}
                </SectionHeader>
                <RecentSearches>
                  {recentSearches.map((search, index) => (
                    <RecentSearchTag key={index} onClick={() => handleRecentSearchClick(search)}>
                      {search}
                      <DeleteButton 
                        src={ClosePinkBig} 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeRecentSearch(index);
                        }}
                      />
                    </RecentSearchTag>
                  ))}
                </RecentSearches>
              </RecentSearchSection>

              {/* 임박한 공연 */}
              <UpcomingSection>
                <SectionTitle>임박한 공연</SectionTitle>
                <UpcomingPerformances>
                  {mockUpcoming.map((performance) => (
                    <PerformanceCard key={performance.id}>
                      <PerformanceImage>
                        <img src={Poster} style={{width: '100%', height: '100%', borderRadius: '3px'}}/>
                        <PerformanceNumber>{performance.rank}</PerformanceNumber>
                      </PerformanceImage>
                      <PerformanceInfo>
                        <PerformanceTitle>{performance.title}</PerformanceTitle>
                        <PerformanceVenue>{performance.venue}</PerformanceVenue>
                        <PerformanceDate>{performance.date}</PerformanceDate>
                      </PerformanceInfo>
                    </PerformanceCard>
                  ))}
                </UpcomingPerformances>
              </UpcomingSection>
            </>
          ) : (
            <SearchResults>
              <SearchResultsHeader>
                검색 결과 {filteredResults.length}개
              </SearchResultsHeader>
              <SearchResultsList>
                {filteredResults.map((result) => (
                  <SearchResultItem key={result.id}>
                    <ResultImage>
                      <img src={Poster} style={{width: '100%', height: '100%'}}/>
                    </ResultImage>
                    <ResultInfo>
                      <div style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                        <ResultTitle>{result.title}</ResultTitle>
                        <ResultStatus $isActive={result.isActive}>{result.status}</ResultStatus>
                      </div>
                      <ResultCompany>{result.company}</ResultCompany>
                      <ResultDetails>
                        <div style={{fontSize: '13px', color: '#000000'}}>{result.venue}</div>
                        <div style={{fontSize: '12px', color: '#929292'}}>{result.date}</div>
                      </ResultDetails>
                    </ResultInfo>
                  </SearchResultItem>
                ))}
              </SearchResultsList>
            </SearchResults>
          )}
        </SearchDropdown>
      )}

    </SearchContainer>
  );  
};

export default SearchPC;

const SearchContainer = styled.div`
	position: relative;
	width: 100%;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;


// 상단 검색바 영역   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  transition: all 0.2s ease;
  ${({ $isExpanded }) => $isExpanded && `
    border-radius: 5px 5px 0 0;
  `}
  z-index: 1000;
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 12px;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
`;

const SearchInput = styled.input`
	width: 100%;
	background-color: ${({ $isExpanded }) => $isExpanded ? '#FFFFFF' : '#F8F8F8'};
	height: 40px;
	padding: 8px 20px 8px 40px;
	border-radius: ${({ $isExpanded }) => $isExpanded ? '5px 5px 0 0' : '5px'};
	border: none;
	font-size: ${({ theme }) => theme.font.fontSize.body13};
	color: #000000;
  outline: none;

  &::placeholder {
    color: #929292;
  }
`;

const SearchDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 0 0 5px 5px;
  z-index: 1000;
  height: 502px;
  overflow-y: auto;
  padding: 28px 24px;
`;


// 최근 검색어 영역   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const RecentSearchSection = styled.div`
  margin-bottom: 32px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

const ClearAllButton = styled.div`
  background: none;
  border: none;
  color: #929292;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
`;

const RecentSearches = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const RecentSearchTag = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #F67676;
  border-radius: 30px;
  padding: 8px 12px;
  color: #F67676;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {  }
`;

const DeleteButton = styled.img`
  cursor: pointer;
  width: 12px;
  height: 12px;

  &:hover {  }
`;


// 임박한 공연 영역   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const UpcomingSection = styled.div`

`;

const UpcomingPerformances = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 47px;
`;

const PerformanceCard = styled.div`
  width: 128px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const PerformanceImage = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
`;

const PerformanceNumber = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 800;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`;

const PerformanceInfo = styled.div`
  margin-top: 12px;
`;

const PerformanceTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
`;

const PerformanceVenue = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 2px;
`;

const PerformanceDate = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #929292;
`;


// 검색결과 영역  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const SearchResults = styled.div`
  
`;

const SearchResultsHeader = styled.div`
  color: #929292;
  font-size: 14px;
  margin-left: 4px;
  margin-bottom: 10px;
`;

const SearchResultsList = styled.div`
  
`;

const SearchResultItem = styled.div`
  margin-bottom: 28px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f8f8;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ResultImage = styled.div`
  width: 140px;
  height: 200px;
  margin-right: 28px;
  flex-shrink: 0;
  border-radius: 0px;
  overflow: hidden;
`;

const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ResultStatus = styled.div`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  color: ${props => props.$isActive ? '#F67676' : '#929292'};
  background: ${props => props.$isActive ? '#FFF1EF' : '#F8F8F8'};
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const ResultTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
`;

const ResultCompany = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 18px;
`;

const ResultDetails = styled.div`
  font-weight: 500;
  
  div + div {
    margin-top: 4px;
  }
`;