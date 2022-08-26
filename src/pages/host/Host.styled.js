import styled from "styled-components";

export const Container = styled.div`
  color: white;
  background-color: #01000f;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10% 70% 20;
  @media (max-width: 1000px) {
    height: 100%;
  }
  .nav {
    display: grid;
    grid-template-columns: 30% 70%;
    .item-left {
      padding-top: 1rem;
      padding-left: 3rem;
      .stream-button{
        width: 100%
        height: 100%
      }
    }
    .item-right {
      text-align: right;
      padding-right: 3rem;
    }
  }
  .stream-player{
      margin: auto;
      width: 50vw;
      height: 70vh;
      border: 3px solid white;
    }
`;
