import Vue from 'vue'
import Router from 'vue-router'
import reportDesigner from '@/components/report-designer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reportDesigner',
      component: reportDesigner
    }
  ]
})
