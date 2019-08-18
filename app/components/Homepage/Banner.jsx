import React from "react";
import "./index.less";

const Banner = props => {
  return(
    <div className="homepage-banner">
      <img src={props.bannerBackground} alt=""/>
      <div className="banner-title">

        <div className="container">
          <h1>{props.bannerTitle.title}</h1>
          <p>{props.bannerTitle.subTitle}</p>
          <p>{props.bannerTitle.subTitle2}</p>
        </div>
      </div>
    </div>
  )
};
export default Banner;