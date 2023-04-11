import styled from "styled-components";
import {
  CollectionSectionType,
  LinkStyleType,
  MainImageStyleType,
  TitleImgStyleType,
} from "../Section.type";

const CollectionSection = ({
  id,
  url,
  title,
  subTitle,
  links,
  svgPath,
  imgPath,
  titleImgPath,
  titleColor,
  linkColor,
}: CollectionSectionType) => {
  return (
    <ContentStyle imgPath={imgPath} titleColor={titleColor}>
      {titleImgPath ? (
        <TitleImgStyle titleImgPath={titleImgPath}></TitleImgStyle>
      ) : (
        <h2>{title}</h2>
      )}
      <h5>{subTitle}</h5>
      <LinkContainerStyle>
        {links?.map((link) => (
          <LinkStyle href={url} linkColor={linkColor}>
            {link}
            <SVGStyle src={svgPath} alt={id} />
          </LinkStyle>
        ))}
      </LinkContainerStyle>
    </ContentStyle>
  );
};

export default CollectionSection;

const ContentStyle = styled.div<MainImageStyleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ imgPath }) => `url(${imgPath})`} no-repeat center;
  color: ${({ titleColor }) => titleColor};
  background-size: cover;
  width: 100%;
  height: 580px;
  cursor: pointer;
  gap: 10px;
  padding-top: 30px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;

  &:first-child {
    justify-content: flex-end;
    padding-bottom: 30px;

    h5 {
      margin-top: 12px;
      max-width: 415px;
      text-align: center;
    }
  }

  h2 {
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0em;
  }

  h5 {
    font-size: 21px;
    line-height: 1.2381;
    font-weight: 400;
    letter-spacing: 0.016em;
  }

  &:nth-last-child(-n + 2) {
    h5 {
      max-width: 245px;
      text-align: center;
    }
  }
`;

const LinkContainerStyle = styled.div`
  display: flex;
  gap: 20px;
  font-size: 17px;
`;

const LinkStyle = styled.a<LinkStyleType>`
  color: ${({ linkColor }) => (linkColor ? linkColor : "#2997ff")};
  line-height: 1.381;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TitleImgStyle = styled.div<TitleImgStyleType>`
  background: ${({ titleImgPath }) => `url(${titleImgPath})`}no-repeat center;
  height: 39px;
  width: 430px;
  background-size: contain;
`;

const SVGStyle = styled.img`
  color: #2997ff;
  width: 13px;
`;
