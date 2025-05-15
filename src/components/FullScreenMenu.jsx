import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

  // menuData.js
  function FullScreenMenu({ onClose }) {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("");
  
    const menuItems = [
      {
        label: '홈',
        path: '/',
      },
      {
        label: '소극장 공연',
        subItems: [
          { label: '현재 진행중인 소극장 공연', path: '/small-theater/current' },
          { label: '소극장 공연 등록하기', path: '/small-theater/register' },
        ],
      },
      {
        label: '게시판',
        path: '/board',
      },
      {
        label: '사진첩',
        path: '/gallery',
      },
      {
        label: '정보',
        path: '/info',
      },
      {
        label: '마이페이지',
        path: '/mypage',
      },
    ];
  
    const handleClick = (label, path) => {
      setActiveMenu(label);
      navigate(path);
      onClose(); // 메뉴 닫기
    };
  
    return (
      <Wrapper>
        <button onClick={onClose}>X</button>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => item.path && handleClick(item.label, item.path)}
                  className={activeMenu === item.label ? "danger" : ""}
                >
                  {item.label}
                </div>
                {item.subItems && (
                  <Ul>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <div
                          onClick={() => handleClick(subItem.label, subItem.path)}
                          className={activeMenu === subItem.label ? "danger" : ""}
                        >
                          {subItem.label}
                        </div>
                      </li>
                    ))}
                  </Ul>
                )}
              </li>
            ))}
          </ul>
          <div>
            <div onClick={() => handleClick("로그아웃", "/logout")}>로그아웃</div>
            <div
              style={{marginTop: '20px'}}
              className="danger"
              onClick={() => handleClick("회원 탈퇴", "/withdrawal")}
            >
              회원 탈퇴
            </div>
          </div>
        </nav>
      </Wrapper>
    );
  }
  
  export default FullScreenMenu;

const Wrapper = styled.div`
  height: 100vh;
  padding: 16px 16px 52px 16px;
  .danger {
    color: ${({theme}) => theme.colors.redWarning};
  }
  nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      padding: 0;
      margin: 0;

      > li {
        list-style: none;
        border-bottom: 1px solid #ddd; /* 원하는 색상 */
        padding: 12px 0;
      }
        > li:last-child {
        border: none;
        }

      /* 하위 ul 내부의 li에는 border 제거 */
      li ul li {
        border-bottom: none;
        padding: 12px 12px;
      }
    }
  }
`;

const Ul = styled.ul`
  li:first-child {
  margin-top: 12px;
}
`
