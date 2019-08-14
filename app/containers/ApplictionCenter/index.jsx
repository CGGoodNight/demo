import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import Search from "../../components/ApplicationCenter/Search";
import AppClassify from "../../components/ApplicationCenter/AppClassify";
import bannerImg from "../../../static/image/png/banner电网.png";
import "./index.less";
class ApplicationCenter extends Component {
  render() {
    return (
      <div>
        <Header headerIndex={2} />
        <Banner bannerBackground={bannerImg} />
        <Search />
        <AppClassify />
        <AppClassify />
      </div>
    );
  }
}


export default ApplicationCenter;