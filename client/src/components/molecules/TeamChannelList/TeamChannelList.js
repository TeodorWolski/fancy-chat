import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const Wrapper = styled.div``;

const InfoWrapper = styled.div``;

const ChannelListWrapper = styled.div``;

const TeamChannelList = ({ children, error = false, loading, type }) => (
  <Wrapper>
    <InfoWrapper>
      <div>{error && <Paragraph>Connection error</Paragraph>}</div>

      <div>
        {loading && (
          <Paragraph>{type === "team" ? "Channels" : "Messages"}</Paragraph>
        )}
      </div>
    </InfoWrapper>
    <ChannelListWrapper>{children}</ChannelListWrapper>
  </Wrapper>
);

TeamChannelList.propTypes = {
  chidren: PropTypes.element.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default TeamChannelList;
