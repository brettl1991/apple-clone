import { useState } from "react";
import { navItems } from "../../data";
import NavbarItem from "./NavbarItem";
import styled from "styled-components";
import { navContainerType } from "./NavbarItem.type";

const Navbar = () => {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <NavContainer mouseHover={mouseHover}>
      <StyledConatiner>
        <StyledNav>
          {navItems.map((item, idx) => (
            <NavbarItem
              setMouseHover={setMouseHover}
              key={idx}
              title={item.title}
              imagePath={item.img_path}
              submenu={item.submenu}
            />
          ))}
        </StyledNav>
      </StyledConatiner>
    </NavContainer>
  );
};

const NavContainer = styled.div<navContainerType>`
  position: relative;
  /* background-color: black; */

  background-color: ${({ mouseHover }) =>
    !mouseHover ? "rgb(63, 61, 61)" : "rgba(22, 22, 23, 0.8)"};
`;

const StyledConatiner = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
