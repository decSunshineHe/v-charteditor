import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont'
import SvgIndex from './components/svg-icon/index';
import echarts from 'echarts';
Vue.use(SvgIndex);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})