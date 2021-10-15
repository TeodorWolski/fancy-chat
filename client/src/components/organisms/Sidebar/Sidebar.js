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
import TeamChannelList from "components/molecules/TeamChannelList/TeamChannelList";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChannelPreview from "components/organisms/ChannelPreview/ChannelPreview";

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
      <StyledInput search />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => <TeamChannelList {...listProps} type="team" />}
        Preview={(previewProps) => (
          <ChannelPreview {...previewProps} type="team" />
        )}
      />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => <TeamChannelList {...listProps} type="team" />}
        Preview={(previewProps) => (
          <ChannelPreview {...previewProps} type="message" />
        )}
      />
    </ChatsWrapper>
  </Wrapper>
);

export default Sidebar;
