//组件中用由this.$store.dispatch方法来派发action
//action中用commit来提交mutation
//action中可以包含异步操作
import {ADD_NAME,DEL_NAME,CHECK_ALL_NAME,DEL_CHECKED} from './types.js'
export default{
	[ADD_NAME]({commit},obj){
		commit(ADD_NAME,obj)
	},
	[DEL_NAME]({commit},index){
		commit(DEL_NAME,this.index)
	},
	[CHECK_ALL_NAME]({commit},value){
		commit(CHECK_ALL_NAME,value)
	},
	[DEL_CHECKED]({commit}){
		commit(DEL_CHECKED)
	}
}