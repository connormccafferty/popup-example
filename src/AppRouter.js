import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Popup from "./Popup";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/popup" component={Popup} exact />
      </Switch>
    </Router>
  );
};

export default AppRouter;
