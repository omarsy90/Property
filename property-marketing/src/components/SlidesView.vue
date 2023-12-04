<template>
    
        <div class="gallery-edit">

        
        <section v-for="slide in slides" :key="slide._id" class="section">
            <img src="../../public/img/delete.png" class="icon-delete"  @click="remove(slide._id)">
            <img :src='dir+slide.slideUrl.replace("./","")+"" '>
        </section>
        

        </div>

    
</template>

<script>
  export default {

      data(){
         return{
            dir:' http://localhost:3000/'
         }
      },
        computed:{
            slides(){
                
                return this.$store.getters["slides"] ;
            }
        },
        methods:{
            remove(id){
                console.log(id)
                this.$store.dispatch("deleteSlide",id).then(()=>{
                    window.location.reload()
                })
                
            }
        }
  }

</script>

<style scoped lang="scss">
.gallery-edit {

          // background-color: red;
           margin-top: 10px;
            width: 90vw;
            margin-left:5vw ;
            left: 11.4vw;
            right: 10vw;
            top: 900px;
            
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

        .gallery-edit .icon-delete,
        .modal-body img.icon-delete {

            width: 20px;
            height: 20px;
            position: absolute;
            top: 5px;
            left: 5px;
            cursor: pointer;
            z-index: 1;
        }

        @media only screen and (max-width: 600px) {
            .gallery-edit{
                justify-content: center;
            }
        }

</style>
