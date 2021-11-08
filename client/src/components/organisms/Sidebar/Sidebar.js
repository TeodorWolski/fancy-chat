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
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));

  const addChannel = () => {
    const channelName = prompt("Please enter your channel name:");
    const id = Math.random().toString(16).slice(2);

    if (channelName) {
      try {
        addDoc(collection(db, "rooms"), {
          name: channelName,
          id: id,
        });
        console.log(id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
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
        <ChannelList channels={channels} />
      </ChatsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
