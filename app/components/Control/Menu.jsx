import React from "react";
import "./index.less";
import MenuItem from "./MenuItem";
import logo from "../../../static/image/png/guojiadianwanggongsi.png";
const Menu = props => {
  return (
    <div className="control-menu">
      <div className="logo">
        <img src={logo} alt="" />
        <p>电力业务加速平台</p>
      </div>
      {
        props.menuArr.length > 0 ? 
          props.menuArr.map((item, index) => {
            return(
              <MenuItem key={index} isActive={props.currentMenu === item.key ? true:false} item={item} />              
            )
          })
        : ""
      }
    </div>
  )
};
export default Menu;