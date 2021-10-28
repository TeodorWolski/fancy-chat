import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "routes";
import LoginView from "views/AuthViews/LoginView/LoginView";
import RegisterView from "views/AuthViews/RegisterView/RegisterView";
import RegisterWithEmail from "views/AuthViews/RegisterWithEmail/RegisterWithEmail";
import ChatView from "views/ChatView/ChatView";

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Route exact path={routes.home} component={ChatView} />
        <Route exact path={routes.register} component={RegisterView} />
        <Route
          exact
          path={routes.registerWithEmail}
          component={RegisterWithEmail}
        />
        <Route exact path={routes.login} component={LoginView} />
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
