import React, { Component } from "react";
import { Route, IndexRoute, hashHistory, Router } from "react-router";

import Homepage from '../containers/Homepage';
import ApplicationCenter from '../containers/ApplictionCenter';

class RouteMap extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Homepage}>
        </Route>
      </Router>
    );
  }
}

export default RouteMap;
