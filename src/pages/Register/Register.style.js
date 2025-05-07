import styled from "styled-components"

export const RegisterWrapper = styled.div`
 h1 {
  color: var(--color-pink-600, #F67676);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.6px;
  margin-bottom: 30px;
  }
 ul {
  list-style-type: none;
  li {
    display: flex;
    gap: 8px;
    color: var(--color-gray-maintext, #000);
    /* Web-app/body-14-bold */
    font-family: "NanumSquare Neo OTF";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
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
      color: var(--color-gray-maintext, #000);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      letter-spacing: -0.42px;
      margin-bottom: 12px;
    }
    p {
      color: var(--color-gray-400, #929292);

      /* Web-app/body-13-bold */
      font-family: "NanumSquare Neo OTF";
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px; /* 138.462% */
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
      background: var(--color-gray-200, #F8F8F8);
      margin-bottom: 8px;
      color: #000000;
      font-family: "NanumSquare Neo OTF";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 138.462% */
      letter-spacing: -0.39px;
      &::placeholder {
        color: var(--color-gray-400, #929292); /* placeholder만 회색 */
      }
        &:focus {
        outline: none; /* 포커스 시 테두리 없애기 */
        box-shadow: none; /* 포커스 시 그림자 없애기 */
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
      background: var(--color-gray-200, #F8F8F8);
      margin-bottom: 8px;
      color: #000000;
      font-family: "NanumSquare Neo OTF";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 138.462% */
      letter-spacing: -0.39px;
      &::placeholder {
        color: var(--color-gray-400, #929292); /* placeholder만 회색 */
      }
        &:focus {
        outline: none; /* 포커스 시 테두리 없애기 */
        box-shadow: none; /* 포커스 시 그림자 없애기 */
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
      background: var(--color-gray-200, #F8F8F8);
      color: var(--color-gray-400, #929292);
      font-family: "NanumSquare Neo OTF";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 138.462% */
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
    background: var(--color-gray-200, #F8F8F8);
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
      border: 1px solid var(--color-gray-300, #DDD);
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
    border: 1px solid var(--color-gray-300, #DDD);
    background: var(--color-gray-300, #DDD);
  }
    .checkbox {
    label {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        
        color: var(--color-pink-500, #FF8585);
        /* Web-app/body-14-bold */
        font-family: "NanumSquare Neo OTF";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.42px;
        margin: 0;

      input[type='checkbox'] {
      width: 16px;
      height: 16px;
      accent-color: #f67676;
      cursor: pointer;
      
    }
    }
      
  }

}
`