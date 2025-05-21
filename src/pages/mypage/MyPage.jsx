import styled from "styled-components";
function MyPage() {
  return (
    <Wrapper>
    <Row>
    <h1 className='pink'>QWERS</h1><h1 className='bold'>님</h1>
    </Row>
    <section>
    <h1 >MY</h1>
    <ul>
      <li>내 티켓</li>
      <li>내가 쓴 글</li>
      <li>좋아요한 극단</li>
    </ul>
    </section>
    <section>
    <h1>계정 관리</h1>
    <ul>
      <li>
        계정 연결 설정
        <p className='extra'>로그인 편의 기능을 활용</p>
      </li>
    </ul>
    </section>
    <section>
      <h1>기타</h1>
      <ul>
        <li>1:1 문의</li>
        <li>CC 정보</li>
        <li className='red'>회원 탈퇴</li>
      </ul>
    </section>
    </Wrapper>
    
  )
}
export default MyPage;

const Wrapper = styled.div`
padding: 20px;  
display: flex;
flex-direction: column;
gap: 40px;
h1 {
  color: var(--color-gray-maintext, #000);

/* Web-app/body-14-extrabold */
font-family: "NanumSquare Neo OTF";
font-size: 14px;
font-style: normal;
font-weight: 800;
line-height: normal;
letter-spacing: -0.42px;
  }
.pink {
  color: ${({theme}) => theme.colors.pink600};
}
.bold {
  font-weight: ${({theme}) => theme.font.fontWeight.bold};
}
section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
li {
  list-style: none;
  display: flex;
  height: 40px;
  padding: 8px 20px;
  align-items: center;
  gap: 20px;
  border-radius: 3px;
background: var(--color-gray-200, #F8F8F8);
}
.extra {
color: var(--color-gray-400, #929292);

/* Web-app/body-10-bold */
font-family: "NanumSquare Neo OTF";
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.3px;
}
.red {
  color: ${({theme}) => theme.colors.redWarning};
}
`
const Row = styled.div`
display: flex;
flex-direction: row;
`