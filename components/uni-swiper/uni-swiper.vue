<template>
  	<!-- 轮播图 -->
    <view class="uni-margin-wrap home-box">
        <swiper class="swiper" circular :indicator-dots="indicator" :autoplay="autoplay" :interval="interval"
            :duration="duration" >
            <swiper-item v-for="(item,index) in swiperList" :key="index">
                <view class="swiper-item">
                    <img :src="item.src" :alt="item.alt" class="swiper-img">
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
export default {
    props:{
        interval:{
            type:[String,Number],
            default:"5000"
        },
        duration:{
            type:[String,Number],
            default:"500"
        },
        indicator:{
            type:Boolean,
            default:false
        },
        autoplay:{
            type:Boolean,
            default:true
        },
        swiperList:{
            type:Array,
            default:[]
        }
    }

}
</script>

<style lang='scss' scoped>

.uni-margin-wrap {
		width: 100%;
		margin-bottom: 20rpx;
        padding: 10rpx;
		.swiper {
			height: 300rpx;
		}
		
		.swiper-item {
			display: block;
			height: 100%;
			text-align: center;
			// border: 1rpx solid red;
		}
	}
    .swiper-img {
        height: 100%;
        width: 100%;
        border-radius: $border-radius-size;
    }

</style>