import Vue from 'vue'
import App from './App'
 //引入全局请求插件
import { myRequest } from './util/api.js'
Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false
// Vue.prototype.broadcast=new Vue();
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
