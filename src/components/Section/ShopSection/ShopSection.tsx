import styled from "styled-components";
import { shopSectionType } from "../Section.type";

const ShopSection = ({
  title,
  svgPath,
  id,
  url,
  urlTitle,
}: shopSectionType) => {
  return (
    <Container>
      <Text>
        {title}{" "}
        <sup>
          <a href={url}>1</a>
        </sup>
        &nbsp;&nbsp;&nbsp;
        <a href={url}>
          {urlTitle}
          <span>
            <Img src={svgPath} alt="right-chevron" />
          </span>
        </a>
      </Text>
    </Container>
  );
};

export default ShopSection;

const Container = styled.section`
  text-align: center;
`;

const Text = styled.span`
  font-size: 14px;
  display: inline-block;
  padding: 12px 0;

  sup {
    position: relative;
    font-size: 0.6em;
    vertical-align: baseline;

    a {
      position: absolute;
      color: black;
    }
  }

  a {
    text-decoration: none;
    color: #06c;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Img = styled.img`
  padding-left: 0.2em;
  color: #06c;
  width: 12px;
  letter-spacing: inherit;
`;
