import React from "react";
import IconFont from "../../components/Iconfont";
import "./index.less";


const Panel = props => {
  return (
    <div className="panel">
      <IconFont icon = {props.item.icon} className="icon-logo"></IconFont>
      <div className={props.titleIsButton ? "title-button" : "title"}>
        <span>{props.item.title}</span>
      </div>
      <div className="time">
        {props.item.time ? props.item.time : ""}
      </div>
      <div className="count">
        {props.item.count}
      </div>
    </div>
  )
};
export default Panel;