import React from "react";
import "./style.less";

export default class IconFont extends React.PureComponent {
  clickHanlde() {
    const { onClick } = this.props;
    onClick && onClick();
  }
  render() {
    const { icon, className } = this.props;
    return (
      <i className={className} onClick={() => this.clickHanlde()}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
      </i>
    );
  }
}
