
import styled from 'styled-components';

// 입력 영역 관련 스타일
export const Input = styled.div`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #929292;
  display: block;
  margin-bottom: 8px;
`;

export const DatePickerContainer = styled.div`
  width: 164px;
  height: 32px;
  display: flex;
  border: 1px solid #FFD6D4;
  border-radius: 2px;
  position: absolute;
  left: 100px;
`;

export const DateInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4px 12px 4px 12px;
  text-align: center;
  position: relative;
`;

export const ArrowIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 7px;
  cursor: pointer;
`;

export const TimeSelectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 224px;
  margin-left: 47px;
`;

export const TimeButton = styled.button`
  width: 64px;
  height: 32px;
  padding: 4px 12px 4px 12px;
  border: 1px solid #FFD6D4;
  border-radius: 2px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover, &.selected {
    background-color: #F8F8F8;
  }
  
  &.selected {
    background-color: #FFF1EF;
  }
`;

export const PersonSelectionContainer = styled.div`
  width: 70px;
  height: 32px;
  display: flex;
  border: 1px solid #FFD6D4;
  border-radius: 2px;
  position: absolute;
  left: 100px;
`;

export const PersonInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4px 12px 4px 12px;
  text-align: center;
  position: relative;
`;

//드롭다운 스타일
export const DropdownList = styled.ul`
  position: absolute;
  top: 34px;
  left: 0;
  width: 100%;
  border: 1px solid #FFD6D4;
  border-radius: 2px;
  background-color: white;
  z-index: 10;
  max-height: 96px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FFD6D4;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #FF8585;
  }
`;

export const DropdownItem = styled.li`
  height: 32px;
  padding: 8px 12px;
  cursor: pointer;
  list-style: none;
  border-bottom: 1px solid #FFD6D4;
  &:last-child {
    border-bottom: none; 
  }
  &:hover {
    background-color: #FFF1EF;
  }
`;

// 라디오 버튼 그룹 스타일
export const RadioButtonGroup = styled.div`
  position: absolute;
  left: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RadioCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #FF8585;
  position: relative;
  
  &.selected {
    border-color: #F67676;
    
    &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #F67676;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const RadioLabel = styled.label`
  font-size: 14px;
`;

// 구분선 
export const Divider = styled.div`
  height: 4px;
  background-color: #FFF1EF;
  width: 402px;
  margin-left: -20px;
`;