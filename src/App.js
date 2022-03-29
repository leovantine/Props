import React, { Component } from "react";
import About from "./components/About.js";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 40px;
  color: whitesmoke;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #03a0e8;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>Olá</Title>
        <About name="Leonardo" age="16" studying="Programming"></About>
      </Container>
    );
  }
}

export default App;
