import React, { Component } from 'react'
import { Button } from 'antd';
// import { Icon } from '@ant-design/compatible';
// const { Option } = Select;
export default class Count1 extends Component {
  state = { num: 0 }
  handleChange = (e) => {
    console.log('this.refs.list0.value', this.refs.list0.value);
    console.log('e', this.refs.list0);
    const { num } = this.state
    if (e.target.innerHTML == "+") {
      this.setState({ num: num + Number(this.refs.list0.value) })
    } else if (e.target.innerHTML == "-") {
      this.setState({ num: num - Number(this.refs.list0.value) })
    } else if (e.target.innerHTML == "increment if oddbutton") {

    } else if (e.target.innerHTML == "increment async") {

    }
  }
  render() {

    const { num } = this.state
    return (

      <div>
        <h1>当前求和为：{num}</h1>  <br />
        <select defaultValue="1" ref="list0">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.handleChange} ref="list1" >+</button>
        <button onClick={this.handleChange} ref="list2" >-</button>
        <button onClick={this.handleChange}>increment if oddbutton</button>
        <button onClick={this.handleChange}>increment async</button>
      </div>
    )
  }
}
