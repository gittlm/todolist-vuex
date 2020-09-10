<template>
	<div id="Footer">
		<input type="checkbox" v-model="checkAll">
		<span>{{checked}}/{{total}}</span>
		<button @click="delCheck">删除选中</button>
	</div>
</template>

<script>
	import { CHECK_ALL_NAME,DEL_CHECKED } from '../store/types.js'//引用组件必须用{}
	import { mapGetters } from 'vuex'//用mapGetters时引用的
	export default {
		name:"Footer",
		computed:{
			//第一种，用mapGetter
			...mapGetters([
				'total',
				'checked'
			]),
			/*//第二种，用getter里面的方法
			total(){
				return this.$store.getters.total
			},
			checked(){
				return this.$store.getters.checked
			},
			*/
			checkAll:{
				get(){
					//return (this.total == this.checked) && this.total!=0
					return this.$store.getters.checkAll
				},
				set(value){
					// this.checkAllName(value)
					this.$store.dispatch(CHECK_ALL_NAME,value)
				}
			}
		},
		methods:{
			delCheck:function(){
				if(window.confirm("是否确认删除已选中的项目?")){
					// this.delChecked()
					this.$store.dispatch(DEL_CHECKED)
				}
			}
		}
	}
</script>

<style scoped>
	#Footer{
		width: 100%;
		height: 35px;
		line-height: 35px;
		padding: 0 10px;
	}
	button{
		float: right;
		margin-top: 6px;
	}
</style>