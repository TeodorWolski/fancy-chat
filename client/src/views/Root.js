import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import Heading from "components/atoms/Heading/Heading";

const ApiKey = process.env.API_KEY;

const client = StreamChat.getInstance(ApiKey);

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Heading>lol</Heading>
        <Chat client={client}></Chat>
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
