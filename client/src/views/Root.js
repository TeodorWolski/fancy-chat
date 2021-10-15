import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "providers/PrivateRoute";
import ChatView from "components/organisms/ChatView/ChatView";
import { routes } from "routes";
import LoginView from "views/AuthViews/LoginView/LoginView";
import RegisterView from "views/AuthViews/RegisterView/RegisterView";

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Route exact path={routes.login} component={LoginView} />
        <Route exact path={routes.register} component={RegisterView} />
        <PrivateRoute exact path={routes.home}>
          <ChatView />
        </PrivateRoute>
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
