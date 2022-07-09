<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 公告 -->
		<view class="announce">
				<uni-icons type="chatbubble" size="20"></uni-icons>
				<text class="announce-text">标签组件多用于商品分类、重点内容显示等场景标签组件多用于商品分类、重点内容显示等场景标签组件多用于商品分类、重点内容显示等场景。</text>
		</view>
		
		<!-- 打卡 -->
		<view class="clock-in">
			<view class="clock-sign">
				<text class="clock-number"> 今日打开签到人数
					<text style="color: teal;margin-right: 20rpx;">{{clockNUmber}}人</text>
				</text>
				<text class="announce-text">不积跬步无以至千里</text>
			</view>
			<button class="button" size="mini">点击签到</button>
		</view>
		
		<!-- 其他帮助服务 -->
		<hot-funtion title="热门功能" :itemData="itemData" style='width: 100%;'></hot-funtion>
		 

	</view>
</template>

<script>
	import uniSection from "@/components/uni-section/uni-section.vue";
	import hotFuntion from "@/components/hot-funtion/hot-funtion.vue"

	export default {
		components:{uniSection,hotFuntion},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				gutter: 0,
				nvueWidth: 730,
				clockNUmber:1,
				itemData:[
					{
						name:'vue',
						url:"111",
						icon:""
					},{
						name:'reject',
						url:"111",
						icon:""
					},{
						name:'js',
						url:"111",
						icon:""
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	
	.content {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;
		background-color: #eee;
		font-size: 30rpx;
	}

	.uni-margin-wrap {
		width: 100%;
		.swiper {
			height: 250rpx;
		}
		
		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
			// border: 1rpx solid red;
		}
	}
	
		
	.announce {
		display: flex;
		align-items: center;
		height: 80rpx;
		width: 100%;
		font-size: 24rpx;
		margin-top: 20rpx;
		background-color: #fff;
		color:teal;
		padding: 0 30rpx;
		box-sizing: border-box;
		
		.announce-text {
			width: 100%;
			display: block;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-left: 10rpx;
		}
	}
	
		
	.clock-in {
		display: flex;
		flex-direction: column;
		margin-top: 20rpx;
		height: 200rpx;
		line-height: 100rpx;
		width: 100%;
		background-color: #fff;
		.clock-sign {
			padding: 0 30rpx;
			text-align: center;
		}
	}
	


	
</style>
