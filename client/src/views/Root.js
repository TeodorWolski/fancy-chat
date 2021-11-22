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
import { Provider } from "react-redux";
import { ChannelProvider } from "providers/ChannelProvider";
import ChatView from "views/ChatView/ChatView";
import store from "redux/store";

const Root = () => (
  <Provider store={store}>
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
          <ChannelProvider>
            <Route exact path={routes.chat} component={ChatView} />
          </ChannelProvider>
        </Switch>
      </MainTemplate>
    </Router>
  </Provider>
);

export default Root;
