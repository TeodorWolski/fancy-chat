import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const Root = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <div>hello world</div>
      </MainTemplate>
    </Switch>
  </Router>
);

export default Root;
