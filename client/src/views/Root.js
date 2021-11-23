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
import HomeView from "views/HomeView/HomeView";

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route
          exact
          path={routes.home}
          render={() => <Redirect to={routes.chat} />}
        />
        <Route exact path={routes.register} component={RegisterView} />
        <Route exact path={routes.login} component={LoginView} />
        <Route
          exact
          path={routes.registerWithEmail}
          component={RegisterWithEmail}
        />

        <Route exact path={routes.chat}>
          <ChatView />
        </Route>
        <Route exact path="/chat" component={HomeView} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
