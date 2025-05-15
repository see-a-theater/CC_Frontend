import styled from "styled-components"

export const RegisterWrapper = styled.div`
  height: 100vh;

  h1 {
    color: ${({ theme }) => theme.colors.pink600};
    font-family: Inter;
    font-size: ${({ theme }) => theme.font.fontSize.headline20};
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
    line-height: normal;
    letter-spacing: -0.6px;
    margin-bottom: 30px;
  }

  ul {
    list-style-type: none;

    li {
      display: flex;
      gap: 8px;
      color: ${({ theme }) => theme.colors.grayMain};
      font-family: "NanumSquare Neo OTF";
      font-size: ${({ theme }) => theme.font.fontSize.body14};
      font-style: normal;
      font-weight: ${({ theme }) => theme.font.fontWeight.bold};
      line-height: normal;
      letter-spacing: -0.42px;
      margin-bottom: 16px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    > div {
      display: flex;
      flex-direction: column;

      label {
        color: ${({ theme }) => theme.colors.grayMain};
        font-family: Inter;
        font-size: ${({ theme }) => theme.font.fontSize.body14};
        font-style: normal;
        font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
        line-height: normal;
        letter-spacing: -0.42px;
        margin-bottom: 12px;
      }

      p {
        color: ${({ theme }) => theme.colors.gray400};
        font-family: "NanumSquare Neo OTF";
        font-size: ${({ theme }) => theme.font.fontSize.body13};
        font-style: normal;
        font-weight: ${({ theme }) => theme.font.fontWeight.bold};
        line-height: 18px;
        letter-spacing: -0.39px;
      }

      > input {
        display: flex;
        height: 40px;
        width: 100%;
        padding: 12px 8px;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        border-radius: 3px;
        border: none;
        background: ${({ theme }) => theme.colors.gray200};
        margin-bottom: 8px;
        color: ${({ theme }) => theme.colors.grayMain};
        font-family: "NanumSquare Neo OTF";
        font-size: ${({ theme }) => theme.font.fontSize.body13};
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.39px;

        &::placeholder {
          color: ${({ theme }) => theme.colors.gray400};
        }

        &:focus {
          outline: none;
          box-shadow: none;
        }
      }

      .input {
        display: flex;
        width: 100%;
        height: 40px;
        padding: 12px 8px;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        border-radius: 3px;
        border: none;
        background: ${({ theme }) => theme.colors.gray200};
        margin-bottom: 8px;
        color: #000000;
        font-family: "NanumSquare Neo OTF";
        font-size: ${({ theme }) => theme.font.fontSize.body13};
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.39px;

        &::placeholder {
          color: ${({ theme }) => theme.colors.gray400};
        }

        &:focus {
          outline: none;
          box-shadow: none;
        }
      }

      textarea {
        display: flex;
        height: 124px;
        padding: 8px;
        align-items: flex-start;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 3px;
        border: none;
        background: ${({ theme }) => theme.colors.gray200};
        color: ${({ theme }) => theme.colors.gray400};
        font-family: "NanumSquare Neo OTF";
        font-size: ${({ theme }) => theme.font.fontSize.body13};
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.39px;
      }

      select {
        display: flex;
        height: 40px;
        padding: 12px 8px;
        align-items: center;
        gap: 118px;
        flex-shrink: 0;
        border-radius: 3px;
        border: none;
        background: ${({ theme }) => theme.colors.gray200};
        margin-bottom: 8px;
      }

      button {
        display: flex;
        height: 40px;
        padding: 12px 8px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
        border-radius: 3px;
        border: 1px solid ${({ theme }) => theme.colors.gray300};
      }
    }

    .submit {
      display: flex;
      height: 60px;
      padding: 20px;
      justify-content: center;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.colors.gray300};
      background: ${({ theme }) => theme.colors.gray300};
    }

    .checkbox {
      label {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        color: ${({ theme }) => theme.colors.pink500};
        font-family: "NanumSquare Neo OTF";
        font-size: ${({ theme }) => theme.font.fontSize.body14};
        font-style: normal;
        font-weight: ${({ theme }) => theme.font.fontWeight.bold};
        line-height: normal;
        letter-spacing: -0.42px;
        margin: 0;

        input[type='checkbox'] {
          width: 16px;
          height: 16px;
          accent-color: ${({ theme }) => theme.colors.pink600};
          cursor: pointer;
        }
      }
    }
  }
`
