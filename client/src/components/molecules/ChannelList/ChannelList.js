import React from "react";
import {
  Wrapper,
  StyledHeading,
  StyledList,
  StyledParagraph,
} from "./ChannelList.styles";

const ChannelList = ({ channels }) => (
  <Wrapper>
    <StyledHeading>Channels:</StyledHeading>
    <StyledList>
      {channels?.docs.map((doc) => (
        <li>
          <StyledParagraph id={doc.id} key={doc.id}>
            {doc.data().name}
          </StyledParagraph>
        </li>
      ))}
    </StyledList>
  </Wrapper>
);

export default ChannelList;
