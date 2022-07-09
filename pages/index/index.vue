<template>
	<view class="cc-home">
		<!-- 轮播图 -->
		<view class="uni-margin-wrap home-box ">
			<swiper class="swiper" circular :indicator-dots="false" :autoplay="true" :interval="2000"
				:duration="500" >
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
		<view class='home-box'>
			<uni-notice-bar style='border-radius: 15rpx;' background-color='#fff' color='teal' :speed='30' show-icon scrollable text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</view>
		
		
		<view class="cc-home-top">
			<view class="home-top-left home-box ">
				每日一题目
			</view>
			<view class="home-top-right">
				<view class="right-top home-box">
					 签到
				</view>
				<view class="right-bottom">
					<view class="right-bottom-left home-box">
						换肤
					</view>
					<view class="right-bottom-right home-box">
						搜索
					</view>
				</view>
			</view>
		</view>
		<!-- 辅助功能 -->
	</view>
</template>


<style lang="scss" scoped>
		
	.cc-home {
		// background-color: #eee;
		padding: 20rpx;
	}
	.uni-margin-wrap {
		width: 100%;
		margin-bottom: 20rpx;
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
		
	.cc-home-top {
		height: 300rpx;
		display: flex;
		margin-bottom: 20rpx;
	}
	.home-top-left {
		flex: 1;
		margin-right: 20rpx;
	}
		
	.home-top-right {
		flex: 1;
		display:flex;
		flex-direction: column;
			
		.right-top {
			flex: 1;
			margin-bottom: 10rpx;
		}
		.right-bottom{
			display: flex;
			flex: 1;
		}
		.right-bottom-left {
			flex: 1;
			margin-right: 10rpx;
		}
		.right-bottom-right {
			flex: 1;
		}
		
	}
	/deep/.uni-noticebar {
		border-radius: 15rpx;
	}
	
</style>