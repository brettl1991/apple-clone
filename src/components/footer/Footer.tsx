import styled from "styled-components";

import { footerData } from "../../data/footerData";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
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

        <hr />
        <FooterNav />
        <section></section>
      </SContent>
    </footer>
  );
};

export default Footer;

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

  ol {
    list-style-position: outside;
    margin: 0;
    padding: 0 17px;
    list-style-position: outside;

    li {
      list-style-type: decimal;
      font-size: 12px;
      line-height: 1.33337;
      font-weight: 400;
      letter-spacing: -0.01em;
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
      font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons",
        "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial",
        sans-serif;
      padding-bottom: 0.8em;
    }
  }

  hr {
    border-bottom: 1px solid #888;
  }
`;
