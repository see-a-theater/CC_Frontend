import { RegisterWrapper } from "./Register.style.js";
function RegisterStep2( {onNext} ) {
  return (
    <RegisterWrapper>
      <h1>공연 정보</h1>
      <form>
        <div>
          <label>공연시간 정보</label>
          <textarea placeholder="예매 가능 시간이나 공연 시간에 대해 입력하세요 (1,000자 이하) 
예) 공연 관람 3시간 전까지 예매 가능"/>
        </div>
        <div>
          <label>공지사항</label>
          <textarea placeholder="예) 예매시에 공연 관리자가 안내하는 입금계좌로 입금하시고,
공연 관리자의 입금 확인을 통해 티켓 예매 확인을 받을 수 
있습니다. 공연 관리자가 입금을 확인해야 하므로 티켓 확인까지 
시간이 걸릴 수 있습니다." />
        </div>
        <div>
          <label style={{marginBottom:'6px'}}>공연 상세 이미지</label>
          <p>(선택사항)</p>
          <input type='file' />
        </div>
        <div>
          <label style={{marginBottom:'6px'}}>공연장 사진</label>
          <p>(사진을 등록하면 자동으로 시야확인에 추가됩니다.)</p>
          <input type='file' />
        </div>
        <button type="submit" className="submit" onClick={onNext}>다음</button>
      </form>
    </RegisterWrapper>
  );
}

export default RegisterStep2;
