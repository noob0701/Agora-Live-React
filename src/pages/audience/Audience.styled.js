import styled from "styled-components";

export const Container = styled.div`
  color: white;
  background-color: #01000f;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10% 90%;
  @media (max-width: 1000px) {
    height: 100%;
  }

  .nav {
    font-size: 2rem;
    text-align: center;
    padding-top: 16px;
  }
  .stream {
    height: 70vh;
    width: 50vw;
    border: 2px solid white;
    align-items: center;
    margin: auto;
    @media (max-width: 1000px) {
      height: 100vh;
      height: 100vw;
    }
  }
`;
