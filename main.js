import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'


uniCloud.addInterceptor('callFunction',{
    success(res){
        const {result}=res
		console.log(result)
        if(result.errCode!==0){
            throw new Error(result.errMsg)
        }
    }
})


const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif