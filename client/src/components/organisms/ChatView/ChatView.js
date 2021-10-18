import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import TeamChannelList from "components/molecules/TeamChannelList/TeamChannelList";
import { ChannelList, useChatContext, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

const ChatView = ({ children, client }) => (
  <Chat client={client}>
    <Sidebar />
    {children}
  </Chat>
);

ChatView.propTypes = {
  children: PropTypes.element,
};

export default ChatView;
