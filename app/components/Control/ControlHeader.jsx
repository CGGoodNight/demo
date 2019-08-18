import React from "react";
import IconFont from "../../components/Iconfont";
import { Badge } from 'antd';
import "./index.less";

const ControlHeader = props => {

  return (
    <div className="control-header">
      <div className="title">
        <p>国网重庆市电力公司</p>
      </div>
      <div className="message">
        <Badge
        count={5}
        >
          <IconFont icon="newMessage" className="message-icon"></IconFont>
        </Badge>
      </div>
      <div className="user">
        <div className="avatar">
          <img src='https://avatarcdn.qingtui.cn/default/v1/default_avatar_35.png?x-oss-process=image/resize,w_84,h_84'/>
        </div>
        <p>Sam Me</p>
      </div>
    </div>
  )
};
export default ControlHeader;