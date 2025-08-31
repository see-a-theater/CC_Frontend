
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

const ErrorText = styled.p`
  color: #F67676;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const RetryButton = styled.button`
  background-color: #F67676;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e55e5e;
  }
`;

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <ErrorText>{message}</ErrorText>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          다시 시도
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorMessage;