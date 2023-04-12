import styled from "styled-components";
import { BackgroundStyleType, CarouselType } from "./Carousel.Type";

const CarouselItem = ({
  imgPath,
  buttonText,
  genreTitle,
  text,
}: CarouselType) => {
  return (
    <>
      <BackgroundStyle imgPath={imgPath}></BackgroundStyle>
    </>
  );
};

export default CarouselItem;

const BackgroundStyle = styled.div<BackgroundStyleType>`
  background: ${({ imgPath }) => `url(${imgPath})`};
  background-size: cover;
  background-position: center;
  height: 668px;

  display: inline-block;
  width: 100%;
`;
