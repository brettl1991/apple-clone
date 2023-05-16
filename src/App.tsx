import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import HomeSections from "./components/Section/HomeSections";
import Carousel from "./components/Carousel/Carousel";
import { carouselData } from "./data/carouselData";
import CarouselItem from "./components/Carousel/CarouselItem";

const App = () => {
  return (
    <>
      <Navbar />
      <Main>
        <HomeSections />
        <Carousel visibleItemsCount={3} isInfinite>
          {carouselData.map((slide, idx) => (
            <CarouselItem
              key={idx}
              imgPath={slide.img_path}
              buttonText={slide.button_title}
              genreTitle={slide.genre_title}
              text={slide.text}
            />
          ))}
        </Carousel>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding-top: 44px;
`;

export default App;
