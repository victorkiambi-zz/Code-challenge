<template>
    <v-app>

        <v-navigation-drawer app>

            

                <v-container fluid>
                  <router-link to="/">login</router-link>
                   <router-link to="/supplier">Go to Bar</router-link>

                    <router-view>
                    </router-view>
                </v-container>
            
        </v-navigation-drawer>

    </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)



export default {
    
}
</script>