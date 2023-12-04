
<template>
    <div class="container-">
        <div class="slider" :style="{width: (getSlides.length *100)+'%'}">

            <div v-for="slide in getSlides" :key="slide._id"   class="slide"  :style="{width:`${100/getSlides.length}%`}">
                <img :src='dir+slide.slideUrl.replace("./","")+"" '>
            </div>

        </div>

        <div class="manuel-navigation">
            <section v-for="(slide,index) in getSlides" :key="index"  @click="navigate(index)" class="btn"></section>
            
        </div>

    </div>
</template>

<script>
  
  export default {
      name:"slider-view",
      data() {
          return {
              dir:"http://localhost:3000/" ,
              counter:0 
              

          }
      },
      computed:{
            getSlides(){
                return this.$store.getters['slides'];
            }
      },
      methods:{
              navigate(index){
                
                 const firstSlide = document.getElementsByClassName('slide')[0];
                firstSlide.style.marginRight = `${- 100/(this.getSlides.length)*(index)}%`;
                this.counter = index ;

                const Btns = document.getElementsByClassName("btn") ;
                Btns[this.counter].style.backgroundColor = "#3498DB" ;

                  for(let i = 0 ; i< Btns.length; i++){
                      if(i !== this.counter){
                          Btns[i].style.backgroundColor = "white"
                      }
                  }
                  
              }
      },
      mounted(){
          this.$store.dispatch('slides');

          setInterval(()=>{
              this.navigate(this.counter) ;
              this.counter++ ;
              
              if(this.counter >=this.getSlides.length ){
                  this.counter=0 ;
              }
          },3000)
      }
  }

</script>

<style scoped lang="scss">

  .container- {

            width: 90vw;
            height: 700px;
            margin-left: 5vw;
            margin-right: 5vw;
            direction: rtl;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            
        }

        .slider {

            height: 100%;
           direction: rtl;
            display: flex;

        }

        .slide {

           // width: 25%;
            height: 100%;

            transition: 2s;


        }

        .slide>img {
            width: 100%;
            height: 100%;

        }



        .manuel-navigation {
            direction: rtl;
            position: absolute;
            height: 50px;
            width: 100%;
            bottom: 0px;

            z-index: 1000;
            display: flex;
            justify-content: center;

        }

        section.btn {
            background-color: rgb(221, 212, 212);
            width: 20px;
            height: 20px;
            margin-left: 5px;
            border-radius: 100%;
            border: 2px solid white;
            cursor: pointer;


        }

        .gallery-edit {


            width: 80vw;
            position: absolute;
            left: 10vw;
            right: 10vw;
            top: 515px;
            margin-left: 9px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 10px;
            box-sizing: border-box;




        }

        .gallery-edit img {

            width: 100%;
            height: 150px;


        }

        .gallery-edit section {
            position: relative;
            width: 250px;
            height: 150px;
            margin-bottom: 5px;
        }

        .gallery-edit section.first {


            height: 50px;
            width: 100%;
            text-align: center;
            box-sizing: border-box;

        }


</style>




