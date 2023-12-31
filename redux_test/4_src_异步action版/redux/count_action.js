/* 
	该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createIncrementAsyncAction = (data, time) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(createIncrementAction(data))
		}, time)
	}
}
// 如果要用下面这种方法，就要引入redux-thunk包，才能让store执行异步func，得到一个obj， npm install redun-thunk
// //异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
// export const createIncrementAsyncAction = (data, time) => {
// 	return () => {
// 		setTimeout(() => { store.dispatch(createIncrementAction(data)) }, time)
// 	}
// }