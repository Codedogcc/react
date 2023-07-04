import React, { Component } from 'react'
import ToDolist from "./index.css"
import Header from "./components/Header"
import List from "./components/List"
export default class ToDoList extends Component {
  state = { toDoList: [] }
  render() {
    return (
      <div>
        <Header ref={c => this.ref1 = c} onKeyDown={this.onKeyDown} />
        <List toDoListData={this.state.toDoList} />

      </div>
    )
  }

  //自定义方法————要用赋值语句的形式+箭头函数
  onKeyDown = (e) => {
    if (e.code === "Enter") {
      let toDoList = this.state.toDoList
      let inputValue = this.ref1.ref2.value || ''
      this.setState({ toDoList: [...toDoList, inputValue] })
      console.log(e);
    }
  }
}
