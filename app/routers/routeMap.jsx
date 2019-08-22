import React, { Component } from "react";
import { Route, IndexRoute, hashHistory, Router } from "react-router";

import Homepage from '../containers/Homepage';
import ApplicationCenter from '../containers/ApplictionCenter';
import Login from "../containers/Login";
import Control from "../containers/Control";
// import Dragger from "../containers/Dragger";

class RouteMap extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Homepage}></Route>
        <Route path="/appcenter" component = {ApplicationCenter}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/control" component={Control}></Route>
        {/* <Route path="/drag" component={Dragger}></Route> */}
      </Router>
    );
  }
}

export default RouteMap;
