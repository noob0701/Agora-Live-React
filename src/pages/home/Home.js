import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./Home.styled";

const Home = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <div className="heading">Join As</div>
      <div className="content">
        <button
          className="content-button"
          onClick={() => {
            navigate("/host");
          }}
        >
          Host
        </button>
      </div>
    </Container>
  );
};

export default Home;
