import styled from "styled-components";
import Movie from '@/assets/icons/Movie.svg?react';
import Board from '@/assets/icons/Board.svg?react';
import Photo from '@/assets/icons/Photo.svg?react';
import Profile from '@/assets/icons/Profile.svg?react';
import Information from '@/assets/icons/information.svg?react';
function HomeIconMenu() {
  return (
    <Wrapper>
      <div>
        <Movie />
        <span>소극장 공연</span>
      </div>
      <div>
        <Board />
        <span>게시판</span>
      </div>
      <div>
        <Photo />
        <span>사진첩</span>
      </div>
      <div>
        <Profile />
        <span>프로필</span>
      </div>
      <div>
        <Information />
        <span>cc</span>
      </div>
    </Wrapper>
  )
}
export default HomeIconMenu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 52px;
    width: 52px;
    span {
      color:${({ theme }) => theme.colors.pink600};

      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.3px;
    }
  }
`