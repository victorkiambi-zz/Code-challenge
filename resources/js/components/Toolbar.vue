<template>
<v-app>
 <div >
  <v-app-bar clipped-left>
 <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> 
    <v-toolbar-title>Code challenge</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link to="/">
      <v-btn text>Orders</v-btn>
      </router-link>
      <router-link to="/supplier">
      <v-btn text>Suppliers</v-btn>
      </router-link>
       <router-link to="/products">
      <v-btn text>Products</v-btn>
      </router-link>
       </v-toolbar-items>
  
      </v-app-bar>
      
      <div>
          <router-view>
        </router-view> 
      </div>

        
   
  
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width = "200"
      id = "drawer"
    >
    </v-navigation-drawer>
</div>



</v-app>



</template>


<script>
import  Drawer  from '@/js/components/Drawer.vue';
import  Toolbar  from '@/js/components/Toolbar.vue';

    export default {

        components: {
            Drawer,
            Toolbar,

        },
         data() {
    return {
      drawer: false
    }
    
  }
  
    }
</script>