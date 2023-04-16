import styled from "styled-components";
import { CarouselControlType } from "./Carousel.Type";

const CarouselControls = ({ next, prev }: CarouselControlType) => {
  return (
    <CarouselControlDivStyle>
      <CarouselControlULStyle>
        <PreviousStyle>
          <ButtonStyle onClick={prev}>Prev</ButtonStyle>
        </PreviousStyle>
        <NextStyle>
          <ButtonStyle onClick={next}>Next</ButtonStyle>
        </NextStyle>
      </CarouselControlULStyle>
    </CarouselControlDivStyle>
  );
};

export default CarouselControls;

const CarouselControlDivStyle = styled.div``;

const CarouselControlULStyle = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
`;

const PreviousStyle = styled.li`
  position: absolute;
  bottom: 38px;
  top: 0;
  right: calc(50% + 640px);
  left: 0;
  scroll-snap-align: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const NextStyle = styled.li`
  position: absolute;
  bottom: 38px;
  top: 0;
  left: calc(50% + 640px);
  right: 0;
`;

const ButtonStyle = styled.button`
  border-radius: 0;
  background: none !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 0;
  pointer-events: all;
  border: none;
`;
