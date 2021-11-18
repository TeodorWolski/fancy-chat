import React from "react";
import { Wrapper, StyledHeading, ChatMessages } from "./Chat.styles";

const Chat = () => (
  <Wrapper>
    <>
      <StyledHeading>Room-name</StyledHeading>
      <ChatMessages>{/** Listing out the messages */}</ChatMessages>
    </>
  </Wrapper>
);

export default Chat;
