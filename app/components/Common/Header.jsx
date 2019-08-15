import React from "react";
import "./Header.less";
import {hashHistory} from "react-router";
import logo from "../../../static/image/png/guojiadianwanggongsi.png";

const Footer = props => {
  return(
    <div className="header">
      <div className="w">
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <img src={logo} alt=""/>
            </div>
            <div className="logo-title">
              <p>电力业务加速平台</p>
            </div>
          </div>
          <div className="header-right">
            <ul>
              <li onClick={() => {hashHistory.push("/")}} className={props.headerIndex === 1 ? "current" : ""}><p>首页</p></li>
              <li onClick={() => {hashHistory.push("/appcenter")}} className={props.headerIndex === 2 ? "current" : ""}><p>应用中心</p></li>
              <li className={props.headerIndex === 3 ? "current" : ""}><p>开放平台</p></li>
              <li className={props.headerIndex === 4 ? "current" : ""}><p>创客学院</p></li>
              <li onClick={() => {hashHistory.push("/login")}} className={props.headerIndex === 5 ? "current" : ""}><p>控制台</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Footer;