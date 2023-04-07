import styled from "styled-components";

import { heroData, shopData } from "../../data/sectionData";
import ShopSection from "./ShopSection/ShopSection";
import HeroSection from "./HeroSection/HeroSection";

const HomeSections = () => {
  return (
    <section>
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
            linkFirst={item.url_title_first}
            svgPath={item.svg_path}
            linkSecond={item.url_title_second}
            imgPath={item.img_path}
            titleImgPath={item.title_img_path}
          />
        );
      })}
    </section>
  );
};

export default HomeSections;
