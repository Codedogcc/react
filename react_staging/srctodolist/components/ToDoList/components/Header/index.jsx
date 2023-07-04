import React, { Component } from 'react'
import HeaderCss from "./index.css"
export default class Header extends Component {
  onKeyDown = this.props.onKeyDown;
  render() {
    return (
      <div>
        <input ref={c => this.ref2 = c} type="text" placeholder='请输入你的待办事项' onKeyDown={this.onKeyDown} />
      </div>
    )

  }
}
