import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ChatView from "./ChatView/ChatView";
import ViewTemplate from "components/templates/ViewTemplate/ViewTemplate";

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <ViewTemplate>
          <ChatView />
        </ViewTemplate>
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
