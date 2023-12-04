<template>
 <div class="proposals swiper mySwiper" id="offers" >
        <div class="proposals-box swiper-wrapper">
            <div class="proposal-item swiper-slide" v-for="produckt in getProduckts" :key="produckt._id">
                <img  v-if="isLogged" class="delete-icon" src="../../public/img/delete.png" @click="deleteProduckt(produckt._id)">
                <img :src=" dir+produckt.imgUrl.replace('./','')+''" class="proposal-item-img">
                <div class="proposal-item-info">
                    <table>
                        <tr>
                            <td> <img src="../../public/img/location.jpg" alt="adresse" class="info-icon"> </td>
                            <td> {{produckt.location}} </td>
                        </tr>
                        <tr>
                            <td> <img src="../../public/img/size.jpg" alt="space" class="info-icon"> </td>
                            <td>    {{produckt.area}} </td>
                        </tr>
                        <tr>
                            <td> <img src="../../public/img/feutures.jpg" alt="feuture" class="info-icon"> </td>
                            <td>   {{produckt.features}} </td>
                        </tr>

                    </table>

                </div>
                       
                <a class="contact-us-link" href="https://wa.me/00905316633631" target="_blank">

                    <div class="contact-us">
                        <img src="../../public/img/icons8-whatsapp-50.png">
                    </div>

                </a>

            </div>

        </div>
        
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
          
    </div>
    
</template>


<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script>

 import authService from "../service/authentication.js"

export default {
    name:"ProducktsView",
    data(){
        return{
            dir:' http://localhost:3000/',
            productsCount:0,
            
        }
    },
    computed:{
      getProduckts(){
          return this.$store.getters["produckts"]
      },
      isLogged(){
        return authService.isLogin();
      }
    },
    methods:{
       customizeSwiper(){
              console.log('rezise')
            if(window.innerWidth > 900){
              this.productsCount=3 ;

            }
            if(window.innerWidth < 900){
                this.productsCount=2 ;
            }
            if(window.innerWidth <800){
                this.productsCount=1
            }

         const swiper = new Swiper(".mySwiper", {
          slidesPerView: this.productsCount,
          spaceBetween: 50,
          slidesPerGroup: this.productsCount,
          loop: false,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

       },

       deleteProduckt(producktId){
           
           this.$store.dispatch("deleteProduckt",producktId).then(()=>{
               if(this.$store.getters["success"]){
                   window.alert(this.$store.getters["success"]);
                   window.location.reload()
               }else{
                   window.alert(this.$store.getters["error"]) ;
               }
           }) ;
           
       }

    },
   async mounted(){
      await  this.$store.dispatch("produckts")
        this.customizeSwiper();
      const body = document.querySelector('body');
        body.onresize = ()=>{
        this.customizeSwiper()
         }

    },

    
    
}


        
      

</script>

<style scoped lang="scss">
@import url("https://unpkg.com/swiper/swiper-bundle.min.css") ;


.proposals {

            width: 80vw;
            margin-top: 30px;
            margin-left:10vw;
            position: relative;  
            padding-right: 50px;
            padding-left: 50px;
            box-sizing: border-box;
           
        }

         

        

        .proposal-item {
            
           background-color: rgb(246, 245, 250);
           position: relative;
             direction: rtl;
        }
        .delete-icon{
            width:30px;
            height: 30px;
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .proposal-item:hover {
           width:400px ;
           cursor:pointer

        }


       

        

        .proposal-item-img {
            width: 100%;
            height: 300px;
            
        }

        .proposal-item-info {
             font-family: 'Roboto', sans-serif;
            
            color: rgb(54, 54, 54);

            table{
                direction: rtl;
                td{
                    
                    &:nth-child(even){
                        width: 100%;
                        direction: rtl;

                    }
                }
            }

        }

        .info-icon {
            width: 30px;
            height: 30px;
           
            border-radius: 1px;
        }


        .contact-us {
            width: 100%;
            
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
            background-color: rgb(72, 141, 117);

            text-align: center;
            padding-top: 3px;
            padding-bottom: 3px;
            border-radius: 5px;
        }
        .contact-us img{
            height: 3vw;
            width: 4vw;
        }



        

        .swiper-pagination{
             position: static;
             margin-top: 100px;
        }


</style>
