
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChevronPink from '../../assets/icons/ChevronPink.svg';
import ClosePink from '../../assets/icons/ClosePink.svg';
import Poster from '../../assets/images/test-poster2.png';

const SearchMobile = () => {
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
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  const [recentSearches, setRecentSearches] = useState(['실종', '홍익극연구회', '카포네 트릴로지']);
  const [searchTerm, setSearchTerm] = useState('');
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
        // 중복 제거 후 맨 앞에 추가
        const filteredSearches = prev.filter(search => search !== newSearch);
        return [newSearch, ...filteredSearches].slice(0, 20); // 최대 20개까지 유지(임시)
      });
    }
  };
  const handleRecentSearchClick = (search) => {
    setSearchTerm(search);
  };
  const filteredResults = mockData.filter(result =>
    result.title.includes(searchTerm) || 
    result.company.includes(searchTerm)
  );

  const scrollRef = useRef(null);

  return (
    <AppContainer>
      <SearchBar>
        <BackButton src={ChevronPink} onClick={handleBackClick} />
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="보고싶은 연극이나 공연진을 검색하세요."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </SearchBox>
      </SearchBar>

      {!searchTerm ? (
        <>
          {/* 최근검색어 */}
          <RecentSearchSection>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <SectionTitle>최근 검색어</SectionTitle>
              {recentSearches.length > 0 && (
                <ClearAllButton onClick={clearAllSearches}>
                  전체 삭제
                </ClearAllButton>
              )}
            </div>
            <RecentSearches>
              {recentSearches.map((search, index) => (
                <RecentSearchBox key={index} onClick={() => handleRecentSearchClick(search)}>
                  {search}
                  <DeleteButton 
                    src={ClosePink} 
                    onClick={(e) => {
                      e.stopPropagation(); // 부모 클릭 이벤트 막기
                      removeRecentSearch(index); }}
                  />
                </RecentSearchBox>
              ))}
            </RecentSearches>
            <Divider/>
          </RecentSearchSection>

          {/* 임박한 공연 */}
          <UpcomingSection>
            <SectionTitle>임박한 공연</SectionTitle>
            <SlideContainer ref={scrollRef}>
              <SlideContent>
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
              </SlideContent>
            </SlideContainer>
          </UpcomingSection>
        </>
      ) : (
        <SearchResults> {/* 검색 결과 */}
          <div style={{color: '#929292', fontSize: '12px', marginBottom: '20px' }}>
            검색 결과 {filteredResults.length}개
          </div>
          {filteredResults.map((result) => (
            <SearchResultItem key={result.id}>
              <ResultImage>
                <img src={Poster} style={{width: '100%', height: '100%', borderRadius: '3px'}}/>
              </ResultImage>
              <ResultInfo>
                <ResultStatus $isActive={result.isActive}>{result.status}</ResultStatus>
                <ResultTitle>{result.title}</ResultTitle>
                <ResultCompany>{result.company}</ResultCompany>
                <ResultDetails>
                  {result.venue}
                  <div style={{height: '6px'}}/>
                  {result.date}
                </ResultDetails>
              </ResultInfo>
            </SearchResultItem>
          ))}
        </SearchResults>
      )}
    </AppContainer>
  );
};

export default SearchMobile;

const AppContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 0px 20px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


// 상단 검색바 영역   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const SearchBar = styled.div`
  height: 72px;
  display: flex;
  flex-direction: row;
  gap: 17px;
  justify-content: space-between;
  padding: 30px 0px 18px 0px;
`;

const BackButton = styled.img`
  width: 7px;
  height: 15px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 8px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 24px;
  padding: 2px 0px 4px 0px;
  display: flex;
  border-bottom: 1px solid #DDDDDD;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 13px;
  font-weight: 500;
  color: #000000;
  border: none;
  outline: none;

  &::placeholder {
    color: #929292;
  }
`;


// 최근 검색어 영역   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const RecentSearchSection = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

const ClearAllButton = styled.button`
  background: none;
  border: none;
  color: #929292;
  font-size: 12px;
  cursor: pointer;
`;

const RecentSearches = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 150px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecentSearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #FFF1EF;
  border-radius: 30px;
  padding: 8px 12px;
  color: #F67676;
  font-size: 12px;
  font-weight: 500;
  gap: 12px;
`;

const DeleteButton = styled.img`
  cursor: pointer;
  width: 8px;
  height: 8px;
`;

const Divider = styled.div`
  height: 2px;
  background-color: #FFF1EF;
  width: calc(100% + 40px);
  margin-left: -20px;
`;


// 임박한 공연 영역   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const UpcomingSection = styled.div`
  margin-top: 32px;
`;

const SlideContainer = styled.div`
  margin-top: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SlideContent = styled.div`
  display: flex;
  gap: 20px;
`;

const PerformanceCard = styled.div`
  flex: 0 0 128px;
  overflow: hidden;
`;

const PerformanceImage = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
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
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
`;

const PerformanceVenue = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 4px;
`;

const PerformanceDate = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #929292;
`;


// 검색결과 영역  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const SearchResults = styled.div`
  margin-top: 20px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SearchResultItem = styled.div`
  margin-bottom: 32px;
  display: flex;
  
  &:last-child {

  }
`;

const ResultImage = styled.div`
  width: 112px;
  height: 156px;
  margin-right: 20px;
  flex-shrink: 0;
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultStatus = styled.div`
  width: ${props => props.$isActive ? '43px' : '52px'};
  padding: 4px 8px;
  border-radius: 3px;
  color: ${props => props.$isActive ? '#F67676' : '#929292'};
  background: ${props => props.$isActive ? '#FFF1EF' : '#F8F8F8'};
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 20px;
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
  margin-bottom: 14px;
`;

const ResultDetails = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #929292;
`;