<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>
<script>
import Home from './views/Home'
export default {
  props:{

  },
  components:{
    Home
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style >
*{
  margin: 0;padding: 0;list-style: none;box-sizing: border-box;
}
html,body,#app{
    width: 100%;
    height: 100%;
}
</style>