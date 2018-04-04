import Vue from 'vue'
import axios from 'axios'

Vue.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.POST = function (url, data) {
    return axios.post('api.bmobcloud.com/1' + url, {data})
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }

  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    },
    methods: {
      $POST (url, data) {
        return axios.post('api.bmobcloud.com/1' + url, {data})
      }
    }

  })

  // 4. 添加实例方法
  Vue.prototype.$http = axios
}
