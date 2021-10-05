import React from "react";
import PropTypes from "prop-types";
import { Avatar, useChatContext } from "stream-chat-react";

const ChannelPreview = ({ name, id, members, user, type }) => {
  const { channel: activeChannel, client } = useChatContext();

  return <div>s</div>;
};

export default ChannelPreview;
