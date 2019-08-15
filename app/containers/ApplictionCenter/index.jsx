import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import Search from "../../components/ApplicationCenter/Search";
import AppClassify from "../../components/ApplicationCenter/AppClassify";
import bannerImg from "../../../static/image/png/分组 22.png";
import "./index.less";

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

import IntegratedStatement from "../../../static/image/png/分组 18.png";
import message from "../../../static/image/png/分组 19.png";
import businessSystem from "../../../static/image/png/分组 20.png";

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

const appRecommendArr4 = [{
  image: IntegratedStatement,
  title: "一体化报表"
},
{
  image: message,
  title: "消息推送"
},
{
  image: businessSystem,
  title: "业务系统运维看板"
}
];

const bannerTitle = {
  title: "业务加速应用中心",
  subTitle: "紧贴业务需求 挖掘数据价值",
  subTitle2: "电网所有业务数据问题，一个锦禹业务加速机器人就够了"
}

class ApplicationCenter extends Component {
  render() {
    return (
      <div>
        <Header headerIndex={2} />
        <Banner bannerBackground={bannerImg} bannerTitle={bannerTitle} />
        <Search />
        <AppClassify appRecommendArr1 = {appRecommendArr1}  isNeedTtile={true} appRecommendTitle={"泛在微应用"} />
        <AppClassify appRecommendArr1 = {appRecommendArr2} isNeedTtile={false}/>
        <AppClassify appRecommendArr1 = {appRecommendArr3} isNeedTtile={false}/>
        <AppClassify appRecommendArr1 = {appRecommendArr4} isNeedTtile={true} appRecommendTitle={"基础应用"}/>
      </div>
    );
  }
}


export default ApplicationCenter;