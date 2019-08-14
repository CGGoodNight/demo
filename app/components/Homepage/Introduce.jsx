import React from "react";
import "./index.less";

const Introduce = props => {
  return(
    <div className='introduce'>
      <div className="w">
        <div className="container clearfix">
          {
            props.introduceAppArr.length > 0 ? 
              props.introduceAppArr.map((item, index) => {
                return(
                <div key={index} className="item">
                  <img src={item.image} alt=""/>
                  <div className="title">
                    <h2>{item.title}</h2>
                    <p>{item.subTitle}</p>
                  </div>
                </div>
                )
              })
              :
              ""
          }
        </div>
        <div className="divider"></div>
      </div>
    </div>
  )
};
export default Introduce;