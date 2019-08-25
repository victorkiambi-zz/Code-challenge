<template>
 
    <v-navigation-drawer
    
    id="app-drawer"
    
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
         <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
      </v-layout>
    
  </v-navigation-drawer>
    

</template>


<script>
import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from '@/plugins/vuetify'

import 'vue-material-design-icons/styles.css';

Vue.use(Vuetify)



   export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: '' },
          { title: 'Account', icon: '' },
          { title: 'Admin', icon: '' },
        ],
      }
    },
  }
</script>