import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import TeamChannelList from "components/molecules/TeamChannelList/TeamChannelList";
import { ChannelList, useChatContext, Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import { useHistory } from "react";

const ApiKey = process.env.API_KEY;

// const cookies = new Cookies();

// const authToken = cookies.get("token");

const client = StreamChat.getInstance(ApiKey);

// if (authToken) {
//   client.connectUser({

//   })
// }

const ChatView = ({ children }) => (
  <Chat client={client}>
    <Sidebar />
    {children}
  </Chat>
);

ChatView.propTypes = {
  children: PropTypes.element,
};

export default ChatView;
