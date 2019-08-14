import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import Search from "../../components/ApplicationCenter/Search";
import AppClassify from "../../components/ApplicationCenter/AppClassify";
import "./index.less";
class ApplicationCenter extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Search />
        <AppClassify />
        <AppClassify />
      </div>
    );
  }
}


export default ApplicationCenter;