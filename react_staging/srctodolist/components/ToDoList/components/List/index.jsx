import React, { Component } from 'react'
import ToDolist from "./index.css"
import Item from "../Item"

export default class List extends Component {

  render() {
    let toDoList = this.props.toDoListData
    return (
      <div>
        <ul>
          {
            toDoList.map((item, index) => {
              return <Item item={item} index={index} />
            })
          }
        </ul>
      </div>
    )
  }
  //自定义方法————要用赋值语句的形式+箭头函数
  changeWeather = () => {  // 箭头函数没有自己的this，他会往外找，这里函数内部的this相当于weather实例对象的this
    let toDoList = this.state.toDoList
    let inputValue = this.ref1.ref2.value || ''
    console.log(this);
    this.setState({ toDoList: [...toDoList, inputValue] })
  }
}
