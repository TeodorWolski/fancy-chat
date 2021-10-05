import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ChatViewTemplate from "components/templates/ChatViewTemplate/ChatViewTemplate";
import { routes } from "routes";
import LoginView from "views/AuthViews/LoginView/LoginView";
import RegisterView from "views/AuthViews/RegisterView/RegisterView";

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Route exact path={routes.login} component={LoginView} />
        <Route exact path={routes.register} component={RegisterView} />
        <Route
          exact
          path={routes.home}
          render={() => <Redirect to={routes.login} />}
        >
          <ChatViewTemplate />
        </Route>
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
