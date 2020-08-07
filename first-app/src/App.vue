<template>
  <div id="app">

    <NavBar></NavBar>

    <router-view/>
  </div>
</template>


<script>
import NavBar from './components/NavBar';

export default {
  data(){
    return {}
  },
  methods:{

  },
  components:{
    NavBar
  },
  watch : {
  },
  mounted(){
  }

}




</script>


<style>

</style>
