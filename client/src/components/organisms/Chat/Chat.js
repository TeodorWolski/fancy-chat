import React from "react";
import ChatInput from "components/molecules/ChatInput/ChatInput";
import { Wrapper, StyledHeading, ChatMessages } from "./Chat.styles";

const Chat = () => (
  <Wrapper>
    <>
      <StyledHeading>Room-name</StyledHeading>
      <ChatMessages>{/* Listing out the messages */}</ChatMessages>
      <ChatInput />
    </>
  </Wrapper>
);

export default Chat;
