import React from "react";
import "./index.less";
import classifyIcon from "../../../static/image/png/classify.png";
const AppTitle = props => {
  return(
    <div className="app-center-title">
      <div className="application-w">
        <div className="container">
          <div className="logo">
            <img src={classifyIcon} alt=""/>
          </div>
          <h2>
            {props.appRecommendTitle}
          </h2>
        </div>
      </div>
    </div>
  )
};
export default AppTitle;