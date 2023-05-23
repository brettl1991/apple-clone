import styled from "styled-components";

import { footerData } from "../../data/footerData";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <SFooter>
      <SContent>
        <SLAbel>Apple Footer</SLAbel>

        <SNotesSection>
          <ol>
            <li>
              Trade-in values will vary based on the condition, year and
              configuration of your trade-in device. You must be at least 18
              years old to be eligible to trade in for credit or for an Apple
              Gift Card. Not all devices are eligible for credit. More details
              are available from Apple’s{" "}
              <a href="http://appleonlineuk.mpxltd.co.uk/">trade-in partner</a>{" "}
              for trade-in and recycling of eligible devices. Restrictions and
              limitations may apply. Payments are based on the received device
              matching the description you provided when your estimate was made.
              Apple reserves the right to refuse or limit the quantity of any
              device for any reason. Value of your current device may be applied
              towards purchase of a new Apple device. Offer may not be available
              in all stores. Some stores may have additional requirements.
            </li>
            <li>
              Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3
              or later paired with iPhone 6s or later. New subscribers only.
              £9.99/month after trial. Plan automatically renews until
              cancelled. <a href="/uk/promo/">Terms</a> apply.
            </li>
          </ol>
          <ul>
            {footerData.map((fdata) =>
              fdata.unordered_list?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))
            )}
          </ul>
        </SNotesSection>

        <FooterNav />
        <SSection>
          <SFooterShop>
            More ways to shop:{" "}
            <a href="https://www.apple.com/uk/retail/">find an Apple Store</a>{" "}
            or <a href="https://locate.apple.com/uk/en/">other retailers</a>{" "}
            near you. <span>Or call 0800 048 0408.</span>
          </SFooterShop>

          <SLocaleContainer>
            <SLegal>Copyright © 2023 Apple Inc. All rights reserved.</SLegal>
            <SUi>
              <SLi>
                <a href="#">Privacy policy</a>
              </SLi>
              <SLi>
                <a href="#">Use Of Cookies</a>
              </SLi>
              <SLi>
                <a href="#">Terms Of Use</a>
              </SLi>
              <SLi>
                <a href="#">Sales and Refunds</a>
              </SLi>
              <SLi>
                <a href="#">Legal</a>
              </SLi>
              <SLi>
                <a href="#"></a>Site Map
              </SLi>
            </SUi>
            <SFooterLocale>
              <a href="https://www.apple.com/choose-country-region/">
                United Kingdom
              </a>
            </SFooterLocale>
          </SLocaleContainer>
        </SSection>
      </SContent>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  background: #f5f5f7;
  font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons",
    "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1em;
  letter-spacing: -0.02em;
`;

const SContent = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0 22px;
  padding-left: max(22px, env(safe-area-inset-left));
  padding-right: max(22px, env(safe-area-inset-right));
`;

const SLAbel = styled.h2`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
`;

const SNotesSection = styled.section`
  border-bottom: 1px solid var(--footer-border-color);
  padding: 17px 0 11px;
  color: #6e6e73;
  border-bottom: 1px solid #d2d2d7;

  ol {
    list-style-position: outside;
    margin: 0;
    padding: 0 17px;

    li {
      list-style-type: decimal;
      letter-spacing: -0.02em;
      font-size: 12px;
      line-height: 1.33337;
      font-weight: 400;
      font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons",
        "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial",
        sans-serif;
      padding-bottom: 0.8em;

      a {
        text-decoration: underline;
        color: #424245;
      }
    }
  }

  ul {
    list-style: none;
    margin: 0;

    li {
      font-size: 12px;
      line-height: 1.33337;
      font-weight: 400;
      letter-spacing: -0.01em;

      padding-bottom: 0.8em;
    }
  }

  hr {
    border-bottom: 1px solid #888;
  }
`;

const SSection = styled.section`
  padding: 30px 0;

  font-size: 12px;
  line-height: 1.33337;
  color: #6e6e73;
`;

const SFooterShop = styled.div`
  margin-bottom: 7px;
  padding-bottom: 8px;
  border-bottom: 1px solid #d2d2d7;
  letter-spacing: normal;

  a {
    color: #06c;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SLocaleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SFooterLocale = styled.div`
  white-space: nowrap;

  a {
    text-decoration: none;
    color: #424245;
  }
`;

const SLegal = styled.div`
  margin-right: 30px;
  list-style-type: none;
`;

const SUi = styled.ul`
  margin-right: 30px;
  list-style-type: none;
`;

const SLi = styled.li`
  border-right: 1px solid #86868b;
  margin-right: 7px;
  display: inline-block;

  a {
    padding-right: 10px;
    white-space: nowrap;
    text-decoration: none;
    color: #424245;
  }

  &:last-child {
    border: none;
  }
`;
