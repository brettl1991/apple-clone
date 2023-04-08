import { submenuType } from "./NavbarItem.type";
import styled from "styled-components";

const SubMenu = ({ submenu }: submenuType) => {
  return (
    <SubDiv>
      <SubDivUl>
        {submenu.map((item, idx) => (
          <li key={idx}>
            <SubMenuText>{item.title}</SubMenuText>
            <SubUl>
              {item.submenu.map((subItem, subIdx) => (
                <SubLi key={subIdx}>
                  <a href={subItem.url}>{subItem.title}</a>
                </SubLi>
              ))}
            </SubUl>
          </li>
        ))}
      </SubDivUl>
    </SubDiv>
  );
};

const SubDiv = styled.div`
  display: flex;
  visibility: hidden;
  position: absolute;

  left: 0;
  right: 0;
  top: 44px;
  background: rgba(22, 22, 23, 0.8);
`;

const SubDivUl = styled.ul`
  display: flex;
  width: 1024px;
  gap: 120px;
  list-style: none;
  padding: 20px 0;
`;

const SubUl = styled.ul`
  list-style: none;
  padding: 20px 0;
`;

const SubLi = styled.li`
  a {
    text-decoration: none;
    color: #ccc;
    font-size: 20px;
    font-weight: 600;
  }
`;

const SubMenuText = styled.h2`
  font-size: 12px;
  font-weight: normal;
  color: rgb(255 255 255 / 80%);
`;

export default SubMenu;
