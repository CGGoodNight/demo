import React from "react";
import IconFont from "../../components/Iconfont";
import "./index.less";

const MenuItem = props => {

  return (
    <div className={props.isActive ? "control-menu-item current" : "control-menu-item"}>
      <div className="icon-box">
        <IconFont icon={props.item.icon} className = {props.isActive ? "menu-icon current-icon" : "menu-icon"}></IconFont>
      </div>
      <h2>{props.item.content}</h2>
    </div>
  )
};
export default MenuItem;