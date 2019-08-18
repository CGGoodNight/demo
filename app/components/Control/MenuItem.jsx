import React from "react";
import IconFont from "../../components/Iconfont";
import "./index.less";

const MenuItem = props => {

  return (
    <div 
      onClick={() => props.onMenuItemHandleClick(props.item.key)} 
      className={props.isActive ? "control-menu-item current" : "control-menu-item"}>
      <div className="icon-box">
        <IconFont icon={props.item.icon} className = "menu-icon"></IconFont>
      </div>
      <div className='content'>{props.item.content}</div>
    </div>
  )
};
export default MenuItem;