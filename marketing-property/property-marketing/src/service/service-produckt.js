import axios from "axios";
import qs from "qs";
const basicUrl = "http://localhost:3000/produckts"
class  Service{

    
    getProcuckts(){
      return axios.get(`${basicUrl}`).then(res=>{
          return res.data
      }).catch(err=>{
          return err
      })

    }

    addProduckt(dataForm){
        console.log("dataform : ",dataForm.get("location"));
        const data ={
            location :dataForm.get("location"),
            area :dataForm.get("area"),
            features:dataForm.get("features"),
            contact:dataForm.get("contact")
        }
   return     axios.post(`${basicUrl}`,{
           upload : dataForm.get("upload") 
        },{
            headers:{
                "accept":"application/json",
              // authorization : "Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9yd2ExOTg4IiwicGFzc3dvcmQiOiIxMTIzNTgxMyIsImlhdCI6MTY1MjAwNzU5N30.aEsJHKRNehMcF0qurrgRgFbJPQ_u2u7yqNr0fdT12HU",
                "Content-type": "multipart/form-data" ,
                 data:qs.stringify(data)
            }
        }).then(res=>{
            console.log("status is : ",res.status)
            return res.data
        }).catch(err=>{
            console.log(err)
            return err.response.data
        })


    }

    deleteProduckt(id){
        return axios.delete(`${basicUrl}/${id}`,{
            headers:{
              //  authorization:"Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9yd2ExOTg4IiwicGFzc3dvcmQiOiIxMTIzNTgxMyIsImlhdCI6MTY1MjAwNzU5N30.aEsJHKRNehMcF0qurrgRgFbJPQ_u2u7yqNr0fdT12HU"
            }
        }).then(res=>{
            return res.data
        }).catch(err=>{
            return err.response.data
        })
    }
}

const service = new Service();
export default service;