import React, { Component } from 'react';
import Header from "../../components/Common/Header";
import Banner from "../../components/Homepage/Banner";
import Search from "../../components/ApplicationCenter/Search";
import AppClassify from "../../components/ApplicationCenter/AppClassify";
import bannerImg from "../../../static/image/png/bannerImg.png";
import lemon from "../../../static/image/png/lemon.jpg";
import "./index.less";

import xietong from "../../../static/image/png/xietong.png";

import shortCircuitAnalysis from "../../../static/image/png/shortCircuitAnalysis.png";
import dataInfo from "../../../static/image/png/dataInfo.png";
import highPress from "../../../static/image/png/highPress.png";


import electricinfo from "../../../static/image/png/electricinfo.png";
import accountinfo from "../../../static/image/png/accountinfo.png";
import electric from "../../../static/image/png/electric.png";
import business from "../../../static/image/png/business.png";
import fault from "../../../static/image/png/fault.png";
import auxiliary from "../../../static/image/png/auxiliary.png";
import stopElectric from "../../../static/image/png/stopElectric.png";

import IntegratedStatement from "../../../static/image/png/IntegratedStatement.png";
import message from "../../../static/image/png/message.png";
import businessSystem from "../../../static/image/png/businessSystem.png";

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
  componentDidMount() {
    var o,   //捕获到的事件
          X,  //box水平宽度
          Y;  //box垂直高度
    function getObject(obj,e){    //获取捕获到的对象
      console.dir(obj);
        o = obj;
        // document.all（IE）使用setCapture方法绑定；其余比如FF使用Window对象针对事件的捕捉
        document.all ? o.setCapture() : window.captureEvents(Event.MOUSEMOVE);  
        debugger
        X = parseInt(obj.clientWidth) - (e.clientX - parseInt(o.style.right));   //获取宽度，
        Y = parseInt(obj.clientHeight) - (e.clientY - parseInt(o.style.bottom));   //获取高度，
        console.log(X, Y);
    //    alert(e.clientX+"  -- " + o.style.left+" -- "+ X);
    }
    document.getElementById("rabot").onmousedown = function(e){ 
        getObject(this,e||event);       //box捕获事件并处理  e-->FF  window.event-->IE
    };
    document.onmousemove = function(dis){    //鼠标移动事件处理
        if(!o){    //如果未获取到相应对象则返回
            return;
        }
        if(!dis){  //事件
            dis = event ;
        //    dis = arguments[0]||window.event;   //如果上面那句在FF下无法获取事件，听说可以通过 arguments[0]获取FF下的事件对象
        }
        o.style.left = dis.clientX - X +"px";     //设定box样式随鼠标移动而改变
        o.style.top = dis.clientY - Y + "px";
    };
    document.onmouseup = function(){    //鼠标松开事件处理
        if(!o){   //如果未获取到相应对象则返回
            return;
        }
        // document.all（IE）使用releaseCapture解除绑定；其余比如FF使用window对象针对事件的捕捉
        document.all ? o.releaseCapture() : window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP)
        o = '';   //还空对象
    };
  }
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
        <div style={{position: "fixed", bottom: 100, right: 100}} id="rabot" className="rabot">
        </div>
      </div>
    );
  }
}


export default ApplicationCenter;