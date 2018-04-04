<template>
  <v-app>

    <v-dialog v-model="dialog" max-width="500px">
      <v-btn color="primary" dark slot="activator" @click="addItem" class="mb-2">新增</v-btn>

      <v-card>
        <v-card-title>
          <span class="headline">小区维护</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>

                <v-select :items="searchData" v-model="selected" label="名字" single-line required v-if="isAdd" auto cache-items item-text="name"
                  @input="setaddress" item-value="id" return-object :search-input.sync="keyWorlds" autocomplete>
                  <template slot="item" slot-scope="data">
                    <v-list-tile-content>
                      <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="data.item.address"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </template>
                </v-select>

              </v-flex>
              <v-flex xs12>
                <v-radio-group v-model="editedItem.type" row>
                  <v-radio label="住宅" color="primary" value="1"></v-radio>
                  <v-radio label="商业" color="orange" value="2"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="number" label="车位数" v-model="editedItem.total" suffix="(个)"></v-text-field>

              </v-flex>
              <v-flex xs12>
                <v-text-field type="number" label="可租车位" v-model="editedItem.free" suffix="(个)"></v-text-field>

              </v-flex>
              <v-flex xs12>
                <v-text-field label="价格" v-model="editedItem.price" suffix="(元/月)"></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">取消</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-data-table :headers="headers" :items="items" :search="search" :pagination.sync="pagination" hide-actions class="elevation-1">
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <span slot="activator">
            {{ props.header.text }}
          </span>
          <span>
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.type | dict('commyType') }}</td>
        <td>{{ props.item.total }}</td>
        <td>{{ props.item.free }}</td>
        <td>{{ props.item.price }}</td>
        <td>{{ props.item.address }}</td>

        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages" :total-visible="7" circle></v-pagination>
    </div>
  </v-app>
</template>

<script>
  export default {
    layout: 'logged',
    data () {
      return {
        isAdd: true,
        searchData: [ ],
        search: '',
        keyWorlds: '',
        editedItem: { },
        type: [ {'text': '住宅', 'id': '1'}, {'text': '商业', 'id': '2'} ],
        dialog: false,
        pagination: {},
        selected: [],
        headers: [
          {
            text: '名字',
            sortable: true,
            value: 'name'
          },
          { text: '类型', value: 'type' },
          { text: '车位总数', value: 'total' },
          { text: '可租车位', value: 'free' },
          { text: '车位价格(元/年)', value: 'price' },
          { text: '位置', value: 'address' },
          { text: '操作' }
        ],
        items: [
          {
            value: false,
            name: '爱加橄榄园',
            address: '',
            type: '2',
            total: 6.0,
            free: 24,
            price: 360
          },
          {
            value: false,
            name: '爱加橄榄园',
            address: '',
            type: '1',
            total: 16.0,
            free: 23,
            price: 450
          }
        ]
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    methods: {
      addItem () {
        this.isAdd = true
        this.editedItem = {}
      },
      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.selected = {name: item.name, id: item.name}
        console.log('item', item, 'selected', this.selected)
        this.isAdd = false
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },
      close () {
        this.dialog = false
        this.isAdd = !this.isAdd
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      },
      keyUpSearch (val) {
        var that = this
        console.log('AMap', AMap)
        AMap.service(['AMap.PlaceSearch'], function () {
          var placeSearch = new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            type: '商务住宅'
          })
          placeSearch.search(val, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              console.log(result)
              that.searchData = result.poiList.pois
            }
          })
        })
      },
      nameFilter (item, queryText, itemText) {
        const hasValue = val => val != null ? val : ''
        const text = hasValue(item.name)
        const query = hasValue(queryText)
        return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1
      },
      setaddress (val) {
        console.log('this.selected', this.selected)
        this.editedItem.address = val.address
        this.editItem.lng = val.lng
        this.editItem.lat = val.lat
        console.log('val', val)
      }
    },
    watch: {
      keyWorlds (val) {
        this.keyUpSearch(val)
      }
    }
  }
</script>