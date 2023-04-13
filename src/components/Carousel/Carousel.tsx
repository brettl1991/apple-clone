import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import { carouselData } from "../../data/carouselData";
import { useState, useEffect } from "react";
import { CarouselInnerType } from "./Carousel.Type";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < carouselData.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);
  return (
    <ContainerStyle>
      <CaroselStyle>
        <CarouselInner currentSlide={currentSlide}>
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

const CarouselInner = styled.div<CarouselInnerType>`
  white-space: nowrap;
  transform: ${({ currentSlide }) => `translateX(${-currentSlide * 100}%)`};
  transition: ease 1s;
`;
