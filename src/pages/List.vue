<template>
	<div id="List">
		<Item v-for="(item,index) in this.$store.state.items"
			:key="index"
			:item="item"
			:index="index"></Item>
	</div>
</template>

<script>
	import DEL_NAME from '../store/types.js'
	import Item from './Item.vue'
	export default {
		name:"List",
		components:{
			Item
		}
	}
</script>

<style scoped>
	
</style>