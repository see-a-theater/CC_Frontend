
import styled from 'styled-components';

// 앱 전체 컨테이너
export const AppContainer = styled.div`
  font-family: NanumSquareNeo-Variable;
  max-width: 402px;
  margin: 0 auto;
  height: auto;
  background-color: white;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// 헤더 관련 스타일
export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  position: relative;
  height: 72px;
  border-bottom: 1px solid white;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #F67676;
  font-size: 24px;
  padding: 0;
  cursor: pointer;
`;

export const PageTitle = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

// 메인 컨텐츠 영역
export const MainContent = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// 포스터 및 공연 정보 영역
export const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Poster = styled.img`
  width: 160px;
  height: 220px;
  border-radius: 3px;
`;

export const EventTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
`;

export const EventVenue = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #929292;
  text-align: center;
`;

// 섹션 관련 스타일
export const FormSection = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #F67676;
  margin-bottom: 20px;
`;

export const SelectionSection = styled.div`
  display: flex;
  position: relative;
`;

// 액션 버튼 스타일
export const ActionButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 20px;
  
  &.primary {
    background-color: #F67676;
    color: white;
  }
  
  &.disabled {
    background-color: #e0e0e0;
    color: #999;
    cursor: not-allowed;
  }

  &.bottom {
    position: absolute;
    bottom: 40px;
    width: calc(100% - 40px);
  }
`;

export const SuccessMessage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  color: #F67676;
  font-size: 18px;
  font-weight: bold;
`;