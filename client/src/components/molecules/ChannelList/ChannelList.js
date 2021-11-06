import React from "react";
import {
  Wrapper,
  StyledHeading,
  StyledList,
  StyledParagraph,
} from "./ChannelList.styles";

const ChannelList = ({ channels, selectChannel }) => (
  <Wrapper>
    <StyledHeading>Channels:</StyledHeading>
    <StyledList>
      {channels?.docs.map((doc) => (
        <li>
          <button onClick={selectChannel} id={doc.id} key={doc.id}>
            {doc.data().name}
          </button>
        </li>
      ))}
    </StyledList>
  </Wrapper>
);

export default ChannelList;
