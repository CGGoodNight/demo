import React from "react";
import xietong from "../../../static/image/png/xietong copy.png";
import "./AppItem.less";
const AppItem = props => {
  return(
    <div className="app-item">
      <div className="logo">
        <img src={xietong} alt=""/>
      </div>
      <div className="title">
        <p>
          多维度协同调控处置平台
        </p>
      </div>
      <div className="install-btn">
        <span>安装部署</span>
      </div>
    </div>
  )
};
export default AppItem;