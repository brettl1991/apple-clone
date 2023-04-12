import React from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import { carouselData } from "../../data/carouselData";

const Carousel = () => {
  return (
    <ContainerStyle>
      <CaroselStyle>
        <CarouselInner>
          {carouselData.map((slide, idx) => (
            <CarouselItem
              key={idx}
              imgPath={slide.img_path}
              buttonText={slide.button_title}
              genreTitle={slide.genre_title}
              text={slide.text}
            />
          ))}
        </CarouselInner>
      </CaroselStyle>
    </ContainerStyle>
  );
};

export default Carousel;

const ContainerStyle = styled.div`
  min-height: 706px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CaroselStyle = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 1250px;
`;

const CarouselInner = styled.div`
  white-space: nowrap;
`;
