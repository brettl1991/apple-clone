import styled from "styled-components";
import { BackgroundStyleType, CarouselItemType } from "./Carousel.Type";

const CarouselItem = ({
  imgPath,
  buttonText,
  genreTitle,
  text,
}: CarouselItemType) => {
  return (
    <>
      <BackgroundStyle imgPath={imgPath}></BackgroundStyle>
    </>
  );
};

export default CarouselItem;

const BackgroundStyle = styled.div<BackgroundStyleType>`
  background: ${({ imgPath }) => `url(${imgPath})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 668px;
  display: inline-block;
  width: 100%;
`;
