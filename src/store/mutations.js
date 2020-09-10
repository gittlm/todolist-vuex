//唯一更改state的方法
//mutation必须是同步函数
import {ADD_NAME,DEL_NAME,CHECK_ALL_NAME,DEL_CHECKED} from './types.js'
export default{
	[ADD_NAME](state,obj){
		state.items.unshift(obj)
	},
	[DEL_NAME](state,index){
		state.items.splice(index,1)
	},
	[CHECK_ALL_NAME](state,value){
		state.items.forEach(function(item){
	        item.done = value
	    })
	},
	[DEL_CHECKED](state){
	    state.items = state.items.filter(function(item){
        //这个过滤一直想不明白
	        return !item.done
	    })
	}
}