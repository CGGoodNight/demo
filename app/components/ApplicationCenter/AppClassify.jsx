import React from "react";
import "./index.less";
import AppItem from "../Common/AppItem";
import AppTitle from "./AppTitle";
const AppClassify = props => {
  return (
    <div className="app-wrapper">
      {props.isNeedTtile ? <AppTitle appRecommendTitle = {props.appRecommendTitle} /> : null}
      
      <div className="app-classify-item">
        <div className="application-w">
          <div className="container clearfix">
            <h2>智能供服</h2>
            {
              props.appRecommendArr1 && props.appRecommendArr1.length ?
                props.appRecommendArr1.map((item, index) => {
                  return (
                    <div key={index} className="item">
                      <AppItem item={item} />
                    </div>
                  )
                }
                )
                :
                null
            }
          </div>
        </div>
      </div>
    </div>
  )
};
export default AppClassify;