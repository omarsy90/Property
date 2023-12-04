<template>
    <div class="header">
        <ul class="list-header">
            <li><a href="#ourservices"> خدماتنا</a></li>
            <li> <a href="#offers">عروض </a> </li>
            <li> <a href="#impresum"> من نحن</a> </li>
            <li> <a href="#impresum"> تواصل معنا </a> </li>
            <li v-if="!!!isLogged">
                <router-link to="/login"> تسجيل دخول </router-link>
            </li>
            <li v-else> <a href="#" @click="logOut($event)"> تسجيل خروج </a> </li>
        </ul>
        <div class="social-media">
            <ul>
                <li>
                    <a href="#"><img src="../../public/img/facebook.png" class="social-media-icon facebook-icon" /></a>
                </li>

                <li>
                    <a href="#"> <img src="../../public/img/instagram.png" class="social-media-icon instgram-icon"> </a>
                </li>
                <li>
                    <img src="../../public/img/telefon.png" class="social-media-icon telefon-icon" />
                    <span> 00963 2345 4876 45</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import authService from "../service/authentication.js"

    export default {
        name: "Header",
        data() {
            return {

            }
        },
        computed: {
            isLogged() {
                return authService.isLogin()
            }
        },

        methods: {
            logOut(event) {
                event.preventDefault();
                console.log("hi i am log out")
                window.localStorage.removeItem("token");
                window.sessionStorage.removeItem("token");
                window.location = "http://localhost:8080/login"
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        // direction: rtl;
        direction: rtl;
        width: 90vw;
        // height: 60px;

        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 2px;
        background: #2193b0;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #6dd5ed, #2193b0);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;

        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;


        .list-header {
            //background-color: red; 
            list-style-type: none;
            display: flex;
            // background-color: red;
            font-size: 1.5rem;


            li {
                a {
                    color: black;
                }

                &:hover {
                    background-color: #6dd5ed;
                }

                &:nth-child(n+2) {
                    margin-right: 5vw;



                }

                a {
                    text-decoration: none;


                }
            }
        }

        div.social-media {

            //background-color: #3e1ece;

            ul {
                display: flex;
                list-style-type: none;
                margin-top: 5px;

                li:nth-child(n+0) {
                    margin-right: 25px;


                    span {
                        font-weight: bold;



                    }
                }


            }
        }
    }

    .social-media-icon {
        width: 35px;
        height: 35px;

    }

    .telefon-icon {
        width: 30px;
        height: 30px;
        margin-top: 5px;

    }
</style>