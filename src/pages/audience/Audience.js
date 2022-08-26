import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { joinLiveCall } from "../../services/liveStream";
import { Container } from "./Audience.styled";

const Audience = () => {
  const channelId = useParams();
  useEffect(() => {
    joinLiveCall(channelId.id);
  }, [channelId]);

  return (
    <Container>
      <div className="nav"> Live...</div>
      <div className="stream" id="remote-playerlist"></div>
    </Container>
  );
};

export default Audience;
