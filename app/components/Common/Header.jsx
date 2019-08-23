import React from "react";
import "./Header.less";
import { hashHistory } from "react-router";
import logo from "../../../static/image/png/guojiadianwanggongsi.png";

const Footer = props => {
  return (
    <div className="header">
      <div className="w">
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="logo-title">
              电力业务加速平台
            </div>
          </div>
          <div className="header-right">
            <div onClick={() => { hashHistory.push("/") }} className={props.headerIndex === 1 ? "current" : ""}>首页</div>
            <div onClick={() => { hashHistory.push("/appcenter") }} className={props.headerIndex === 2 ? "current" : ""}>应用中心</div>
            <div className={props.headerIndex === 3 ? "current" : ""}>开放平台</div>
            <div onClick={() => { hashHistory.push("/login") }} className={props.headerIndex === 5 ? "current" : ""}>控制台</div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Footer;