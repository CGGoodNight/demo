import React from "react";
import { Select } from 'antd';
import IconFont from "../../components/Iconfont";
import "./index.less";

const { Option } = Select;

const TimeChoice = props => {

  return (
    <div className="time-choice">
      <Select
        showSearch
        style={{ width: 109, height: 33, color: "#9B9B9B" }}
        defaultValue="week"
      >
        <Option value="week">最近一周</Option>
        <Option value="year">最近一年</Option>
      </Select>
    </div>
  )
};
export default TimeChoice;