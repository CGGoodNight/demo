import React from "react";
import AppItem from "../../components/Common/AppItem";
import "./index.less";

const AppRecommend = props => {
  return(
    <div className="app-recommend">
      <div className="w">
        <div className="container">
          <ul className="clearfix">
            <li onClick={() => {props.changeAppRecommendPage(1)}} className={props.index === 1 ? "current" : ""}>
              <h2>电网调度</h2>
            </li>
            <li onClick={() => {props.changeAppRecommendPage(2)}} className={props.index === 2 ? "current" : ""}>
              <h2>智能运检</h2>
            </li>
            <li onClick={() => {props.changeAppRecommendPage(3)}} className={props.index === 3 ? "current" : ""}>
              <h2>智能供服</h2>
            </li>
          </ul>
          <div className="all-app">
          {
            props.appRecommendArr.length? 
              props.appRecommendArr.map((item, index)=>{
                return (
                <div key={index} className="item">
                  <AppItem item={item} />
                </div>
                )
              }
              )
            :
            ""
          }
          </div>
          
        </div>
      </div>
    </div>
  )
};
export default AppRecommend;