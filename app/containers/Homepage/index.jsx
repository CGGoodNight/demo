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

import xietong from "../../../static/image/png/xietong copy.png";

import shortCircuitAnalysis from "../../../static/image/png/分组 14.png";
import dataInfo from "../../../static/image/png/分组 15.png";
import highPress from "../../../static/image/png/分组 16.png";


import electricinfo from "../../../static/image/png/分组 10.png";
import accountinfo from "../../../static/image/png/分组 11.png";
import electric from "../../../static/image/png/分组 8.png";
import business from "../../../static/image/png/分组 7.png";
import fault from "../../../static/image/png/分组 12.png";
import auxiliary from "../../../static/image/png/分组 13.png";
import stopElectric from "../../../static/image/png/分组 17.png";



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
];

const appRecommendArr1 = [{
  image: xietong,
  title: "多维度协同调控处置平台"
}];

const appRecommendArr2 = [{
  image: shortCircuitAnalysis,
  title: "配变短路分析"
},
{
  image: dataInfo,
  title: "线损数据研判"
},
{
  image: highPress,
  title: "高压线路参数"
}];

const appRecommendArr3 = [{
  image: electricinfo,
  title: "计划停电信息自动化录入"
},
{
  image: accountinfo,
  title: "PMS台账自动化录入"
},
{
  image: electric,
  title: "供电资源全景展示"
},
{
  image: business,
  title: "非抢业务自动催办"
}
,
{
  image: fault,
  title: "跳闸接地故障告警"
}
,
{
  image: auxiliary,
  title: "配网负荷辅助决策"
}
,
{
  image: stopElectric,
  title: "停电计划综合管理"
}];

const bannerTitle = {
  title: "人机协创 基层减负",
  subTitle: "业务加速机器人覆盖电力运检、供服、营销、调度等20余核心业务系统",
  subTitle2: "服务50+供电局，效率提升10+倍"
}

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }
  changeAppRecommendPage = (index) => {
    this.setState({
      index
    })
  }
  render() {
    let appRecommendArr = [];
    this.state.index === 1 ? appRecommendArr=appRecommendArr1 : this.state.index === 2 ? appRecommendArr=appRecommendArr2 : appRecommendArr=appRecommendArr3
    return (
      <div >
        <reactScrollBar minScrollSize={"300px"}>
          <Header headerIndex={1} />
          <Banner bannerBackground={bannerImg} bannerTitle={bannerTitle} />
          <Introduce introduceAppArr={introduceAppArr} />
          <AppRecommend changeAppRecommendPage={this.changeAppRecommendPage} appRecommendArr = {appRecommendArr} index={this.state.index} />
        </reactScrollBar>
      </div>
    );
  }
}


export default Homepage;