<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
			
		methods:{
			// getFont(){
			// 	console.log(111)
			// 	uni.loadFontFace({
			// 	  family: 'alibaba',
			// 	  source:"url('https://images.pandaomeng.com/Montserrat-Regular.ttf')",
			// 	  success() {
			// 		  console.log('success')
			// 	  }
			// 	})
			// }
		}
	}
</script>

<style lang="scss">	
// 微信小程序的字体只能通过网络地址并且是https 与微信域名一致 或 开启跨域
	// @font-face{
	// 	font-family:'alibaba'; 
	// 	src: url('https://images.pandaomeng.com/Montserrat-Regular.ttf')
	// }

	@import "@/pages/assets/css/index.scss";
</style>
