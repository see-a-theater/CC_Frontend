import { RegisterWrapper} from "./Register.style.js";
function RegisterStep5( {onNext} ) {
  return (
    <RegisterWrapper>
      <h1 style={{display:'flex', justifyContent:'center', width: '100%'}}>등록 완료!</h1>
      <form>
        <button type="submit" className="submit" onClick={onNext}>마이페이지 바로가기</button>
      </form>
    </RegisterWrapper>
  );
}

export default RegisterStep5;
