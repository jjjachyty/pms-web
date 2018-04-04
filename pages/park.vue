<template>
   
  <v-container fluid grid-list-md>
      <v-layout row>
          <v-flex xs3>
                    <v-text-field
                  label="输入查询车牌号"
                  v-model="serch.number"
                ></v-text-field>
          </v-flex>
          <v-flex>
                      <v-select
          label="状态"
          :items="states"
          v-model="serch.state"
          disabled
        ></v-select>
          </v-flex>
      </v-layout>


    <v-data-iterator
      content-tag="v-layout"
      row
      wrap
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      rows-per-page-text="每页个数"
      :pagination.sync="pagination"
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md4
        lg3
      >
        <v-card>
          <v-card-title  class="blue darken-3 white--text"><h4>{{ props.item.carNumber }}</h4> </v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content class="">状态:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.state |dict('parkState') }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>入库时间:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.inTime }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>出库时间:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.outTime }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>车位号:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.location }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>车主:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.owners }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>电话:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.phone }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    layout: 'logged',
    data: () => ({
      serch: {},
      states: [{text: '已预定,待入库', key: '1'}, {text: '已入库,待出库', key: '2'}, {text: '已出库,已付款', key: '3'}],
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      items: [
        {
          value: false,
          carNumber: '渝DDZ731',
          state: 2,
          inTime: '2018-03-25 15:25:32',
          outTime: '',
          location: '482',
          owners: '张先生',
          phone: '15520010009'
        },
        {
          value: false,
          carNumber: 'Ice cream sandwich',
          state: 237,
          inTime: 9.0,
          outTime: 37,
          location: 4.3,
          owners: 129,
          phone: '8%'
        },
        {
          value: false,
          carNumber: 'Eclair',
          state: 262,
          inTime: 16.0,
          outTime: 23,
          location: 6.0,
          owners: 337,
          phone: '6%'
        },
        {
          value: false,
          carNumber: 'Cupcake',
          state: 305,
          inTime: 3.7,
          outTime: 67,
          location: 4.3,
          owners: 413,
          phone: '3%'
        },
        {
          value: false,
          carNumber: 'Gingerbread',
          state: 356,
          inTime: 16.0,
          outTime: 49,
          location: 3.9,
          owners: 327,
          phone: '7%'
        },
        {
          value: false,
          carNumber: 'Jelly bean',
          state: 375,
          inTime: 0.0,
          outTime: 94,
          location: 0.0,
          owners: 50,
          phone: '0%'
        },
        {
          value: false,
          carNumber: 'Lollipop',
          state: 392,
          inTime: 0.2,
          outTime: 98,
          location: 0,
          owners: 38,
          phone: '0%',
          iron: '2%'
        },
        {
          value: false,
          carNumber: 'Honeycomb',
          state: 408,
          inTime: 3.2,
          outTime: 87,
          location: 6.5,
          owners: 562,
          phone: '0%'
        }
      ]
    })
  }
</script>