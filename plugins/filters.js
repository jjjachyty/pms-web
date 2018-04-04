import Vue from 'vue'

let dictData = {
  'commyType': {1: '住宅', 2: '商业'},
  'locationState': {1: '出租中', 2: '未出租', 3: '已售卖', 4: '维修中'},
  'parkState': {1: '已预定,待入库', 2: '已入库,待出库', 3: '已出库,已付款'}
}

export function dict (key, dictName) {
  console.log(dictName, key)
  return dictData[dictName][key] || ''
}

let filters = {
  dict
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters
