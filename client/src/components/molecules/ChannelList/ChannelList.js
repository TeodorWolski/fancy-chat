import React from "react";
import {
  Wrapper,
  StyledHeading,
  StyledList,
  StyledParagraph,
} from "./ChannelList.styles";

const ChannelList = () => (
  <Wrapper>
    <StyledHeading>Channels:</StyledHeading>
    <StyledList>
      <li>
        <StyledParagraph>Channel name</StyledParagraph>
      </li>
      <li>
        <StyledParagraph>Channel name</StyledParagraph>
      </li>
      <li>
        <StyledParagraph> Channel name</StyledParagraph>
      </li>
    </StyledList>
  </Wrapper>
);

export default ChannelList;
