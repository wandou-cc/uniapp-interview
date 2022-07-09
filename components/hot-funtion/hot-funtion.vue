<template>
		<view class='auxiliary'>
			<view class="auxiliary-title">
				<view class="auxiliary-tip"></view>
				<text>{{title}}</text>
			</view>
				
			<view class="auxiliary-content">
				<view class="item" v-for="item in itemData" :key="item.name">
					
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		name:"hot-funtion",
			
		props:{
			title:{
				type:String,
				default:""
			},
				
			itemData:{
				type:[Object,Array],
				default:[]
			}
		},
		
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
		
	.auxiliary {	
		margin-top: 20rpx;
		background-color: #fff;
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		.auxiliary-title {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
			.auxiliary-tip {
				width: 10rpx;
				height: 30rpx;
				border-radius: 10rpx;
				background-color: purple;
				margin-right: 20rpx;

			}
		}
			
		.auxiliary-content {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			.item {
				// border: 1px solid #ccc;
				border-radius: 10rpx;
				box-shadow: 0 2rpx 9rpx 2rpx #eee;
				height: 90rpx;	
				// flex: 1;
				width:calc(50% - 40rpx) ;
				// margin-bottom: 30rpx;
				margin: 15rpx 10rpx;
				box-sizing: border-box;
			}
		}
	}
	

</style>