import styled from "styled-components";
import { useState } from "react";
import Minus from "../assets/icons/Minus.svg";
import Plus from '../assets/icons/Plus.svg';
function Counter( {size} ) {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <Wrapper size={size}>
      <img src={Minus} onClick={handleDecrease} style={{ cursor: "pointer" }} />
      <div>{count}</div>
      <img src={Plus} onClick={handleIncrease} style={{ cursor: "pointer" }} />
    </Wrapper>
  );
}
export default Counter;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.gray200};
  width: ${(props) => props.size ? props.size : '180px'};  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  img {
    width: 24px;
  }
`;
