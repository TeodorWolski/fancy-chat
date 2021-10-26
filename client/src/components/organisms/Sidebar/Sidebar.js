import React from "react";
import {
  Wrapper,
  IconsWrapper,
  StyledList,
  ChatsWrapper,
  StyledHeading,
  StyledInput,
} from "./Sidebar.styles";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import ChampagneIcon from "assets/icons/ChampagneIcon.svg";
import LogoutIcon from "assets/icons/LogoutIcon.svg";
import TimeIcon from "assets/icons/TimeIcon.svg";
import Avatar from "components/atoms/Avatar/Avatar";

const Sidebar = () => (
  <Wrapper>
    <IconsWrapper>
      <Avatar />
      <StyledList>
        <li>
          <ButtonIcon icon={ChampagneIcon} />
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
    </ChatsWrapper>
  </Wrapper>
);

export default Sidebar;
