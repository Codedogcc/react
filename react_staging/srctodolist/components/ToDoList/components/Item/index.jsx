import React, { Component } from 'react'
import ToDolist from "./index.css"
export default class ToDoList extends Component {

  render() {
    let { item, index } = this.props
    return (
      <div>
        <li key={index} type="checkbox">{item}</li><button style={{ display: 'none' }}>删除</button>
      </div>
    )
  }

}
