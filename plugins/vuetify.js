import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'

import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VDataTable,
  VPagination,
  VFooter,
  VList,
  VTooltip,
  VBtn,
  VIcon,
  VDialog,
  VRadioGroup,
  VSubheader,
  VGrid,
  VToolbar,
  VSwitch,
  VSelect,
  VForm,
  VAvatar,
  VDataIterator,
  VTextField
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VDataIterator,
    VCard,
    VDataTable,
    VNavigationDrawer,
    VFooter,
    VAvatar,
    VSelect,
    VList,
    VBtn,
    VIcon,
    VTooltip,
    VGrid,
    VSwitch,
    VDialog,
    VRadioGroup,
    VSubheader,
    VPagination,
    VForm,
    VToolbar,
    VTextField
  }
})

Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})
