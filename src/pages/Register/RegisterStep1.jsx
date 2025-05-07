import styled from "styled-components";
import { RegisterWrapper } from "./Register.style.js";
import ImageUploadBox from "../../components/ImageUploadBox.jsx";
import Counter from "../../components/Counter.jsx";
import DateInput from "../../components/DateInput.jsx";
import UnitInput from "../../components/UnitInput.jsx";

function RegisterStep1( {onNext} ) {
  return (
    <RegisterWrapper>
      <h1>기본 정보</h1>
      <form>
        <div>
          <label style={{marginBottom:'6px'}}>포스터 썸네일</label>
          <p style={{marginBottom:'12px'}}>한장만 등록 가능합니다.</p>
          <ImageUploadBox />
        </div>
        <div>
          <label>공연 이름</label>
          <input type="text" placeholder="등록할 공연의 이름을 입력하세요" />
        </div>
        <div>
          <label>등록 기관</label>
          <input type="text" placeholder="등록하는 기관(공연진)의 이름을 입력하세요" />
        </div>
        <div>
          <label>줄거리</label>
          <textarea placeholder="공연의 줄거리를 입력하세요 (1,000자 이하)" />
        </div>
        <div>
          <label>해시태그</label>
          <input type="text" placeholder="예) #뮤지컬 #드라마" />
        </div>
        <div>
          <label>공연장 주소</label>
          <input type="text" placeholder="지번, 도로명, 건물명으로 검색해주세요" />
          <input type="text" placeholder="상세주소를 입력해주세요" />
        </div>
        <div>
          <label>공연 회차</label>
          <Counter />   
        </div>
        <div>
          <label>공연 기간</label>
          <p>1회차</p>
          <DateInput />
        </div>
        <div>
          <label>러닝타임</label>
          <UnitInput placeholder="공연이 진행되는 시간을 입력해주세요 (분 단위)" unit="분"/>
        </div>
        <div>
          <label>일반 예매</label>
          <UnitInput placeholder="가격을 입력해주세요" unit="원"/>
          <button type="button">+ 추가하기</button>
        </div>
        <div>
          <label>할인</label>
          <input type="text" placeholder="할인명을 입력해주세요" />
          <UnitInput placeholder="가격을 입력해주세요" unit="원"/>
          <button type="button">+ 추가하기</button>
        </div>
        <div>
          <label>계좌번호</label>
          <select>
            <option value="">은행을 선택해주세요</option>
            <option value="국민은행">국민은행</option>
            <option value="신한은행">신한은행</option>
            <option value="하나은행">하나은행</option>
            <option value="우리은행">우리은행</option>
          </select>
          <input type="text" placeholder="(-) 제외한 계좌번호를 입력해주세요" />
          <input type="text" placeholder="입금자명을 써주세요" />
        </div>
        <div>
          <label>연락처</label>
          <input type="text" placeholder="문의에 쓰일 SNS나 연락처를 입력해주세요" />
        </div>
        <button type="submit" className="submit" onClick={onNext}>다음</button>
      </form>
    </RegisterWrapper>
  );
}

export default RegisterStep1;

