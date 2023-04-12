import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import HomeSections from "./components/Section/HomeSections";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Main>
        <HomeSections />
        <Carousel />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding-top: 44px;
`;

export default App;
