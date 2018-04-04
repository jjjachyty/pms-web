<template>
  <v-app>
      <input type="text" ref="searchText" id="searchText" @keyup="keyUpSearch" placeholder="请输入地址"/>    
  
  
<div class="address_items" id="address_result" v-if="searchData.length > 0">  
  <div class="address_item" v-for="item in searchData" v-bind:key="item.name">  
    <div class="title">{{ item.name }}</div>  
    <div class="description">{{ item.pname }}{{ item.cityname }}{{ item.address }}</div>  
  </div>  
</div>  
  </v-app>
</template>


<script>
export default {
  data () {
    return {
      searchData: {}
    }
  },
  methods: {
    keyUpSearch () {
      console.log('AMap', AMap)
      var _this = this
      var txt = this.$refs.searchText.value
      AMap.service(['AMap.PlaceSearch'], function () {
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 5,
          pageIndex: 1,
          type: '商务住宅'
        })
        placeSearch.search(txt, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            console.log(result)
            _this.searchData = result.poiList.pois
          }
        })
      })
    }
  }
}
</script>
