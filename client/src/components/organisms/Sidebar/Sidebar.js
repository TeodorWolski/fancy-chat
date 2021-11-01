import React from "react";
import {
  Wrapper,
  IconsWrapper,
  StyledList,
  ChatsWrapper,
  StyledHeading,
  StyledInput,
} from "./Sidebar.styles";
import ChannelList from "components/molecules/ChannelList/ChannelList";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import ChampagneIcon from "assets/icons/ChampagneIcon.svg";
import LogoutIcon from "assets/icons/LogoutIcon.svg";
import TimeIcon from "assets/icons/TimeIcon.svg";
import PencilIcon from "assets/icons/PencilIcon.svg";
import AddIcon from "assets/icons/AddIcon.svg";
import Avatar from "components/atoms/Avatar/Avatar";
import { db } from "../../../firebase";

const Sidebar = () => {
  const addChannel = () => {
    const channelName = prompt("Please enter your channel name:");

    if (channelName) {
    }
  };

  return (
    <Wrapper>
      <IconsWrapper>
        <Avatar />
        <StyledList>
          <li>
            <ButtonIcon icon={ChampagneIcon} />
          </li>
          <li>
            <ButtonIcon onClick={addChannel} icon={AddIcon} />
          </li>
          <li>
            <ButtonIcon icon={PencilIcon} />
          </li>
          <li>
            <ButtonIcon icon={TimeIcon} />
          </li>
          <li>
            <ButtonIcon icon={LogoutIcon} />
          </li>
        </StyledList>
      </IconsWrapper>
      <ChatsWrapper>
        <StyledHeading>Fancy</StyledHeading>
        <StyledInput search />
        <ChannelList />
      </ChatsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
