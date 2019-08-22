import React, { Component } from 'react';
import Menu from "../../components/Control/Menu";
import ControlHeader from "../../components/Control/ControlHeader";
import TimeChoice from "../../components/Control/TimeChoice";
import Panel from "../../components/Control/Panel";
import ReactEcharts from 'echarts-for-react';

function sumArr(arr){
  return eval(arr.join('+'))
}

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

let panelArr = [{
  icon: "approvel",
  title: "待审批",
  count: 6,
  isbutton: true
},
{
  icon: "user",
  title: "用户总数",
  count: 380
},
{
  icon: "littleservice",
  title: "微服务总数",
  count: 14
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

const option = {
  title: {
      text: '折线图堆叠',
      left: "center"
  },
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      data:['处理数据条数','应用启动次数','应用使用人数'],
      left: "85px"
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis: {
      type: 'value',
  },
  series: [
      {
          name:'处理数据条数',
          type:'line',
          stack: '总量',
          data:[5, 6, 8, 9, 6, 7, 8]
      },
      {
          name:'应用启动次数',
          type:'line',
          stack: '总量',
          data:[2, 3, 4, 6, 5, 4, 3]
      },
      {
          name:'应用使用人数',
          type:'line',
          stack: '总量',
          data:[2.6, 3, 3.3, 3, 2.9, 2.2, 2]
      },
  ]
};


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
  componentDidMount() {
    
  }
  render() {
    const processingDataCount = sumArr(option.series[0].data);
    const appStartCount = sumArr(option.series[1].data);
    const userUseCount = sumArr(option.series[2].data);
    panelArr = panelArr.map((item) => {
      if(item.icon === "datasize") {
        item.count = processingDataCount;
      }
      if(item.icon === "startcount") {
        item.count = appStartCount;
      }
      if(item.icon === "appperson") {
        item.count = userUseCount;
      }
      return item;
    })
    return (
      <div className="control">
        <div>
          <Menu onMenuItemHandleClick={this.onMenuItemHandleClick} currentMenu={this.state.currentMenu} menuArr = {menuArr} />
        </div>
        <div className="control-right">
          <ControlHeader />
          <div className="panel-container">
            {
              panelArr.map((item, index) => {
                return (
                  <Panel key = {index} titleIsButton={item.isbutton ? true : false} item = {item} isHasTime={item.time ? true : false}></Panel>
                )
              })
            }
          </div>
          <div className="divider"></div>
          <TimeChoice />
          <ReactEcharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            className="echarts"
          />
        </div>
      </div>
    );
  }
}


export default Control;