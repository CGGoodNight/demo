import React from "react";
import "./index.less";
import AppItem from "../Common/AppItem";
import AppTitle from "./AppTitle";
const AppClassify = props => {
  return(
    <div>
      <AppTitle />
      <div className="app-classify-item">
        <div className="application-w">
          <div className="container clearfix">
            <h2>电网调度</h2>
            <div className="item">
              <AppItem />
            </div>
            <div className="item">
              <AppItem />
            </div>
            <div className="item">
              <AppItem />
            </div>
            <div className="item">
              <AppItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default AppClassify;