<template>
    <view>
        <uni-sign-in ref="signIn"></uni-sign-in>
        <button type="default" @click="signIn">普通签到</button>
        <button type="default" @click="signInByAd">看广告签到</button>
    </view>
</template>
<script>
    export default {
        methods: {
            signIn() { //普通签到
                this.$refs.signIn.open()
            },
            signInByAd(){ //看激励视频广告签到
                this.$refs.signIn.showRewardedVideoAd()
            },
        }
    }
</script>