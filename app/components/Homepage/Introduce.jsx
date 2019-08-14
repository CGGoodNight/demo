import React from "react";
import yingyong from "../../../static/image/png/yingyong.png";
import "./index.less";

const Introduce = props => {
  return(
    <div className='introduce'>
      <div className="w">
        <div className="container clearfix">
          <div className="item">
            <img src={yingyong} alt=""/>
            <div className="title">
              <h2>泛在微应用</h2>
              <p>微应用管理中心，海量微应用下载</p>
            </div>
          </div>
          <div className="item">
            <img src={yingyong} alt=""/>
            <div className="title">
              <h2>泛在微应用</h2>
              <p>微应用管理中心，海量微应用下载</p>
            </div>
          </div>
          <div className="item">
            <img src={yingyong} alt=""/>
            <div className="title">
              <h2>泛在微应用</h2>
              <p>微应用管理中心，海量微应用下载</p>
            </div>
          </div>
          <div className="item">
            <img src={yingyong} alt=""/>
            <div className="title">
              <h2>泛在微应用</h2>
              <p>微应用管理中心，海量微应用下载</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  )
};
export default Introduce;