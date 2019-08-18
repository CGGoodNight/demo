import React, { Component } from 'react';
import Menu from "../../components/Control/Menu";
import ControlHeader from "../../components/Control/ControlHeader";
import TimeChoice from "../../components/Control/TimeChoice";
import Panel from "../../components/Control/Panel";

const menuArr = [{
  key: 'home',
  icon: 'home2',
  content: "首页"
},
{
  key: 'status',
  icon: 'status',
  content: "状态监控"
},
{
  key: 'pannedTask',
  icon: 'pannedTask',
  content: "计划任务管理"
},
{
  key: 'resource',
  icon: 'resource',
  content: "资源调度"
},
{
  key: 'userPrivilege',
  icon: 'userPrivilege',
  content: "用户与权限管理"
},
{
  key: 'enterpriseMicroapplications',
  icon: 'enterpriseMicroapplications',
  content: "企业微应用管理"
},
{
  key: 'operationalLog',
  icon: 'operationalLog',
  content: "操作日志查询"
},
{
  key: 'authorizedLicense',
  icon: 'authorizedLicense',
  content: "授权许可查询"
},
{
  key: 'systemManagement',
  icon: 'systemManagement',
  content: "系统管理"
},
];

const panelArr = [{
  icon: "approvel",
  title: "待审批",
  count: 0,
  isbutton: true
},
{
  icon: "user",
  title: "用户总数",
  count: 0
},
{
  icon: "littleservice",
  title: "微服务总数",
  count: 0
},
{
  icon: "datasize",
  title: "处理数据条数",
  time: "近一周",
  count: 0
},
{
  icon: "startcount",
  title: "应用启动次数",
  time: "近一周",
  count: 0
},
{
  icon: "appperson",
  title: "应用使用人数",
  time: "近一周",
  count: 0
},
]

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: 'home'
    }
  }
  onMenuItemHandleClick = (key) => {
    this.setState({
      currentMenu: key
    })
  }
  render() {
    return (
      <div className="control">
        <div>
          <Menu onMenuItemHandleClick={this.onMenuItemHandleClick} currentMenu={this.state.currentMenu} menuArr = {menuArr} />
        </div>
        <div className="control-right">
          <ControlHeader />
          <TimeChoice />
          <div className="panel-container">
            {
              panelArr.map((item, index) => {
                return (
                  <Panel key = {index} titleIsButton={item.isbutton ? true : false} item = {item} isHasTime={item.time ? true : false}></Panel>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}


export default Control;