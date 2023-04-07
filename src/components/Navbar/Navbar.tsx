import { useState } from "react";
import { navItems } from "../../data/navbarData";
import NavbarItem from "./NavbarItem";
import styled from "styled-components";
import { navContainerType } from "./NavbarItem.type";

const Navbar = () => {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <>
      {mouseHover && <BackdropDiv mouseHover={mouseHover} />}
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
    </>
  );
};

const BackdropDiv = styled.div<navContainerType>`
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ mouseHover }) => (mouseHover ? 1 : 0)};
  visibility: ${({ mouseHover }) => (mouseHover ? "visible" : "hidden")};
  transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-start 80ms;
  width: 100%;
  backdrop-filter: blur(20px);
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const NavContainer = styled.div<navContainerType>`
  position: fixed;
  z-index: 2;
  width: 100%;
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
