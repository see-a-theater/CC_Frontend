import styled from "styled-components";
import HomeIconMenu from "../../components/HomeIconMenu";
import Hr from "../../components/Hr";
import Ranking from "../../components/Ranking";
import ChevronRight from '@/assets/icons/ChevronRight.svg?react';
import BoardPreviewCardList from "../../components/BoardPreviewCardList";
import BoardPreviewList from "../../components/BoardPreviewList";
function Home() {
  return (
    <>
      <Wrapper>
        <h1>오늘 마감인 공연</h1>
        <HomeIconMenu />
      </Wrapper>
      <Hr />
      <Wrapper style={{paddingRight: '0px'}}>
        <h1>소극장 공연 랭킹</h1>
        <Ranking />
        <div style={{paddingRight: '20px'}}>
        <button className='light' style={{marginTop: '26px'}}>소극장 공연 보러가기</button>
        </div>
      </Wrapper>
      <Wrapper style={{paddingRight: '0px'}}>
        <h1>게시판</h1>
        <Bar>
          <h1 style={{fontSize: '14px', marginBottom: '12px'}}>🔥지금 HOT 게시판</h1>
          <ChevronRight />
        </Bar>
        <BoardPreviewCardList />
        <div style={{paddingRight: '20px'}}>
          <BoardPreviewList />
        </div>
        <div style={{paddingRight: '20px', marginTop: '28px'}}>
        <button className='light'>게시판 보러가기</button>
        </div>
      </Wrapper>
    </>
  )
}
export default Home;

const Wrapper = styled.div`
  padding: 28px 20px;

   h1 {
    color: ${({ theme }) => theme.colors.grayMain};
    font-size: ${({ theme }) => theme.font.fontSize.title16};
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
    line-height: normal;
    letter-spacing: -0.48px;
    margin-bottom: 24px;
  }
  button {
    display: flex;
    width: 100%;
    height: 36px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .light {
    color: ${({ theme }) => theme.colors.pink600};
    font-size: ${({ theme }) => theme.font.fontSize.body14};
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
    line-height: normal;
    letter-spacing: -0.42px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.pink200};
    background: ${({ theme }) => theme.colors.pink200};
  }
`
const Bar = styled.div`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  height: 24px;
  margin-bottom: 8px;
  padding-right: 20px;
`