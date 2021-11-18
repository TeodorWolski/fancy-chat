import React from "react";
import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";

const Wrapper = styled.div`
  position: relative;
  grid-column: 2/2;
`;

const StyledHeading = styled(Heading)`
  font-size: 3rem;
  position: relative;
  top: 0.5rem;
  right: 20rem;

  &::before {
    content: "# ";
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;

const ChatMessages = styled.div`
  overflow-y: scroll;
`;

const Chat = () => (
  <Wrapper>
    <>
      <StyledHeading>Room-name</StyledHeading>
      <ChatMessages>{/** Listing out the messages */}</ChatMessages>
    </>
  </Wrapper>
);

export default Chat;
