import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import LoginBox from "../../components/Login/LoginBox";
import bannerImg from "../../../static/image/png/loginBanner.png";
import "./index.less";

class Login extends Component {
  render() {
    return (
      <div className="login-root">
        <div className="login-background"></div>
        <Header headerIndex={5} />
        <div className="login-w">
          <LoginBox />
        </div>
      </div>
    );
  }
}


export default Login;