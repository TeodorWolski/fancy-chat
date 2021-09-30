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
      <Paragraph>{error && <Paragraph>Connection error</Paragraph>}</Paragraph>
      <ChannelListWrapper>
        {loading && (
          <Paragraph>{type === "team" ? "Channels" : "Messages"}</Paragraph>
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
