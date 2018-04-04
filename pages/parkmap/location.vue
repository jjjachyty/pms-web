<template>
  <div fluid fill-height>

    <v-dialog v-model="dialog" max-width="500px">
      <v-btn color="primary" dark slot="activator" @click="addItem" class="mb-2">新增</v-btn>

      <v-card>
        <v-card-title>
          <span class="headline">车位维护</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>

                <v-select :items="searchData" v-model="selected" label="名字" single-line required  auto cache-items item-text="name"
                  @input="setaddress" item-value="id" return-object :search-input.sync="keyWorlds">

                </v-select>

              </v-flex>
              <v-flex xs12>
                  <v-text-field type="number" label="编号" v-model="editedItem.number" suffix=""></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="number" label="楼层" v-model="editedItem.floor" suffix=""></v-text-field>

              </v-flex>
              <v-flex xs12>
                <v-text-field type="number" label="区域" v-model="editedItem.regional" ></v-text-field>

              </v-flex>
                <v-flex xs12>
                            <v-radio-group v-model="editedItem.state" row>
                  <v-radio label="出租" color="primary" value="1"></v-radio>
                  <v-radio label="不出租" color="orange" value="2"></v-radio>
                </v-radio-group>
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

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :pagination.sync="pagination"
      hide-actions
      class="elevation-1"
    >
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
        <td>{{ props.item.community }}</td>
        <td >{{ props.item.floor }}</td>
        <td >{{ props.item.regional }}</td>
        <td >{{ props.item.number }}</td>
        <td >{{ props.item.state | dict('locationState')}}</td>
        <td >{{ props.item.updateUser }}</td>
        <td >{{ props.item.updateAt }}</td>
        
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon v-if="props.item.state == 1" color="yellow">fa-arrow-down</v-icon>
            <v-icon v-else color="teal">fa-arrow-up</v-icon>
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
  </div>
</template>

<script>
  export default {
    layout: 'logged',
    data () {
      return {
        search: '',
        searchData: ['爱加橄榄园'],
        editedItem: { },
        dialog: false,
        pagination: {},
        selected: [],
        headers: [
          {
            text: '小区',
            sortable: true,
            value: 'community'
          },
          { text: '楼层', value: 'floor' },
          { text: '区域', value: 'regional' },
          { text: '编号', value: 'number' },
          { text: '状态', value: 'state' },
          { text: '更新人', value: 'updateUser' },
          { text: '更新时间', value: 'updateAt' },
          { text: '操作', sortable: false }
        ],
        items: [
          {
            value: false,
            community: '爱加橄榄园',
            number: '256',
            floor: -1,
            regional: 'A1',
            state: 1,
            description: '1212',
            updateUser: '张力',
            updateAt: '2018-03-23'
          },
          {
            value: false,
            community: '爱加欧郡',
            number: '206',
            floor: -1,
            regional: 'A1',
            state: 2,
            description: 'xxxassasa',
            updateUser: '张力',
            updateAt: '2018-03-23'
          },
          {
            value: false,
            community: '爱加橄榄园',
            number: '200',
            floor: -1,
            regional: 'A1',
            state: 1,
            description: 'xxxassasa',
            updateUser: '张力',
            updateAt: '2018-03-23'
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

      },
      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },
      close () {
        this.dialog = false
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
      }
    }
  }
</script>