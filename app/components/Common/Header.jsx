import React from "react";
import "./Header.less";
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
              <li className="current"><p>首页</p></li>
              <li><p>应用中心</p></li>
              <li><p>开放平台</p></li>
              <li><p>创客学院</p></li>
              <li><p>登录</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Footer;