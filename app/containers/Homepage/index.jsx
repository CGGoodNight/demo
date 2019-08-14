import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import Introduce from "../../components/Homepage/Introduce";
import AppRecommend from "../../components/Homepage/AppRecommend";
class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Introduce />
        <AppRecommend />
      </div>
    );
  }
}


export default Homepage;