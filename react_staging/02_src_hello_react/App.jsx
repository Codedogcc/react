//创建“外壳”组件App
import React, { Component } from 'react'
import Hello from './components/Hello'   // 引入js或者jsx都可以省略文件后缀
import Welcome from './components/Welcome'

//创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<Hello />
				<Welcome />
			</div>
		)
	}
}
