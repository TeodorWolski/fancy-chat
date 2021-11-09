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
import ChatViewTemplate from "components/templates/ChatViewTemplate/ChatViewTemplate";
import Chat from "components/organisms/Chat/Chat";
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
          <ChatViewTemplate>
            <Route exact path={routes.chat}>
              <Chat />
            </Route>
          </ChatViewTemplate>
        </Switch>
      </MainTemplate>
    </Router>
  </Provider>
);

export default Root;
