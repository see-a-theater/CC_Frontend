import ImageUploadBox from "../../components/ImageUploadBox.jsx";
import styled from "styled-components";
import { RegisterWrapper } from "./Register.style.js";
function RegisterStep3( {onNext} ) {
  return (
    <RegisterWrapper>
      <h1>캐스팅 정보</h1>
      <form>
        <div>
        <ActorWrapper>
          <ImageUploadBox size='100px' round='true'/>
          <Right>
            <input type='text' placeholder="배우 이름을 입력하세요" className="input"/>
            <input type='text' placeholder="역할을 입력하세요" className="input"/>
          </Right>
        </ActorWrapper>
        <button type="button">+ 추가하기</button>
        <DirectorWrapper>
          <label>감독 및 스태프</label>
          <input type='text' placeholder="역할" className="input"/>
          <input type='text' placeholder="이름을 입력하세요" className="input" />
          </DirectorWrapper>
          <button type="button">+ 추가하기</button>
        <button type="submit" className="submit" onClick={onNext}>다음</button>
        </div>
      </form>
    </RegisterWrapper>
  );
}

export default RegisterStep3;

const Right = styled.div`
width: 64%;
`

const ActorWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`

const DirectorWrapper = styled.div`
width: 100%;
`