import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import HomeSections from "./components/Section/HomeSections";

const App = () => {
  return (
    <>
      <Navbar />
      <Main>
        <HomeSections />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding-top: 44px;
`;

export default App;
