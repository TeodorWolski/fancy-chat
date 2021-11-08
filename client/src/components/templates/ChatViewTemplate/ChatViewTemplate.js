import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";

const ChatViewTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

ChatViewTemplate.propTypes = {};

export default ChatViewTemplate;
