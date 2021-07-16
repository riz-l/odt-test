// Import: Packages
import React from "react";
import styled from "styled-components";

// Import: Components
import { Header } from "./app/components";

// Component: App
export default function App() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <h1>This should say Hi</h1>
      </Wrapper>
    </Container>
  );
}

// Element: Container
const Container = styled.div`
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  width: 80%;
`;

// Element: Wrapper
const Wrapper = styled.div`
  background-color: tomato;
  height: auto;
  min-height: calc(100vh - 200px);
  padding: 2rem;
  text-align: center;

  & h1 {
    font-size: 4rem;
  }

  & p {
    font-size: 2rem;
  }
`;
