import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "routes";
import LoginView from "views/LoginView/LoginView";
import RegisterView from "views/RegisterView/RegisterView";
import ChatView from "views/ChatView/ChatView";

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Route exact path={routes.home} component={ChatView} />
        <Route exact path={routes.register} component={RegisterView} />
        <Route exact path={routes.login} component={LoginView} />
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
