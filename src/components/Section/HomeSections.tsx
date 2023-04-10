import styled from "styled-components";

import { heroData, shopData } from "../../data/sectionData";
import ShopSection from "./ShopSection/ShopSection";
import HeroSection from "./HeroSection/HeroSection";

const HomeSections = () => {
  return (
    <MainSectionStyle>
      {shopData.map((item, id) => {
        return (
          <ShopSection
            key={item.id}
            title={item.title}
            svgPath={item.svg_path}
            url={item.url}
            urlTitle={item.url_title}
          />
        );
      })}
      {heroData.map((item, id) => {
        return (
          <HeroSection
            key={item.id}
            url={item.url}
            title={item.title}
            subTitle={item.sub_title}
            links={item.url_title_links}
            svgPath={item.svg_path}
            imgPath={item.img_path}
            titleImgPath={item.title_img_path}
            titleColor={item.title_color}
          />
        );
      })}
    </MainSectionStyle>
  );
};

const MainSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
`;

export default HomeSections;
