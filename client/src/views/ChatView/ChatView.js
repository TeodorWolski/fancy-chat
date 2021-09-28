import React from "react";
import styled from "styled-components";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import Heading from "components/atoms/Heading/Heading";

const ApiKey = process.env.API_KEY;

const client = StreamChat.getInstance(ApiKey);

const ChatView = () => (
  <div>
    <Chat client={client}>dupcia</Chat>
  </div>
);

export default ChatView;
