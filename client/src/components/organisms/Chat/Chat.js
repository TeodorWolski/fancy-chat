import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  left: 0%;
  overflow-y: scroll;
  flex: 0.7;
  flex-grow: 1;
`;

const Chat = () => (
  <Wrapper>
    <h1>Hello world!</h1>
    <h1>Hello world!</h1>
    <h1>Hello world!</h1>
    <h1>Hello world!</h1>
    <h1>Hello world!</h1>
  </Wrapper>
);

export default Chat;
