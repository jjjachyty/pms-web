import Vue from 'vue'
// 引入vue-amap
import VueAMap from 'vue-amap'
Vue.use(VueAMap)

// 初始化vue-amap
Vue.prototype.VueAMap = VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: '58136717c12d3b465c253f7770d1a32b',
  // 插件集合
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']
})
