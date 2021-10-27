import React from "react";
import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 5%;
  left: 10%;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: white;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledList = styled.ul`
  color: ${({ theme }) => theme.colors.moreMint};
`;

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
