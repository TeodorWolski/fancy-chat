import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import styled from "styled-components";
import Chat from "components/organisms/Chat/Chat";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ChatViewTemplate = () => (
  <>
    <Wrapper>
      <Sidebar />
      <Chat />
    </Wrapper>
  </>
);

ChatViewTemplate.propTypes = {};

export default ChatViewTemplate;
