import React from "react";
import "./index.less";

const Banner = props => {
  return(
    <div className="homepage-banner">
      <img src={props.bannerBackground} alt=""/>
    </div>
  )
};
export default Banner;