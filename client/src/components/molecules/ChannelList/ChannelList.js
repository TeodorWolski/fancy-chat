import React from "react";
import {
  Wrapper,
  StyledHeading,
  StyledList,
  StyledParagraph,
  RoomLink,
} from "./ChannelList.styles";
import { useParams } from "react-router-dom";

const ChannelList = ({ channels, selectChannel }) => {
  const { id } = useParams();

  return (
    <Wrapper>
      <StyledHeading>Channels:</StyledHeading>
      <StyledList>
        {channels?.docs.map((doc) => (
          <li>
            <RoomLink to={`/chat/${doc.data().id}`} id={doc.id} key={doc.id}>
              {doc.data().name}
            </RoomLink>
          </li>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default ChannelList;
