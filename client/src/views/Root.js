import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ChatViewTemplate from "components/templates/ChatViewTemplate/ChatViewTemplate";

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <ChatViewTemplate />
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
