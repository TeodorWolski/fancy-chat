import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import TeamChannelList from "components/molecules/TeamChannelList/TeamChannelList";
import { ChannelList, useChatContext, Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

const ApiKey = process.env.API_KEY;

const client = StreamChat.getInstance(ApiKey);

const ChatViewTemplate = ({ children }) => (
  <Chat client={client}>
    <Sidebar />
    {children}
  </Chat>
);

ChatViewTemplate.propTypes = {
  children: PropTypes.element,
};

export default ChatViewTemplate;
