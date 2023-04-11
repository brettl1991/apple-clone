import styled from "styled-components";

import { collectionData, heroData, shopData } from "../../data/sectionData";
import ShopSection from "./ShopSection/ShopSection";
import HeroSection from "./HeroSection/HeroSection";
import CollectionSection from "./CollectionSection/CollectionSection";

const HomeSections = () => {
  return (
    <>
      {shopData.map((item, idx) => (
        <ShopSection
          key={idx}
          title={item.title}
          svgPath={item.svg_path}
          url={item.url}
          urlTitle={item.url_title}
        />
      ))}
      {heroData.map((item, idx) => (
        <HeroSection
          key={idx}
          url={item.url}
          title={item.title}
          subTitle={item.sub_title}
          links={item.url_title_links}
          svgPath={item.svg_path}
          imgPath={item.img_path}
          titleImgPath={item.title_img_path}
          titleColor={item.title_color}
        />
      ))}
      <GridContainerStyle>
        {collectionData.map((item, idx) => (
          <CollectionSection
            key={idx}
            url={item.url}
            title={item.title}
            subTitle={item.sub_title}
            links={item.url_title_links}
            svgPath={item.svg_path}
            imgPath={item.img_path}
            titleImgPath={item.title_img_path}
            titleColor={item.title_color}
            linkColor={item.link_Color}
          />
        ))}
      </GridContainerStyle>
    </>
  );
};

const GridContainerStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  //get gap around and between
  grid-auto-rows: minmax(95px, auto);
  padding: 1em;
`;

export default HomeSections;
