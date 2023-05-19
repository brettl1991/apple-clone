import styled from "styled-components";
import { FooterType } from "./Footer.type";
import { footerData } from "../../data/footerData";

const FooterNav = ({ title, colum }: FooterType) => {
  return (
    <SNav>
      <div>
        {footerData.map((items, idx) => {
          if (items.colum) {
            return (
              <div>
                {items.colum?.map((item, idx) => (
                  <div>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.submenu?.map((i, idx) => (
                        <li>{i.title}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>
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
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;

const SListItems = styled.li`
  list-style: none;
`;
