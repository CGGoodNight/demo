import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import Introduce from "../../components/Homepage/Introduce";
import AppRecommend from "../../components/Homepage/AppRecommend";
import bannerImg from "../../../static/image/png/banner电网.png";
import app from "../../../static/image/png/app@2x.png";
import manage from "../../../static/image/png/manage@2x.png";
import basic from "../../../static/image/png/basic@2x.png";
import open from "../../../static/image/png/open@2x.png";
import {reactScrollBar} from "react-scrollbar";


const introduceAppArr = [
  {
    image: app,
    title: "泛在微应用",
    subTitle: "微应用管理中心，海量微应用下载"
  },
  {
    image: manage,
    title: "微应用信息化管理",
    subTitle: "微应用信息清爽透明，通知计划一目了然"
  },
  {
    image: basic,
    title: "基础应用",
    subTitle: "微应用管理中心，海量微应用下载"
  },
  {
    image: open,
    title: "开放能力",
    subTitle: "微应用信息清爽透明，通知计划一目了然"
  }
]
class Homepage extends Component {
  render() {
    return (
      <div >
        <reactScrollBar minScrollSize={"300px"}>
          <Header headerIndex={1} />
          <Banner bannerBackground={bannerImg} />
          <Introduce introduceAppArr={introduceAppArr} />
          <AppRecommend />
        </reactScrollBar>
      </div>
    );
  }
}


export default Homepage;