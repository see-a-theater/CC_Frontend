import { RegisterWrapper } from "./Register.style.js";
function RegisterStep3( {onNext} ) {
  return (
    <RegisterWrapper>
      <h1>캐스팅 정보</h1>
      <form>
        <div>
          <input type='file' />
          <input type='text' placeholder="배우 이름을 입력하세요"/>
          <input type='text' placeholder="역할을 입력하세요"/>
          <button type="button">+ 추가하기</button>
        </div>
        <div>
          <label>감독 및 스태프</label>
          <input type='text' placeholder="역할"/>
          <input type='text' placeholder="이름을 입력하세요" />
          <button type="button">+ 추가하기</button>
        </div>
        <button type="submit" className="submit" onClick={onNext}>다음</button>
      </form>
    </RegisterWrapper>
  );
}

export default RegisterStep3;
