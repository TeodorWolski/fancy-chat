import React from "react";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import styled from "styled-components";
import Chat from "components/organisms/Chat/Chat";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ChatView = () => (
  <>
    <Wrapper>
      <Sidebar />
      <Chat />
    </Wrapper>
  </>
);

export default ChatView;
