<template>
    <div>
        <!-- <header-component></header-component>
        <slider></slider>
     <add-slide v-if="isLogged"></add-slide>   
        <spinner v-if="isLoading" class="spinner"></spinner>
       <slides-view class="slidesview" v-if="isLogged" ></slides-view> 
        <br><br>
        <ourservice-component></ourservice-component>
        <produckts-view> </produckts-view>
        <add-produckt v-if="isLogged"></add-produckt> 
        
        <footer-component></footer-component> -->
        <test></test>
        
    </div>
</template>

<script>
import test from "../components/test.vue"
// import Slider from "../components/Slider.vue"
// import AddSlide from "../components/AddSlide.vue"
// import Spinner from "../components/Spinner.vue"
// import SlidesView from "../components/SlidesView.vue"
// import ProducktsView from "../components/ProducktsView.vue"
// import AddProduckt from "../components/AddProduckt.vue"
// import OurserviceComponent from "../components/OurserviceComponent.vue"
// import FooterComponent from "../components/FooterComponent.vue"
// import HeaderComponent from "../components/Header.vue"
// import authService from "../service/authentication.js"
  export default{
      components:{
        // HeaderComponent,
        // Slider,
        // AddSlide,
        // Spinner,
        // SlidesView,
        // ProducktsView,
        // AddProduckt,
        // OurserviceComponent,
        // FooterComponent
        test
      },
      data(){
          return{

          }
      },

      computed:{
          isLoading(){
           //   return this.$store.getters['process'] ;
           return false
          },

          isLogged(){
         //   return authService.isLogin()
         return false 
          }

          
      }
  }

</script>

<style scoped lang="scss">
.slidesview{
    
}

</style>
