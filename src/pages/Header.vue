<template>
	<div id="Header">
		<h1>Todo List</h1>
		<input 
			type="text" 
			v-model.trim="value"
			@keyup.enter="addItem()">
	</div>
</template>

<script>
	import { ADD_NAME } from '../store/types.js'//引用组件必须用{}
	export default {
		name:"Header",
		data(){
			return {
				value:''
			}
		},
		methods:{
			addItem(){
				var name = this.value
				//1.做校验
				if(!name){
					alert("请输入内容！")
					return
				}
				//2.封装对象
				var obj={
					"name":name,
					"done":false
				}
				//3.将任务插入到任务数组
				// this.addName(obj)
				this.$store.dispatch(ADD_NAME,obj)
				//4.清空输入框
				this.value = ''
			}
		}
	}
</script>

<style scoped>
#Header{
	width: 100%;
}
h1{
	text-align: center;
	width: 100%;
}
input{
	width: 100%;
	line-height: 35px;
	height: 35px;
	padding: 0 10px;
}
</style>