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
    <span>
      {title}
      <a href={url}>
        {urlTitle}
        <Img src={svgPath} alt="right-chevron" />
      </a>
    </span>
  );
};

export default ShopSection;

const Img = styled.img`
  width: 12px;
`;
