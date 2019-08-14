import React from "react";
import bannerImg from "../../../static/image/png/banner电网.png";
import "./index.less";

const Banner = props => {
  return(
    <div className="homepage-banner">
      <img src={bannerImg} alt=""/>
    </div>
  )
};
export default Banner;