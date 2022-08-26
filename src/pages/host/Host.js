import React, { useState } from "react";
import { startCall, leaveCall } from "../../services/liveStream";
import { Container } from "./Host.styled";
const Host = () => {
  const [stream, setstream] = useState(false);
  return (
    <Container>
      <div className="nav">
        <div className="item-left">
          {!stream ? (
            <button
              className="stream-button"
              onClick={() => {
                setstream(true);
                startCall();
              }}
            >
              Start Stream
            </button>
          ) : (
            <button
              className="stream-button"
              onClick={() => {
                setstream(false);
                leaveCall();
              }}
            >
              Leave Stream
            </button>
          )}
        </div>
        <div className="item-right" id="linkId"></div>
      </div>
      <div className="stream-player" id="local-player"></div>
      <div></div>
    </Container>
  );
};

export default Host;
