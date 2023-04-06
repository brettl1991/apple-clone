import { navItemType } from "./NavbarItem.type";
import styled from "styled-components";
import SubMenu from "./SubMenu";

const NavbarItem = ({
  title,
  imagePath,
  submenu,
  setMouseHover,
}: navItemType) => {
  return (
    <div>
      <SyledNavBarItem
        onMouseOver={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
      >
        {imagePath ? <NavImg src={imagePath} alt={title} /> : title}
        {submenu && <SubMenu submenu={submenu} />}
      </SyledNavBarItem>
    </div>
  );
};

const SyledNavBarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.8);

  font-size: 12px;
  letter-spacing: -0.01em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  flex-grow: 1;
  height: 44px;

  &:hover > div {
    display: flex;
    justify-content: center;
  }
`;

const NavImg = styled.img`
  height: 44px;
  width: 14px;

  &:hover {
    cursor: default;
  }
`;

export default NavbarItem;
