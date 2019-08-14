import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import LoginBox from "../../components/Login/LoginBox";
import bannerImg from "../../../static/image/png/电网登陆页.png";
import "./index.less";

class Login extends Component {
  render() {
    return (
      <div className="login-root">
        <div className="login-background"></div>
        <Header headerIndex={5} />
        {/* <Banner bannerBackground={bannerImg} /> */}
        <LoginBox />
      </div>
    );
  }
}


export default Login;