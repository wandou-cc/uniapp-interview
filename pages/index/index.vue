<template>
	<view class="cc-home">

		<!-- 轮播图 -->
		<view>
			<unicloud-db v-slot:default="{data, loading, error, options}" collection="swiper">
				<view v-if="error">{{error.message}}</view>
				<view v-else>
					<uni-swiper :swiperList='data'></uni-swiper>
				</view>
			</unicloud-db>
		</view>
		
		<!-- 公告 -->
		<view class='home-box notice-bar'>
			<uni-notice-bar style='border-radius: 15rpx;' background-color='$box-background-color' color='teal' :speed='30' show-icon scrollable text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</view>
		
		<!-- 中间高频配置 后期开发成为可配置 -->
		<view class="cc-home-top">
			<view class="home-top-left home-box ">
				<!-- <uni-clock></uni-clock> -->
				<!-- 图表 -->
			</view>
			<view class="home-top-right">
				<view class="right-top home-box">
					 <uni-sign-in></uni-sign-in>
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
		<view class="home-box">
			<uni-section title='辅助功能' type="line">
				<view class="section-body">
					<uni-auxiliary v-for="item in auxiliaryList" :key="item.id" :itemData='item' class='auxiliary'></uni-auxiliary>
				</view>
			</uni-section>
		</view>
		
	</view>
</template>

<script>
	import uniSection from "@/components/uni-section/uni-section.vue";
	import uniAuxiliary from "@/components/uni-auxiliary/uni-auxiliary.vue";
	import uniSwiper from "@/components/uni-swiper/uni-swiper.vue";
	import uniSignIn from "@/components/uni-sign-in/uni-sign-in.vue";
	// import uniClock from "@/components/uni-clock/uni-clock.vue";
	const db = uniCloud.database()
	
	export default {
		components:{ uniAuxiliary, uniSection, uniSwiper, uniSignIn},
		data(){
			return {
				auxiliaryList:[
					{
						id:"1",
						icon:"color",
						title:"简历模版",
						url:"",
					},
					{
						id:"2",
						icon:"wallet",
						title:"简历内推",
						url:"",
					},
					{
						id:"3",
						icon:"settings-filled",
						title:"面试技巧",
						url:"",
					},
					{
						id:"4",
						icon:"settings-filled",
						title:"介绍模版",
						url:"",
					},
					{
						id:"5",
						icon:"settings-filled",
						title:"博客",
						url:"",
					},
				],
				swiperList:[
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175328296.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175328298.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175331304.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175342328.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175334310.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175334308.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175335312.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175341326.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175330302.jpg",
						alt:"壁纸"
					},
					{
						src:"http://img.7476.com/d/file/titlepic/2018-11-24/17/175335314.jpg",
						alt:"壁纸"
					},
					
				]
			}
		},
		
		onShow() {
			// db.collection("info").where("_id == '62cd25cef17d02000148abb7'").get().then(res=>{
			// 	console.log(res)
			// })
		}
		
	}
	
</script>

<style lang="scss" scoped>
		
	.cc-home {
		// background-color: #eee;
		padding: 20rpx;
	}
	
	.notice-bar {
		margin-bottom: 20rpx;
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
		// flex: 1;
		width: 340rpx;
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

	.section-body {
		padding: 10rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.auxiliary {
		width: calc(50% - 20rpx);
		margin: 10rpx;
	}
	
	
</style>