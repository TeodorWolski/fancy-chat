import React from "react";
import {
  Wrapper,
  InfoWrapper,
  StyledParagraph,
  ChannelListWrapper,
} from "./TeamChannelList.styles";
import PropTypes from "prop-types";

const TeamChannelList = ({ children, error = false, loading, type }) => (
  <Wrapper>
    <InfoWrapper>
      <StyledParagraph>
        {error && <StyledParagraph>Connection error</StyledParagraph>}
      </StyledParagraph>
      <ChannelListWrapper>
        {loading && (
          <StyledParagraph>
            {type === "team" ? "Channels" : "Messages"}
          </StyledParagraph>
        )}
      </ChannelListWrapper>
    </InfoWrapper>
    <div>{children}</div>
  </Wrapper>
);

TeamChannelList.propTypes = {
  chidren: PropTypes.element.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default TeamChannelList;
