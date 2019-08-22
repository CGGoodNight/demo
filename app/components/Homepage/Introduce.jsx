import React, { Component } from 'react';
import IconFont from "../Iconfont";
import "./index.less";



class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduceAppArr: this.props.introduceAppArr
    }
  }
  hoverFn(index) {
    let { introduceAppArr } = this.props;
    let newArr = introduceAppArr.map((item, i) => {
      if (index === i) {
        item.imageTmp = item.image + "Hover";
        return item;
      }
      
      return item;
    });
    this.setState({
      introduceAppArr: newArr
    })
  }
  outFn(index) {
    let { introduceAppArr } = this.props;
    let newArr = introduceAppArr.map((item, i) => {
      if (index === i) {
        item.imageTmp =item.image;
        return item;
      }
      return item;
    });
    this.setState({
      introduceAppArr: newArr
    })
  }
  render() {
    return (
      <div className='introduce'>
        <div className="w">
          <div className="container clearfix">
            {
              this.state.introduceAppArr.length > 0 ?
                this.state.introduceAppArr.map((item, index) => {
                  return (
                    <div key={index} className="item" onMouseOver={this.hoverFn.bind(this, index) } onMouseOut={this.outFn.bind(this, index) } >
                      {/* <img src={item.imageTmp || item.image} alt="" /> */}
                      <IconFont icon={item.imageTmp || item.image} className="introduce-icon"></IconFont>
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
};
export default Introduce;