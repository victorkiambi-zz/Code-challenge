<template>
    <Toolbar></Toolbar>
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