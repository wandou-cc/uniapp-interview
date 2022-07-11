<template>
  <view class="uni-sign-in">
        <view class="sign-top">
            	<uni-icons class="sign-in-icon" type="calendar-filled" :color='color' size="18"></uni-icons>
                <text class="title">{{title}}</text>
        </view>

        <view class="sign-main">

            <view class="tag-view"  v-if="!isSignined" >
                <uni-tag :inverted="true" text="点击签到" @click="signining" />
            </view>

            <view class="sign-success"  v-else >
                当前积分:300<br />
                (积分可用于兑换礼物)
            </view>

        </view>

  </view>
</template>

<script>
export default {
    name:"uniSiginIn",
    data(){
        return {
            isSignined:false,
            title:"",
            color:"#ccc"
        }
    },
    mounted(){
        this.getSignIn()
    },
    methods:{
        getSignIn(){
            // 发请求获取今天是否已经签到 获取箴言
            this.isSignined = false;
            this.title = '千里之行始于足下千里之行始于足下千里之行始于足下千里之行始于足下千里之行始于足下'
        },
        signining(){
            // 发请求签到
            this.isSignined = true;
            this.title = '签到成功啦';
            this.color = 'green'

        }
    }

}
</script>

<style lang='scss' scoped>
    .uni-sign-in {
        padding: 20rpx;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .sign-top {
            width: 100%;
            display: flex;
            align-items: center;
            height: 40%;
            font-size: 20rpx;
            // border-bottom: 1px solid teal;
            .sign-in-icon {
                margin-right: 15rpx;
            }
            .title {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .sign-main {
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            .sign-success {
                font-size: 20rpx;
                text-align: center;
            }
        }
    }

</style>