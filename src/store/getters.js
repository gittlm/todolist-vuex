//store 的计算属性
export default{
	total(state){
		return state.items.length
	},
	checked(state){
		return state.items.reduce(function(checked,item){
			if(item.done){
				checked = checked + 1
			}
			return checked
		},0)
	},
	checkAll(state,getters){
		return (getters.total == getters.checked) && getters.total!=0
		
	}
}