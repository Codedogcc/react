import React, { Component } from 'react'
import hello from './index.module.css'   // css文件模块化

export default class Hello extends Component {
	render() {
		return <h2 className={hello.title}>Hello,React!</h2>
	}
}