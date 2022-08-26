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

  .heading {
    text-align: center;
    font-size: 4rem;
  }
  .content {
    display: grid;
    grid-template-columns: 50% 50%;
    .content {
      .content-button {
        height: 80vh;
        width: 100vh;
        background: #01000f;
        color: white;
        font-size: 3rem;
        :hover {
          background: #010000;
          cursor: pointer;
        }
      }
    }
  }
`;
