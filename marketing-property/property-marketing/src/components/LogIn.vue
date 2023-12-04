<template>
    <div>
        <div>
          <router-link to="/"> الصفحة الرئيسية </router-link>  
         </div>
        <form >
            <div class="container">
                <label for="uname"><b> اسم المستخدم </b></label>
                <input type="text" placeholder="اسم المستخدم" name="uname" required v-model="username">

                <label for="psw"><b>كلمة المرور</b></label>
                <input type="password" placeholder="كلمة المرور" name="psw" required  v-model="password">

                <button  @click="login($event)">تسجيل دخول</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"  @change="status($event)"> حفظ بيانات الدخول
                </label>
            </div>


        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
              username:"",
              password:"",
              isRemepered:true,
            }
        },
        methods:{
            login(event){
                event.preventDefault();
                const formdata = new FormData();
                   formdata.append("username",this.username);
                   formdata.append("password",this.password)
                this.$store.dispatch("login",formdata).then(res=>{
                    if(res.status ===200){
                        console.log(this.isRemepered)
                        if(this.isRemepered ===true){
                      window.localStorage.setItem("token",res.data.token)
                        }else{
                           window.sessionStorage.setItem("token",res.data.token)
                        }
                        window.location ="http://localhost:8080"
                    }
                })
                
            },
            status(event){
                event.preventDefault() ;
                this.isRemepered = event.target.checked
            }
        }

    }
</script>


<style scoped lang="scss">
    form {
        border: 3px solid #f1f1f1;
        width: 60vw;
        margin-left: 20vw;
        margin-right: 20vw;
    }

    input[type=text],
    input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
        opacity: 0.8;
    }

    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }

    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    .container {
        padding: 16px;
    }

    span.psw {
        float: right;
        padding-top: 16px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }

        .cancelbtn {
            width: 100%;
        }
    }
</style>