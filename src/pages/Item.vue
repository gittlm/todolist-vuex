<template>
	<div 
		class="Item" 
		@mouseenter="mouseHover(true)"
		@mouseleave="mouseHover(false)"
		:style="{backgroundColor:bgColor}"
	>
		<input type="checkbox" v-model="item.done">
		<span>{{item.name}}</span>
		<button v-if="btnShow" @click="delItem()">删除</button>
	</div>
</template>

<script>
	import { DEL_NAME } from '../store/types.js'
	export default {
		name:"Item",
		props:{
			item:Object,
			index:Number
		},
		data(){
			return {
				bgColor:'#fff',
				btnShow:false
			}
		},
		methods:{
			mouseHover(flag){
				this.bgColor = flag ? '#ccc' : "#fff"
				this.btnShow = flag
			},
			delItem:function(){
				if(window.confirm("是否确认删除"+this.item.name+"?")){
					// this.delName(this.index)
					this.$store.dispatch(DEL_NAME,this.index)
				}
			}
		}
	}
</script>

<style scoped>
	.Item{
		width: 100%;
		height: 35px;
		line-height: 35px;
		padding: 0 10px;
		margin-top: 10px;
		border: 1px dashed #ccc;
	}
	button{
		float: right;
		margin-top: 6px;
	}
</style>