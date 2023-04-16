import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import { carouselData } from "../../data/carouselData";
import { useState } from "react";
import { CarouselInnerType } from "./Carousel.Type";
import CarouselControls from "./CarouselControls";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : carouselData.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < carouselData.length + 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide((currentSlide) =>
  //       currentSlide < carouselData.length - 1 ? currentSlide + 1 : 0
  //     );
  //   }, 3000);

  //   return () => clearInterval(slideInterval);
  // }, []);
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
      <CarouselControls next={next} prev={prev} />
    </ContainerStyle>
  );
};

export default Carousel;

const ContainerStyle = styled.div`
  min-height: 706px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const CaroselStyle = styled.div`
  margin: 0 auto;
  width: 1250px;
  position: relative;
`;

const CarouselInner = styled.div<CarouselInnerType>`
  white-space: nowrap;
  transform: ${({ currentSlide }) => `translateX(${-currentSlide * 100}%)`};
  transition: ease 1s;
`;
