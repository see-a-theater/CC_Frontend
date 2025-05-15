import styled from "styled-components";

function TimePicker() {
  return (
    <Wrapper>
      <Top>
        <div>오전</div><div>오후</div>
      </Top>
      <Picker>
        <Unit>시</Unit>
        <Numbers>
          <span>12</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
        </Numbers>
      </Picker>
      <Picker>
        <Unit>분</Unit>
        <Numbers>
          <span>00</span>
          <span>05</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
          <span>30</span>
          <span>35</span>
          <span>40</span>
          <span>45</span>
          <span>50</span>
          <span>55</span>
        </Numbers>
      </Picker>

    </Wrapper>
  )
}
export default TimePicker;

const Wrapper = styled.div`
  /*border: 1px solid #dee2e6;*/
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  max-width: 350px;
  padding: 20px 28px;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 28px;
  div {
    width: 100%;  
    display: flex;
    justify-content: center;
  }
`

const Picker = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  margin-bottom: 28px;
`

const Unit = styled.div`
`

const Numbers = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);  /* 한 줄에 6개씩 배치 */
  gap: 28px;
`;
