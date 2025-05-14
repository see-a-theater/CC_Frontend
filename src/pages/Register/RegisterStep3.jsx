import ImageUploadBox from "../../components/ImageUploadBox.jsx";
import styled from "styled-components";
import { RegisterWrapper } from "./Register.style.js";
import { useState } from "react";
function RegisterStep3( {onNext} ) {
  const [actors, setActors] = useState([{ id: Date.now() }]);
  const [staffs, setStaffs] = useState([{ id: Date.now() + 1 }]); // 다른 id

  const addActor = () => {
    setActors(prev => [...prev, { id: Date.now() }]);
  };

  const addStaff = () => {
    setStaffs(prev => [...prev, { id: Date.now() }]);
  };
  return (
    <RegisterWrapper>
      <h1>캐스팅 정보</h1>
      <form>
        <div>
        {actors.map(actor => (
        <ActorWrapper key={actor.id}>
          <div>
          <ImageUploadBox size='89px' round='true'/>
          </div>
          <Right>
            <input type='text' placeholder="배우 이름을 입력하세요" className="input"/>
            <input type='text' placeholder="역할을 입력하세요" className="input" style={{marginBottom: '0px'}}/>
          </Right>
          </ActorWrapper>
      ))}
        <button type="button" onClick={addActor} style={{marginBottom: '24px'}}>+ 추가하기</button>
        <label>감독 및 스태프</label>
        {staffs.map(staff => (
          <DirectorWrapper key={staff.id}>
            <input type='text' placeholder="역할" className="input"/>
            <input type='text' placeholder="이름을 입력하세요" className="input" />
          </DirectorWrapper>
        ))}
        
          <button type="button" onClick={addStaff} style={{marginBottom: '24px'}}>+ 추가하기</button>
        <button type="submit" className="submit" onClick={onNext}>다음</button>
        </div>
      </form>
    </RegisterWrapper>
  );
}

export default RegisterStep3;

const Right = styled.div`
`

const ActorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  & > div:first-child {
    flex: 1; /* ImageUploadBox */
  }

  & > div:last-child {
    flex: 2; /* Right (input 2개 들어있는 div) */
  }

`

const DirectorWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 16px;
  & .input:first-child {
    flex: 1; /* 역할 */
  }

  & .input:last-child {
    flex: 2; /* 이름 */
  }

`