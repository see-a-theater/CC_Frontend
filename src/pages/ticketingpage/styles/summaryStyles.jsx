
import styled from 'styled-components';

export const BookingSummary = styled.div`
  margin-top: 20px;
`;

export const SummaryRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  margin-bottom: 16px;
  
  &.total {
    margin-top: 16px;
    font-weight: bold;
    color: #ff6b6b;
  }
  
  div {
    font-size: 14px;
    font-weight: 500;
    color: #929292;
    display: block;
    margin-bottom: 8px;
  }

  span {
    position: absolute;
    left: 100px;
    &.discount {
      color: #ff6b6b;
    }
  }
`;