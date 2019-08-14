import React from "react";
import AppItem from "../../components/Common/AppItem";
import "./index.less";

const AppRecommend = props => {
  return(
    <div className="app-recommend">
      <div className="w">
        <div className="container">
          <ul className="clearfix">
            <li className='current'>
              <h2>电网调度</h2>
            </li>
            <li>
              <h2>电网调度</h2>
            </li>
            <li>
              <h2>电网调度</h2>
            </li>
          </ul>
          <AppItem />
        </div>
      </div>
    </div>
  )
};
export default AppRecommend;