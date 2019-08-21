import React from "react";
import xietong from "../../../static/image/png/xietong.png";
import "./AppItem.less";
const AppItem = props => {
  
  return(
    <div className="app-item">
      <div className="logo">
        <img src={props.item.image} alt=""/>
      </div>
      <div className="title">
        <p>
          {props.item.title}
        </p>
      </div>
      <div className="install-btn">
        <span>安装部署</span>
      </div>
    </div>
  )
};
export default AppItem;