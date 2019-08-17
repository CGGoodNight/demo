import React from "react";
import IconFont from "../../components/Iconfont";
import "./index.less";
const Search = props => {
  return(
    <div className="application-search">
      <div className="application-w clearfix">
        <div className="container">
          <input placeholder="搜索应用" type="text"/>
          <IconFont icon="search" className="search-icon"></IconFont>
        </div>
      </div>
    </div>
  )
};
export default Search;