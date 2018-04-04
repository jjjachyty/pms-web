<template>
  <v-app>  <One></One></v-app>



</template>
<script>
import One from '~/pages/dashboard/one.vue'
import Two from '~/pages/dashboard/two.vue'
import Three from '~/pages/dashboard/three.vue'

export default {
  layout: 'logged',
  components: {
    One,
    Two,
    Three
  }
}
</script>
