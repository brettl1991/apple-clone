import styled from "styled-components";
import {
  ContentStyleType,
  HeroSectionType,
  MainImageStyleType,
  TitleImageType,
} from "../Section.type";

const HeroSection = ({
  id,
  url,
  title,
  subTitle,
  links,
  svgPath,
  imgPath,
  titleImgPath,
  titleColor,
}: HeroSectionType) => {
  return (
    <section>
      <ConatinerStyle imgPath={imgPath}>
        <ContentStyle titleColor={titleColor}>
          {titleImgPath ? (
            <SectionThreeStyle titleImgPath={titleImgPath} />
          ) : (
            <h2>{title}</h2>
          )}
          <h3>{subTitle}</h3>
          <LinksContainerStyle>
            {links?.map((link) => (
              <LinkStyle href={url}>
                {link}
                <SVGStyle src={svgPath} alt={id} />
              </LinkStyle>
            ))}
          </LinksContainerStyle>
        </ContentStyle>
      </ConatinerStyle>
    </section>
  );
};

const ConatinerStyle = styled.div<MainImageStyleType>`
  background: ${({ imgPath }) => `url(${imgPath})`} no-repeat center;
  background-size: cover;
  width: 100%;
  height: 692px;
  cursor: pointer;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
`;

const ContentStyle = styled.div<ContentStyleType>`
  color: ${({ titleColor }) => titleColor};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-top: 47px;
  line-height: 1.10722;
  font-weight: 400;

  h2 {
    font-size: 56px;
    letter-spacing: -0.005em;
  }

  h3 {
    font-size: 28px;
    letter-spacing: 0.004em;
  }
`;

const SectionThreeStyle = styled.div<TitleImageType>`
  background: ${({ titleImgPath }) => `url(${titleImgPath})`}no-repeat center;
  height: 71px;
  width: 187px;
  background-size: cover;
`;

const LinksContainerStyle = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkStyle = styled.a`
  font-size: 21px;
  line-height: 1.381;
  font-weight: 400;
  text-decoration: none;
  color: #2997ff;

  &:hover {
    text-decoration: underline;
  }
`;

const SVGStyle = styled.img`
  color: #2997ff;
  width: 13px;
`;

export default HeroSection;
