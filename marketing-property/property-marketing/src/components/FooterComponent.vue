<template>
    <div class="footer" id="impresum">
        <div class="impresum">
            <h1>العنوان</h1>

            <p>Eng.Leonardi</p>
            <p>401 N Tejon St, Colorado Springs, CO 80903, USA</p>


            <p>telefoon : 0171-14525 06</p>
            <p>telefax : 0911-5430 820</p>
            <p>Email : leonardi_designer@gmial.com </p>
        </div>
        <div class="contact-us">
            <section class="social-media">
                <h1>تواصل معنا </h1>
                <a href="">
                    <img src="../../public/img/facebook.png" alt="facebook">
                </a>
                <a href="">
                    <img src="../../public/img/instagram.png" alt="instgram">
                </a>

                <a href="">
                    <img src="../../public/img/gmail.png" alt="email">
                </a>

            </section>
        </div>

        <div class="about-us">
            <h1>من نحن </h1>
            <p>شركة عقارية في تركيا تقدم خدمات البناء و الترميم و التصميم  و الاستشارة .
اذا كنت ترغب بتحويل فكرتك الى حقيقة و تبحث عن التصميم المناسب فنحن هنا لمساعدتك. 
نقدم خدماتنا الاستشارية المجانية  فيما يخص العقارات و نقوم بالاجابة على جميع اسئلتك .
اذا كنت ترغب بشراء عقار ما نقوم بتوفير خدمة الوساطة لنلبي رغباتك و ايجاد العقار الذي يناسبك</p>
        </div>


    </div>

</template>

<script>
    export default {
        name: "footer",
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
    .footer {

        background-color: rgb(45, 45, 80);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        color: white;
        margin-top: 30px;
        width: 90vw;
        margin-left: 5vw;
        margin-right: 5vw;
        direction: rtl;
    }

    .footer div {


        width: 300px;

        margin-right: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 20px;


    }

    .footer p {

        padding-left: 5px;
    }






    .footer .social-media {

        text-align: center;
    }

    .footer h1 {

        width: 100%;

        text-align: center;
        font-size: 2em;

    }

    

    .social-media h1 {

        transform: translateY(-6px)
    }

    .social-media img {

        border-radius: 50%;

        margin: 0px 10px 0 10px;


    }

    .footer .about-us {

    }

    .about-us p {

        padding-left: 10px;
    }
</style>