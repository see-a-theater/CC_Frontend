import { createGlobalStyle } from 'styled-components';
import NanumSquareNeoTTVariable from '@/assets/fonts/NanumSquareNeo-Variable.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareNeo-Variable';
    font-style: normal;
    font-weight: 100 900;
    src: url(${NanumSquareNeoTTVariable}) format('woff2-variations');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'NanumSquareNeo-Variable';
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.025em; 
  }

  p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    &:focus {
      outline: none;
    }
  }

  img {
    border: none;
  }
  .color-pink {
    color: ${({ theme }) => theme.colors.pink600} !important;
  }
  .color-warning {
    color:${({ theme }) => theme.colors.redWarning} !important;
  }
    	.bold {
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	}
  .btn-light {
    display: flex;
    height: 60px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.pink100};
    background: ${({ theme }) => theme.colors.pink100};
    color: ${({ theme }) => theme.colors.pink600};
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.48px;
    &:disabled {
      border: 1px solid ${({ theme }) => theme.colors.gray200};
      background: ${({ theme }) => theme.colors.gray200};
      color: ${({ theme }) => theme.colors.gray400};
    }
  }

  .btn-primary {
    display: flex;
    height: 60px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.pink600};
    background: ${({ theme }) => theme.colors.pink600};
    color: ${({ theme }) => theme.colors.grayWhite};
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.48px;
    &:disabled {
      border: 1px solid ${({ theme }) => theme.colors.gray300};
      background: ${({ theme }) => theme.colors.gray300};
      color: ${({ theme }) => theme.colors.gray200};
    }
  }

  .checkbox {
    label {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      color: ${({ theme }) => theme.colors.pink500} !important;
      font-size: ${({ theme }) => theme.font.fontSize.body14};
      font-style: normal;
      font-weight: ${({ theme }) => theme.font.fontWeight.bold};
      line-height: normal;
      letter-spacing: -0.42px;
      margin: 0;

      input[type='checkbox'] {
        margin-left: 12px;
        width: 16px;
        height: 16px;
        accent-color: ${({ theme }) => theme.colors.pink600};
        cursor: pointer;
      }
    }
  }
`;

export default GlobalStyle;
