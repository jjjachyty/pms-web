<template>



              <v-layout row wrap grid-list-sm text-xs-center>
      <v-flex xs12 sm12 md12 lg6 xl6  v-for="item in items" v-bind:key="item.carNumber">
        <v-layout row>
           <v-flex xs5>
        <v-card dark color="blue darken-3">
          <v-card-text class="title">{{item.carNumber}}</v-card-text>
        </v-card>
        </v-flex>
         <v-flex xs3>
                <v-card dark color="blue darken-1">
          <v-card-text class="subheading">{{item.regional}} {{item.location}}</v-card-text>
        </v-card>
         </v-flex>
          <v-flex xs4>
         <v-card dark color="blue lighten-1">
          <v-card-text class="caption">{{item.intoTime}}</v-card-text>
        </v-card>
        
      </v-flex>
    </v-layout>
     </v-flex>
    </v-layout>

</template>

<script>
  export default {
    data: () => ({
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      items: [
        {
          value: false,
          carNumber: '渝DDZ731',
          intoTime: '03-25 15:35:25',
          regional: 'A1',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ732',
          intoTime: '03-25 15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ734',
          intoTime: '03-25 15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ735',
          intoTime: '15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ736',
          intoTime: '15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ737',
          intoTime: '15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ739',
          intoTime: '15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ711',
          intoTime: '15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ741',
          intoTime: '15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        },
        {
          value: false,
          carNumber: '渝DDZ721',
          intoTime: '15:35:25',
          location: 256,
          duration: 12,
          income: 4.0
        }
      ]
    })
  }
</script>