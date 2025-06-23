import styled from "styled-components";
import Poster from '../assets/images/test-poster1.png';
function Ranking() {
  console.log('Poster path:', Poster);
  const mockData = [
    {
      title: "실종",
      location: "홍익대학교 학생회관 3층 소극장장장장",
      date: "2025.10.13 (목) 17:00",
      img: Poster, 
    },
    {
      title: "무대 밖",
      location: "혜화 소극장ABC",
      date: "2025.11.01 (토) 14:00",
      img: Poster, 
    },
    {
      title: "그림자놀이",
      location: "신촌 작은극장",
      date: "2025.12.20 (일) 19:30",
      img: Poster, 
    },
    {
      title: "그림자놀이",
      location: "신촌 작은극장",
      date: "2025.12.20 (일) 19:30",
      img: Poster, 
    },
    {
      title: "그림자놀이",
      location: "신촌 작은극장",
      date: "2025.12.20 (일) 19:30",
      img: Poster, 
    },
    {
      title: "그림자놀이",
      location: "신촌 작은극장",
      date: "2025.12.20 (일) 19:30",
      img: Poster, 
    },
  ];
  return(
    <Wrapper>
      <CardList>
      {mockData.map((item, index) => (
          <Card key={index}>
            <Img background={item.img}>
  <IndexLabel>{index + 1}</IndexLabel>
</Img>
            <h3>{item.title}</h3>
            <p>{item.location}</p>
            <p className="extra">{item.date}</p>
          </Card>
        ))}
      </CardList>
    </Wrapper>
  )
}
export default Ranking;

const Wrapper = styled.div`
 
  
`;

const Card = styled.div`
  width: 128px;
  h3 {
  color: ${({ theme }) => theme.colors.grayMain};
  font-size: ${({ theme }) => theme.font.fontSize.body14};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
  margin-bottom: 8px;
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
  }
  p {
    color: var(--color-gray-maintext, #000);  
    font-size: ${({ theme }) => theme.font.fontSize.body10};
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
  }
  .extra {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const Img = styled.div`
position: relative;
width: 128px;
height: 180px;
border-radius: 3px;
background: 
  linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.58%, rgba(0, 0, 0, 0.50) 100%),
  url(${({ background }) => background}) center/cover no-repeat;
margin-bottom: 12px;
  `;
  const IndexLabel = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  color: white;
  font-size: ${({ theme }) => theme.font.fontSize.headline20};
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 8px; /* 스크롤 안 보이게 여유 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE/Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`;
