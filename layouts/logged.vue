<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      absolute
      floating
      fixed
      app
    >
      <!-- <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list> -->

             <v-list>
          <v-list-group
            v-model="item.active"
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.to">
              <v-list-tile-action>
                <v-icon :color="subItem.color">{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      
    </v-navigation-drawer>
    <v-toolbar fixed app color="blue darken-3" dark :clipped-left="true">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>


      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
            <v-btn icon large>
        <v-avatar size="32px" dark tile>
          <img
            :src="avatar"
            alt="头像"
            width="32px"
          >
        </v-avatar>
      </v-btn>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
      
        <v-icon title='通知'>notifications</v-icon>
        
      </v-btn>
      
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        avatar: 'avatar.png',
        items: [
          {
            action: 'fa-pie-chart',
            title: '费用统计',
            active: true,
            items: [
              { icon: 'fa-money', title: '物管费', to: '/pmf', color: 'blue' },
              { icon: 'fa-car', title: '停车费', to: '/park', color: 'indigo' },
              { icon: 'fa-tint', title: '水费', to: '/park', color: 'green' },
              { icon: 'fa-bolt', title: '电费', to: '/park', color: 'deep-orange' }
            ]
          },
          {
            action: 'fa-user-secret',
            title: '信息维护',
            items: [
              {icon: 'fa-building', title: '小区', to: '/community', color: 'blue-grey'},
              {icon: 'fa-location-arrow', title: '车位', to: '/parkmap/location', color: 'blue'},
              {icon: 'fa-address-book', title: '住户', to: '/parkmap/household', color: 'yellow'}
            ]
          },
          {
            action: 'fa-cogs',
            title: '设置',
            items: [
              { title: '用户' },
              { title: '角色' },
              { title: '权限' }
            ]
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'PMS'
      }
    }
  }
</script>