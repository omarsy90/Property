<template>
<div class="our-services" id="ourservices">
        <h2>خدماتنا</h2> 

        <div class="service">
            <div class="hover-effect"></div>
            <img class="icon"  src="../../public/img/building.jpg">
            <h3 class="title">بناء </h3>
            <p class="discription">نقوم مشروعك الخاص و تلبية احتياجاتك كافة ،  نحول فكرتك الى حقيقة و بناء التصميم الذي تتخيله ، نساعدك على اختيار التصاميم و نكون معك في كل خطوات المشروع</p>
            
        </div>

        <div class="service">
            <div class="hover-effect"></div>
            <img class="icon"   src="../../public/img/mediation.jpg"  > 
            <h3 class="title"> وساطة</h3>
            <p class="discription">اذا كنت ترغب بشراء عقار ما في تركيا و ترغب في توفير وقتك للبحث  فنحن هنا لمساعدتك و اثراءك بالمعلومات و نقوم بالتوسط  لك لشراء عقار يناسب تطلعاتك</p>
        </div>


        <div class="service">
            <div class="hover-effect"></div>
            <img class="icon" src="../../public/img/installation.jpg"> 
            <h3 class="title"> ترميم</h3>
            <p class="discription">ترميم البناء و توسيعه  اذا كان لديك شقة او بناء بالفعل  و ترغب في توسيعه او تجميله  نقدم لك كافة الاستشارات و الدعم و التصاميم اللازمة لذلك</p>
        </div>

    </div>
    
</template>

<script>

export default{
    name:"ourservice",
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">

.our-services{

    background-color:rgb(67, 67, 105) ;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
    min-height: 400px;
    

    
    
}

.our-services > h2{
    
    font-weight: 300 !important;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    font-size: 2rem;
    letter-spacing:1px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    

}

.service{

    
    width: 400px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color:  white;
    transition: all 1s ease-out;
     position: relative;
}

.service > .icon {

    width: 75px;
    height: 75px;
   
    margin: 0 auto;
    border-radius: 100%;
    margin-top: 10px;
 
}

.service > p {
    margin: 10px;
    margin-top: -15px;
    font-size: 1.1rem;
}
 .service > h3{ 

    margin-top: 5px;
    margin-bottom: 15px;
   font-weight: 900px;
 }


 .service:hover{

    background-color: rgb(63, 58, 87);
    transform: translateY(-20px);
 }
 .service:hover div.hover-effect{
     opacity: 1;
 }

 div.hover-effect{

    width: 50px;
    height: 50px;

    position: absolute;
    right: 0px;
    background: linear-gradient(to bottom left ,rgb(67, 67, 105) 50%, rgb(99, 95, 121) 50%);
    opacity: 0;
    transition:all 1s ease-out
    

 }


</style>
