import styled from "styled-components";
function BoardPreviewList() {
  const mockData = [
    {
      tag: '일반',
      title: '아이폰 16 찾아요',
      text: '알라딘 공연에서 아이폰 16pro를 두고 온거 같은데 혹시 발견하시면 연락주세요',
    },
    {
      tag: '일반',
      title: '아이폰 16 찾아요',
      text: '알라딘 공연에서 아이폰 16pro를 두고 온거 같은데 혹시 발견하시면 연락주세요',
    },
    {
      tag: '일반',
      title: '아이폰 16 찾아요',
      text: '알라딘 공연에서 아이폰 16pro를 두고 온거 같은데 혹시 발견하시면 연락주세요',
    },
    {
      tag: '일반',
      title: '아이폰 16 찾아요',
      text: '알라딘 공연에서 아이폰 16pro를 두고 온거 같은데 혹시 발견하시면 연락주세요',
    },
    {
      tag: '일반',
      title: '아이폰 16 찾아요',
      text: '알라딘 공연에서 아이폰 16pro를 두고 온거 같은데 혹시 발견하시면 연락주세요',
    },
  ]
  return (
    <Wrapper>
      <List>
        {mockData.map((item, index) => (
          <Li>
            <div>{item.tag}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Li>
        ))}
      </List>
    </Wrapper>
  )
}
export default BoardPreviewList;

const Wrapper = styled.div`
  
`
const List = styled.div`
&>div {
border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
}
&>div:last-child {
  border-bottom: none;
}
`

const Li = styled.div`
padding: 16px 0px;

  div {
    display: inline-flex; 
    padding: 2px 8px; 
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.pink200};
    font-size: 12px;
    font-weight: bold;
    color:${({ theme }) => theme.colors.pink600};
    margin-bottom: 14px;
  }
    h3 {
    color: var(--color-gray-maintext, #000);

    /* Web-app/body-14-bold */
    font-family: "NanumSquare Neo OTF";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.42px;
        }
    p {
    color: ${({ theme }) => theme.colors.gray400};
    font-family: "NanumSquare Neo OTF";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 138.462% */
    letter-spacing: -0.39px;
    }
`