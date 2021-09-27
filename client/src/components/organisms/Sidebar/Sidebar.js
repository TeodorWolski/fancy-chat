import React from "react";
import {
  Wrapper,
  IconsWrapper,
  StyledList,
  ChatsWrapper,
  StyledHeading,
} from "./Sidebar.styles";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import ChampagneIcon from "assets/icons/ChampagneIcon.svg";
import LogoutIcon from "assets/icons/LogoutIcon.svg";

const Sidebar = () => (
  <Wrapper>
    <IconsWrapper>
      <StyledList>
        <li>
          <ButtonIcon icon={ChampagneIcon} />
        </li>
        <li>
          <ButtonIcon icon={LogoutIcon} />
        </li>
      </StyledList>
    </IconsWrapper>
    <ChatsWrapper>
      <StyledHeading>Fancy</StyledHeading>
    </ChatsWrapper>
  </Wrapper>
);

export default Sidebar;
