import React from "react";
import ChatInput from "components/molecules/ChatInput/ChatInput";
import { Wrapper, StyledHeading, ChatMessages } from "./Chat.styles";
import { useChannel } from "providers/ChannelProvider";

const Chat = ({ channels }) => {
  const { channelInfo } = useChannel();

  return (
    <Wrapper>
      <>
        <StyledHeading>Room-name</StyledHeading>
        {console.log(channelInfo)}
        <ChatMessages>{/* Listing out the messages */}</ChatMessages>
        <ChatInput />
      </>
    </Wrapper>
  );
};

export default Chat;
