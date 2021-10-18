import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatView from "components/organisms/ChatView/ChatView";
import { routes } from "routes";
import LoginView from "views/AuthViews/LoginView/LoginView";
import RegisterView from "views/AuthViews/RegisterView/RegisterView";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const authToken = cookies.get("token");

const ApiKey = process.env.API_KEY;

const client = StreamChat.getInstance(ApiKey);

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Route exact path={routes.login} component={LoginView} />
        <Route exact path={routes.register} component={RegisterView} />
        <Route exact path={routes.home}>
          <ChatView client={client} />
        </Route>
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
