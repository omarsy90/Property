<template>
  <div id="app">
    <div id="nav">
     <basic-layout></basic-layout>
        
    </div>
    <router-view />
  </div>
</template>



<script>
  import BasicLayout from "./views/BasicLayout.vue"
 export default {
   components:{
     BasicLayout

   }
 }

</script>


<style lang="scss">
 @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
