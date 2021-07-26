import React from "react";
import styled from "styled-components";

const AppContainer = styled.main`
  max-width: 1280px;
  min-width: 320px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppContainer>
      <h1 className="apptitile">WebPack + React</h1>
    </AppContainer>
  );
};

export default App;
