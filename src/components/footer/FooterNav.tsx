import styled from "styled-components";
import { FooterType } from "./Footer.type";
import { footerData } from "../../data/footerData";

const FooterNav = ({ title, colum }: FooterType) => {
  return (
    <SNav>
      <SItemContainer>
        {footerData.map((items, idx) => {
          if (items.colum) {
            return (
              <SItems>
                {items.colum?.map((item, idx) => (
                  <div>
                    <STitle>{item.title}</STitle>
                    <ul>
                      {item.submenu?.map((i, idx) => (
                        <SListItem>{i.title}</SListItem>
                      ))}
                    </ul>
                  </div>
                ))}
              </SItems>
            );
          }

          return null;
        })}
      </SItemContainer>
    </SNav>
  );
};

export default FooterNav;

const SNav = styled.nav`
  display: flex;
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons",
    "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  padding-top: 20px;
`;

const SItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 85px;
`;

const SItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const STitle = styled.h3`
  font-size: 1em;
  margin-bottom: 0.8em;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: rgb(90 90 91);
  pointer-events: auto;
`;

const SListItem = styled.li`
  list-style: none;
  color: #424245;
  text-decoration: none;
  letter-spacing: normal;
  cursor: pointer;
  color: #78787b;
  margin-bottom: 0.8em;

  &:hover {
    text-decoration: underline;
  }
`;
