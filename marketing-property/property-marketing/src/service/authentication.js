
import axios from "axios";
const basicUrl ="http://localhost:3000/login"
class Authentication {
   

    login(username,password){
          console.log(username, password)
     return   axios.post(basicUrl,{
            username:username,
            password:password
        },{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            console.log(res)
            return res
        }).catch(err=>{
            console.log(err.response)
            return err.response
        })

    }

    isLogin(){
        const state = window.localStorage.getItem("token") || window.sessionStorage.getItem("token") ;
        return state !=null;
    }

    getToken(){
        return window.localStorage.getItem("token") || window.sessionStorage.getItem("token")
    }

}

const service = new Authentication();
export default service ;