import GlobalStyle from "./styles/GlobalStyles";
import Todo from "./features/Todo";
import styled from "styled-components";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 44px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Todo />
      </Main>
    </>
  );
};

export default App;
