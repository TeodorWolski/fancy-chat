import React from "react";
import {
  Wrapper,
  StyledHeading,
  StyledList,
  RoomLink,
} from "./ChannelList.styles";
import { useParams } from "react-router-dom";

const ChannelList = ({ channels }) => {
  const { channelName } = useParams();

  return (
    <Wrapper>
      <StyledHeading>Channels:</StyledHeading>
      <StyledList>
        {channels?.docs.map((doc) => (
          <li key={channelName}>
            <RoomLink to={`/chat/${doc.data().name}`} id={channelName}>
              {doc.data().name}
            </RoomLink>
          </li>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default ChannelList;
