import React from "react";
import {hashHistory} from "react-router";
import "./index.less";

const LoginBox = props => {
  return(
    <div className="login">
      <div className="login-label">登录控制台</div>
      <div className="input-div"><input type="text" placeholder="请输入用户名"/></div>
      <div className="input-div"><input type="password" placeholder="请输入密码"/></div>
      <div className="login-btn" onClick={()=>hashHistory.push('/control')}>登录</div>
      <div className="password-wraper">
          <span className="forget-password">忘记密码</span>
          <span className="new-register">新用户注册</span>
      </div>
    </div>
  )
};
export default LoginBox;