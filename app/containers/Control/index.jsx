import React, { Component } from 'react';
import Menu from "../../components/Control/Menu";

import homeicon from "../../../static/image/png/homeicon.png";

const menuArr = [{
  key: 'home',
  icon: 'home2',
  content: "首页"
},
{
  key: 'status',
  icon: 'home2',
  content: "状态监控"
},
{
  key: 'pannedTask',
  icon: 'home2',
  content: "计划任务管理"
},
{
  key: 'resource',
  icon: 'home2',
  content: "资源调度"
},
{
  key: 'userPrivilege',
  icon: 'home2',
  content: "用户与权限管理"
},
{
  key: 'enterpriseMicroapplications',
  icon: 'home2',
  content: "企业微应用管理"
},
{
  key: 'operationalLog',
  icon: 'home2',
  content: "操作日志查询"
},
{
  key: 'authorizedLicense',
  icon: 'home2',
  content: "授权许可查询"
},
{
  key: 'systemManagement',
  icon: 'home2',
  content: "系统管理"
},
]

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: 'home'
    }
  }
  render() {
    return (
      <div className="control">
        <div>
          <Menu currentMenu={this.state.currentMenu} menuArr = {menuArr} />
        </div>
        <div>
          Right
        </div>
      </div>
    );
  }
}


export default Control;