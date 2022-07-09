<template>
	<view class="uni-auxiliary" @click="gotoPage(itemData.url)">
		 <view class="aux-left">
			<uni-icons :type="itemData.icon" size="20"></uni-icons>
			<text style='margin-left:20rpx'>{{itemData.title}}</text>
		 </view>
		 <view class="aux-right">
		 		<uni-icons type="right" size="16"></uni-icons>
		 </view>
	</view>
</template>

<script>
	export default {
		name:"uniAuxiliary",
		props:{
			itemData:{
				type:Object
			}
		},
		methods:{
			gotoPage(url) {
				console.log(url)
			}
		}
	}
	
</script>

<style lang="scss" scoped>
		
	.uni-auxiliary {
		display: flex;
		height: 80rpx;
		border: 1px solid #ccc;
		border-radius: 15rpx;
		align-items: center;
		padding: 10rpx;
		.aux-left {
			flex: 70%;
		}
		.aux-right {
			flex: 1;
		}
	}
</style>