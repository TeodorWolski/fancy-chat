import React from "react";
import ChatInput from "components/molecules/ChatInput/ChatInput";
import { Wrapper, StyledHeading, ChatMessages } from "./Chat.styles";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { channelName } = useParams();

  return (
    <Wrapper>
      <>
        <StyledHeading>{channelName}</StyledHeading>
        <ChatMessages></ChatMessages>
        <ChatInput />
      </>
    </Wrapper>
  );
};

export default Chat;
